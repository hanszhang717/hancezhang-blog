import type { ImageMetadata } from 'astro';

/**
 * Cover paintings live in src/assets/covers/, one per essay, named by the essay's file name
 * (the key shared by its English and Chinese versions), so front matter stays untouched.
 */
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/covers/*.jpg', { eager: true });

const covers = new Map(
  Object.entries(files).map(([path, module]) => [path.split('/').pop()!.replace(/\.jpg$/, ''), module.default]),
);

export function coverFor(key: string): ImageMetadata | undefined {
  return covers.get(key);
}
