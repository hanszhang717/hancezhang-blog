/**
 * Sätteri HAST plugin applied to every post:
 *  - a paragraph containing nothing but a YouTube link becomes a click-to-load
 *    embed (a plain linked thumbnail without JS, e.g. in RSS readers);
 *  - headings get stable ids plus a hover anchor for sharing a section.
 */
import GithubSlugger from 'github-slugger';

const YOUTUBE_URL =
  /^https?:\/\/(?:www\.|m\.)?(?:youtube\.com\/watch\?(?:[^#]*&)?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/;

interface HastNode {
  type: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
}

interface VisitContext {
  textContent(node: HastNode): string;
  setProperty(node: HastNode, key: string, value: unknown): void;
  appendChild(node: HastNode, child: HastNode): void;
}

interface FactoryContext {
  fileURL: URL | undefined;
}

function youtubeId(paragraph: HastNode): string | undefined {
  const children = (paragraph.children ?? []).filter(
    (child) => !(child.type === 'text' && !child.value?.trim()),
  );
  const [only] = children;
  if (children.length !== 1 || only.type !== 'element' || only.tagName !== 'a') return;
  const href = only.properties?.href;
  return typeof href === 'string' ? YOUTUBE_URL.exec(href)?.[1] : undefined;
}

function videoEmbed(id: string, label: string): HastNode {
  const url = `https://www.youtube.com/watch?v=${id}`;
  return {
    type: 'raw',
    value:
      `<figure class="embed-video">` +
      `<a class="embed-video-link" href="${url}" data-youtube="${id}" target="_blank" rel="noopener">` +
      `<img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" width="480" height="360" loading="lazy" decoding="async">` +
      `<span class="embed-video-play"><span class="visually-hidden">${label}</span></span>` +
      `</a></figure>`,
  };
}

export const enhanceArticle = ({ fileURL }: FactoryContext) => {
  const slugger = new GithubSlugger();
  const playLabel = fileURL?.pathname.includes('/zh/') ? '播放视频' : 'Play video';

  return {
    name: 'enhance-article',
    element: [
      {
        filter: ['p'],
        visit(node: HastNode) {
          const id = youtubeId(node);
          if (id) return videoEmbed(id, playLabel);
        },
      },
      {
        filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        visit(node: HastNode, ctx: VisitContext) {
          // Setting the id here makes Astro's own heading-id pass reuse it.
          const id = slugger.slug(ctx.textContent(node));
          ctx.setProperty(node, 'id', id);
          ctx.appendChild(node, {
            type: 'raw',
            value: `<a class="heading-anchor" href="#${encodeURIComponent(id)}" aria-hidden="true" tabindex="-1"></a>`,
          });
        },
      },
    ],
  };
};
