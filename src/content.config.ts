import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Entry ids keep the language folder ("en/posts/gpt5"), so the same slug can exist in both languages. */
const pathId = ({ entry }: { entry: string }) => entry.replace(/\.md$/, '');

const optionalText = z
  .string()
  .optional()
  .transform((value) => value?.trim() || undefined);

const posts = defineCollection({
  loader: glob({ pattern: '{en,zh}/posts/*.md', base: './content', generateId: pathId }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    summary: optionalText,
    categories: z.array(z.string()).default([]),
    /** URL segment; defaults to the file name. */
    slug: z.string().optional(),
    draft: z.boolean().default(false),
    /** Listed under "Start here" on the home page. */
    featured: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '{en,zh}/*.md', base: './content', generateId: pathId }),
  schema: z.object({
    title: z.string(),
    description: optionalText,
  }),
});

export const collections = { posts, pages };
