module.exports = {
  title: '徐同保的博客',
  description: 'web前端行业的小学生',
  base: '/blog/',
  dest: './docs',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-4LEVG0M4WF',
      },
    ],
    [
      'script',
      {
      },
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-4LEVG0M4WF');
      `
    ],
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/',
        icon: 'reco-home',
      },
      {
        text: '博客',
        items: [
          { text: 'CSDN', link: 'https://blog.csdn.net/xutongbao' },
          { text: '掘金', link: 'https://juejin.cn/user/2181899635143325' },
          { text: '博客园', link: 'https://www.cnblogs.com/xutongbao/' },
          { text: '51CTO', link: 'https://blog.51cto.com/xutongbao' },
        ],
        icon: 'reco-blog',
      },
      {
        text: '开源项目',
        items: [
          {
            text: '无代码创建表格（react）',
            link: 'https://xutongbao.github.io/air/',
          },
          {
            text: '小米书城（vue3）',
            link: 'https://xutongbao.github.io/#/light/login',
          },
          {
            text: '小米书城（vue3+vite）',
            link: 'https://xutongbao.github.io/vite/vite/#/light/login',
          },
          {
            text: '小米书城（nuxt）',
            link: 'https://xutongbao.github.io/nuxt/',
          },
        ],
      },
      {
        text: '联系作者',
        link: '/src/light/contactMe',
        icon: 'reco-wechat',
      },
    ],
    sidebar: 'auto',
    type: 'blog',
    blogConfig: {},
    logo: '/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    author: '徐同保',
    authorAvatar: '/avatar.png',
    lastUpdated: '上次更新',
    repo: 'xutongbao/blog',
    repoLabel: 'GitHub',
    docsRepo: 'xutongbao/blog',
    // 假如文档不是放在仓库的根目录下：
    //docsDir: 'src',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    smoothScroll: true,
    valineConfig: {
      appId: 'SJjdna4vjtCg05IFqHTWL7u7-gzGzoHsz', // your appId
      appKey: 'IvTxd8pto5XlWkxEAf8k0fYW', // your appKey
    },
  },
  markdown: {
    lineNumbers: true,
  },
  // plugins: [
  //   [
  //     '@vuepress/google-analytics',
  //     {
  //       ga: 'G-4LEVG0M4WF', // UA-00000000-0
  //     },
  //   ],
  // ],
}
