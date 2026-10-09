import type { APIRoute } from 'astro';
import { getPosts, plainText } from '../../lib/posts';
import { LANGS, type Lang } from '../../i18n';

export const getStaticPaths = () => LANGS.map((lang) => ({ params: { lang } }));

/** Full-text index for the search box on the writing page, fetched on first use. */
export const GET: APIRoute = async ({ params }) => {
  const posts = await getPosts(params.lang as Lang);
  const index = posts.map((post) => ({
    url: post.url,
    text: [post.title, post.description, ...post.topics.map((topic) => topic.name), plainText(post.entry.body ?? '')].join(
      ' ',
    ),
  }));
  return new Response(JSON.stringify(index), { headers: { 'Content-Type': 'application/json' } });
};
