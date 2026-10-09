import { getCollection, type CollectionEntry } from 'astro:content';
import { LOCALES, TOPICS, type Lang } from '../i18n';

export interface Topic {
  slug: string;
  name: string;
}

export interface Post {
  entry: CollectionEntry<'posts'>;
  lang: Lang;
  /** Shared by the English and Chinese versions of the same essay (the file name). */
  key: string;
  slug: string;
  url: string;
  title: string;
  /** The author's one-line summary from the front matter. */
  summary?: string;
  /** The summary, or the opening of the essay when there is none. */
  description: string;
  date: Date;
  topics: Topic[];
  featured: boolean;
  minutes: number;
}

const CJK = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}]/gu;
// Silent reading speeds for non-fiction (IReST, Trauzettel-Klosinski et al. 2012):
// these make the Chinese and English versions of an essay come out about equal.
const CJK_PER_MINUTE = 300;
const WORDS_PER_MINUTE = 230;

/** Markdown to plain prose: drops code, links' URLs, HTML and formatting marks. */
export function plainText(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/^\s{0,3}(#{1,6}|>|[-*+]|\d+\.)\s+/gm, '')
    .replace(/[*_`~|]|^-{3,}$/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Chinese is counted by characters and English by words, so mixed text gets a fair estimate. */
function readingMinutes(markdown: string): number {
  const text = plainText(markdown);
  const characters = text.match(CJK)?.length ?? 0;
  const words = text.replace(CJK, ' ').match(/[\p{L}\p{N}]+(?:['’][\p{L}]+)*/gu)?.length ?? 0;
  return Math.max(1, Math.round(characters / CJK_PER_MINUTE + words / WORDS_PER_MINUTE));
}

function excerpt(markdown: string, lang: Lang): string {
  const text = plainText(markdown);
  const limit = lang === 'zh' ? 90 : 180;
  if (text.length <= limit) return text;
  const cut = text.slice(0, limit);
  const boundary = lang === 'zh' ? cut.length : cut.lastIndexOf(' ');
  return `${cut.slice(0, boundary > 0 ? boundary : limit).replace(/[\s,.;:，。；：、]+$/u, '')}…`;
}

/** Curly quotes for front-matter text, which skips the Markdown pipeline's SmartyPants pass. */
function smartQuotes(text: string): string {
  return text
    .replace(/(^|[\s([{—–-])"/g, '$1“')
    .replace(/"/g, '”')
    .replace(/(\p{L})'(\p{L})/gu, '$1’$2')
    .replace(/(^|[\s([{“—–-])'/g, '$1‘')
    .replace(/'/g, '’');
}

const topicSlug = (name: string) => name.trim().toLowerCase().replace(/\s+/g, '-');

const topicName = (slug: string, lang: Lang, fallback: string) => TOPICS[slug]?.[lang] ?? fallback;

function toPost(entry: CollectionEntry<'posts'>): Post {
  const [lang, , key] = entry.id.split('/') as [Lang, string, string];
  const { data } = entry;
  const body = entry.body ?? '';
  const slug = data.slug ?? key;
  const summary = data.summary && smartQuotes(data.summary);
  return {
    entry,
    lang,
    key,
    slug,
    url: `/${lang}/posts/${slug}/`,
    title: smartQuotes(data.title),
    summary,
    description: summary ?? excerpt(body, lang),
    date: data.date,
    topics: data.categories.map((name) => {
      const slug = topicSlug(name);
      return { slug, name: topicName(slug, lang, name) };
    }),
    featured: data.featured,
    minutes: readingMinutes(body),
  };
}

// Ties break on the file name, so both languages list same-day essays in the same order.
const newestFirst = (a: Post, b: Post) => b.date.getTime() - a.date.getTime() || a.key.localeCompare(b.key);

/** Published posts, newest first. Drafts only show up in `astro dev`. */
export async function getPosts(lang?: Lang): Promise<Post[]> {
  const entries = await getCollection(
    'posts',
    (entry) => (import.meta.env.DEV || !entry.data.draft) && (!lang || entry.id.startsWith(`${lang}/`)),
  );
  return entries.map(toPost).sort(newestFirst);
}

export function getTopics(posts: Post[]): (Topic & { count: number })[] {
  const counts = new Map<string, Topic & { count: number }>();
  for (const topic of posts.flatMap((post) => post.topics)) {
    const current = counts.get(topic.slug) ?? { ...topic, count: 0 };
    current.count += 1;
    counts.set(topic.slug, current);
  }
  return [...counts.values()].sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function formatDate(date: Date, lang: Lang, month: 'long' | 'short' = 'long'): string {
  return new Intl.DateTimeFormat(LOCALES[lang].date, {
    year: 'numeric',
    month: lang === 'zh' ? 'long' : month,
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

/** "Oct 9" / "10月9日", for lists that are already grouped by year. */
export function formatMonthDay(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(LOCALES[lang].date, {
    month: lang === 'zh' ? 'long' : 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

export function groupByYear(posts: Post[]): [number, Post[]][] {
  const years = new Map<number, Post[]>();
  for (const post of posts) {
    const year = post.date.getUTCFullYear();
    years.set(year, [...(years.get(year) ?? []), post]);
  }
  return [...years.entries()];
}
