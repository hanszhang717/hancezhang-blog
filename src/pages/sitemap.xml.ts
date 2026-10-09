import type { APIRoute } from 'astro';
import { getPosts, getTopics } from '../lib/posts';
import { LANGS, LOCALES, type Lang } from '../i18n';
import { SITE } from '../site.config';

type Page = { paths: Partial<Record<Lang, string>>; lastmod?: Date };

const escape = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;');

export const GET: APIRoute = async () => {
  const posts = await getPosts();
  const pages: Page[] = ['', 'posts/', 'about/', 'subscribe/'].map((path) => ({
    paths: Object.fromEntries(LANGS.map((lang) => [lang, `/${lang}/${path}`])),
  }));

  for (const lang of LANGS) {
    const own = posts.filter((post) => post.lang === lang);
    for (const topic of getTopics(own)) {
      pages.push({ paths: { [lang]: `/${lang}/categories/${topic.slug}/` } });
    }
  }

  // One entry per essay, listing every language version as an alternate.
  const byKey = Map.groupBy(posts, (post) => post.key);
  for (const versions of byKey.values()) {
    pages.push({
      paths: Object.fromEntries(versions.map((post) => [post.lang, post.url])),
      lastmod: new Date(Math.max(...versions.map((post) => (post.entry.data.updated ?? post.date).getTime()))),
    });
  }

  const urls = pages.flatMap(({ paths, lastmod }) => {
    const versions = Object.entries(paths) as [Lang, string][];
    const alternates =
      versions.length > 1
        ? versions.map(
            ([lang, path]) =>
              `<xhtml:link rel="alternate" hreflang="${LOCALES[lang].html}" href="${escape(SITE.url + path)}"/>`,
          )
        : [];
    return versions.map(([, path]) =>
      [
        '<url>',
        `<loc>${escape(SITE.url + path)}</loc>`,
        lastmod ? `<lastmod>${lastmod.toISOString().slice(0, 10)}</lastmod>` : '',
        ...alternates,
        '</url>',
      ].join(''),
    );
  });

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    '</urlset>',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
