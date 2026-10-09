# hancezhang.blog

Personal site and essays of Hance Zhang, in English and Chinese. Built with [Astro](https://astro.build), deployed on Vercel.

## Writing a post

1. Create the same file name in both languages. The two files are treated as translations of each other, and the file name becomes the URL:

   ```
   content/en/posts/my-essay.md   →  /en/posts/my-essay/
   content/zh/posts/my-essay.md   →  /zh/posts/my-essay/
   ```

2. Start each file with front matter:

   ```yaml
   ---
   title: "My Essay"
   date: 2026-10-09
   summary: "One line, shown under the title, in lists, and in RSS."
   categories: ["Mindsets"] # AI, Investing, Leadership, Mindsets, Personal, Product, Work
   featured: true # optional: list it under "Start here" on the home page
   draft: true # optional: visible only in `npm run dev`
   slug: "custom-url" # optional: use this instead of the file name in the URL
   ---
   ```

3. Write the body in Markdown. A YouTube link on a line of its own becomes an embedded video.

4. Run `npm run dev` to preview at http://localhost:4321, then push to `main` to publish.

Reading time is estimated automatically: 230 English words or 300 Chinese characters per minute.

## Commands

| Command           | What it does                              |
| ----------------- | ----------------------------------------- |
| `npm install`     | Install dependencies (Node 22)            |
| `npm run dev`     | Local preview with live reload            |
| `npm run build`   | Production build into `dist/`             |
| `npm run preview` | Serve the production build locally        |
| `npm run check`   | Type-check the code and content schema    |

## Where things live

```
content/{en,zh}/posts/   Essays (Markdown)
content/{en,zh}/about.md About page
src/site.config.ts       Name, links, email-subscription settings
src/i18n.ts              Interface text in both languages, topic names
src/content.config.ts    Front matter schema
src/lib/                 Post helpers (reading time, dates), RSS, Markdown plugin
src/pages/               Routes: home, writing, post, topics, about, subscribe, feeds, sitemap
src/styles/global.css    Colors, typography, article styles
public/                  Favicon, social image, robots.txt, RSS stylesheet
vercel.json              Build settings and redirects from the old Hugo URLs
```

## Subscriptions

Full-text RSS feeds are published at `/en/index.xml` and `/zh/index.xml`, the same addresses as on the old site, so existing subscribers keep receiving posts.

To add email subscriptions, create a list with any provider that accepts a plain HTML form (Buttondown is the simplest) and set `newsletter.action` in `src/site.config.ts`. The form then appears on the home, subscribe, and article pages.
