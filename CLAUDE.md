# Notes for Claude

- Essays live in `content/en/posts/<slug>.md` and `content/zh/posts/<slug>.md`. The English and Chinese versions share a file name; that is how translations are paired. The front matter schema is in `src/content.config.ts`, and the README's "Writing a post" section shows an example.
- When adding an essay in one language, add the other language too unless told otherwise.
- Run `npm run build` before committing, and `npm run check` after code changes.
- Never commit `dist/` or `node_modules/`; Vercel builds the site on push.
