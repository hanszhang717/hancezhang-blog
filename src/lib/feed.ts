import rss from '@astrojs/rss';
import { getPosts } from './posts';
import { ui, type Lang } from '../i18n';
import { SITE } from '../site.config';

/** Full-text RSS for one language. Served at the same paths the old site used. */
export async function feed(lang: Lang, path: string): Promise<Response> {
  const posts = await getPosts(lang);
  return rss({
    title: lang === 'zh' ? `${SITE.author}（中文）` : SITE.author,
    description: ui(lang).siteDescription,
    site: `${SITE.url}/${lang}/`,
    stylesheet: '/rss.xsl',
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
    customData: [
      `<language>${lang === 'zh' ? 'zh-CN' : 'en-US'}</language>`,
      `<atom:link href="${SITE.url}${path}" rel="self" type="application/rss+xml"/>`,
    ].join(''),
    items: posts.map((post) => ({
      title: post.title,
      link: post.url,
      pubDate: post.date,
      description: post.description,
      content: post.entry.rendered?.html,
      categories: post.topics.map((topic) => topic.name),
      author: `${SITE.email} (${SITE.author})`,
    })),
  });
}
