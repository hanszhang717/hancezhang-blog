import type { APIRoute } from 'astro';
import { feed } from '../../lib/feed';
import { LANGS, type Lang } from '../../i18n';

export const getStaticPaths = () => LANGS.map((lang) => ({ params: { lang } }));

export const GET: APIRoute = ({ params }) => feed(params.lang as Lang, `/${params.lang}/index.xml`);
