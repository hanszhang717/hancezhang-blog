import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { enhanceArticle } from './src/lib/markdown';

export default defineConfig({
  site: 'https://www.hancezhang.blog',
  // Matches the URLs the old Hugo site published (/en/posts/slug/), so links keep working.
  trailingSlash: 'always',
  build: { format: 'directory' },
  markdown: {
    processor: satteri({ hastPlugins: [enhanceArticle] }),
  },
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
