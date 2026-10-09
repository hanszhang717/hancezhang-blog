<?xml version="1.0" encoding="UTF-8"?>
<!-- Renders the RSS feeds as a readable page when opened in a browser. Feed readers ignore it. -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:variable name="zh" select="starts-with(/rss/channel/language, 'zh')"/>
  <xsl:template match="/">
    <html>
      <xsl:attribute name="lang"><xsl:value-of select="/rss/channel/language"/></xsl:attribute>
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title><xsl:value-of select="/rss/channel/title"/> · RSS</title>
        <style>
          :root { color-scheme: light dark; --bg: #fbfaf7; --text: #1b1a18; --text-2: #5c5852; --rule: #e5e1d8; --accent: #b4361f; --sunken: #f3f1ec; }
          @media (prefers-color-scheme: dark) { :root { --bg: #151514; --text: #ece9e2; --text-2: #aba69c; --rule: #2c2b28; --accent: #f07a62; --sunken: #1d1c1a; } }
          body { margin: 0; background: var(--bg); color: var(--text); font: 16px/1.6 system-ui, -apple-system, "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif; }
          main { max-width: 40rem; margin: 0 auto; padding: 3rem 1.25rem 5rem; }
          .note { padding: 1rem 1.25rem; border-radius: 6px; background: var(--sunken); color: var(--text-2); font-size: 0.9375rem; }
          .note strong { color: var(--text); }
          code { font: 0.875em ui-monospace, Menlo, monospace; word-break: break-all; }
          h1 { margin: 2.5rem 0 0.5rem; font: 600 2rem/1.2 Georgia, "Times New Roman", serif; }
          :lang(zh-CN) h1 { font-family: inherit; }
          .desc { margin: 0 0 2rem; color: var(--text-2); }
          ol { margin: 0; padding: 0; list-style: none; border-top: 1px solid var(--rule); }
          li { padding: 1rem 0; border-bottom: 1px solid var(--rule); }
          li a { color: var(--text); font-weight: 600; text-decoration: none; }
          li a:hover { color: var(--accent); }
          li p { margin: 0.25rem 0 0; color: var(--text-2); font-size: 0.9375rem; }
          .home { display: inline-block; margin-top: 2rem; color: var(--accent); text-decoration: none; }
        </style>
      </head>
      <body>
        <main>
          <p class="note">
            <xsl:choose>
              <xsl:when test="$zh"><strong>这是一个 RSS 订阅源。</strong>把当前网址复制到 RSS 阅读器（如 Feedly、Inoreader、NetNewsWire）中，就能自动收到新文章。</xsl:when>
              <xsl:otherwise><strong>This is an RSS feed.</strong> Copy this page’s address into a feed reader such as Feedly, Inoreader, or NetNewsWire to get new essays automatically.</xsl:otherwise>
            </xsl:choose>
          </p>
          <h1><xsl:value-of select="/rss/channel/title"/></h1>
          <p class="desc"><xsl:value-of select="/rss/channel/description"/></p>
          <ol>
            <xsl:for-each select="/rss/channel/item">
              <li>
                <a><xsl:attribute name="href"><xsl:value-of select="link"/></xsl:attribute><xsl:value-of select="title"/></a>
                <p><xsl:value-of select="description"/></p>
              </li>
            </xsl:for-each>
          </ol>
          <a class="home"><xsl:attribute name="href"><xsl:value-of select="/rss/channel/link"/></xsl:attribute>
            <xsl:choose><xsl:when test="$zh">← 回到网站</xsl:when><xsl:otherwise>← Back to the site</xsl:otherwise></xsl:choose>
          </a>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
