// The old site also advertised a feed at /<lang>/posts/index.xml; keep it alive for existing subscribers.
import type { APIRoute } from 'astro';
import { feed } from '../../../lib/feed';
import { LANGS, type Lang } from '../../../i18n';

export const getStaticPaths = () => LANGS.map((lang) => ({ params: { lang } }));

export const GET: APIRoute = ({ params }) => feed(params.lang as Lang, `/${params.lang}/posts/index.xml`);
