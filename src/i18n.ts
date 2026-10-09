export const LANGS = ['en', 'zh'] as const;
export type Lang = (typeof LANGS)[number];

export const LOCALES: Record<Lang, { html: string; date: string; og: string; name: string }> = {
  en: { html: 'en', date: 'en-US', og: 'en_US', name: 'English' },
  zh: { html: 'zh-CN', date: 'zh-CN', og: 'zh_CN', name: '中文' },
};

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'zh' : 'en');

const en = {
  siteDescription: 'Essays by Hance Zhang on AI, products, business models, investing, and relationships.',
  skipToContent: 'Skip to content',
  navMain: 'Main',
  navElsewhere: 'Elsewhere',
  navTopics: 'Topics',
  navMoreEssays: 'More essays',
  navWriting: 'Writing',
  navAbout: 'About',
  navSubscribe: 'Subscribe',
  toggleTheme: 'Toggle dark mode',

  heroTitle: 'Hi, I’m Hance.',
  heroLede: 'I write about AI, product building, business models, investing, and human relationships.',
  heroCta: 'Read the essays',
  latest: 'Latest essay',
  startHere: 'Start here',
  recent: 'Recent',
  allEssays: (n: number) => `All ${n} essays`,
  readEssay: 'Read the essay',

  writingTitle: 'Writing',
  writingIntro: (n: number, since: number) =>
    `${n} essays since ${since}, most of them in both English and Chinese.`,
  searchPlaceholder: 'Search essays',
  allTopics: 'All',
  noResults: 'Nothing matches that search.',
  topicIntro: (topic: string, n: number) => `${n} ${n === 1 ? 'essay' : 'essays'} on ${topic}.`,

  minRead: (n: number) => `${n} min read`,
  readInOther: '阅读中文版',
  contents: 'Contents',
  previous: 'Previous',
  next: 'Next',
  backToWriting: 'All writing',

  subscribeTitle: 'Subscribe',
  subscribeLede: 'Get new essays as soon as they’re published.',
  subscribeEmailLabel: 'Email address',
  subscribeButton: 'Subscribe',
  subscribePrivacy: 'One email per new essay. Unsubscribe anytime.',
  subscribeRss: 'RSS',
  subscribeRssHint: 'Paste a feed into any reader, such as Feedly, Inoreader, or NetNewsWire.',
  copy: 'Copy',
  copied: 'Copied',
  followX: 'Follow on X',
  emailMe: 'Email',
  // Says nothing about email: the email form only exists once SITE.newsletter is configured.
  endnote: 'Thanks for reading.',
  endnoteLink: 'Subscribe to new essays',

  notFoundTitle: 'Page not found',
  notFoundBody: 'This page doesn’t exist, or it moved when the site was rebuilt.',
  notFoundHome: 'Go to the home page',
};

export type UIStrings = typeof en;

const zh: UIStrings = {
  siteDescription: 'Hance Zhang 的文章：AI、产品、商业模式、投资与人际关系。',
  skipToContent: '跳到正文',
  navMain: '主导航',
  navElsewhere: '其他链接',
  navTopics: '主题',
  navMoreEssays: '更多文章',
  navWriting: '文章',
  navAbout: '关于',
  navSubscribe: '订阅',
  toggleTheme: '切换深色模式',

  heroTitle: '你好，我是 Hance。',
  heroLede: '我写 AI、产品、商业模式、投资，以及人与人之间的关系。',
  heroCta: '开始阅读',
  latest: '最新文章',
  startHere: '从这里开始',
  recent: '近期',
  allEssays: (n: number) => `全部 ${n} 篇文章`,
  readEssay: '阅读全文',

  writingTitle: '文章',
  writingIntro: (n: number, since: number) => `自 ${since} 年以来的 ${n} 篇文章，大多有中英两个版本。`,
  searchPlaceholder: '搜索文章',
  allTopics: '全部',
  noResults: '没有找到相关文章。',
  topicIntro: (topic: string, n: number) => `「${topic}」主题下的 ${n} 篇文章。`,

  minRead: (n: number) => `约 ${n} 分钟`,
  readInOther: 'Read in English',
  contents: '目录',
  previous: '上一篇',
  next: '下一篇',
  backToWriting: '全部文章',

  subscribeTitle: '订阅',
  subscribeLede: '新文章发布后第一时间收到。',
  subscribeEmailLabel: '邮箱地址',
  subscribeButton: '订阅',
  subscribePrivacy: '每篇新文章一封邮件，随时可以退订。',
  subscribeRss: 'RSS',
  subscribeRssHint: '把订阅地址粘贴到任意 RSS 阅读器即可，例如 Feedly、Inoreader、NetNewsWire。',
  copy: '复制',
  copied: '已复制',
  followX: '在 X 上关注',
  emailMe: '邮件',
  endnote: '感谢阅读。',
  endnoteLink: '订阅新文章',

  notFoundTitle: '页面不存在',
  notFoundBody: '这个页面不存在，或者在网站改版时换了地址。',
  notFoundHome: '回到首页',
};

const strings: Record<Lang, UIStrings> = { en, zh };

export const ui = (lang: Lang): UIStrings => strings[lang];

/** Display names for categories, keyed by slug. Unknown categories fall back to their raw name. */
export const TOPICS: Record<string, Record<Lang, string>> = {
  ai: { en: 'AI', zh: 'AI' },
  investing: { en: 'Investing', zh: '投资' },
  leadership: { en: 'Leadership', zh: '领导力' },
  mindsets: { en: 'Mindsets', zh: '思维' },
  personal: { en: 'Personal', zh: '个人' },
  product: { en: 'Product', zh: '产品' },
  work: { en: 'Work', zh: '工作' },
};
