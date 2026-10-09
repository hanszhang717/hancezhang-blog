export const SITE = {
  url: 'https://www.hancezhang.blog',
  author: 'Hance Zhang',
  email: 'hanszhang717@gmail.com',
  x: { handle: '@hance_zhang7', url: 'https://x.com/hance_zhang7' },
  /** Year of the first post, for the copyright line. */
  since: 2024,
  /**
   * Email subscriptions. Leave `action` empty to offer RSS only.
   * Any provider with a plain HTML form works, e.g. Buttondown:
   *   action: 'https://buttondown.com/api/emails/embed-subscribe/<username>'
   */
  newsletter: {
    action: '',
    emailField: 'email',
  },
} as const;
