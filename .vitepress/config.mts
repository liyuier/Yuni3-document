import { defineConfig, type DefaultTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Yuni3",
  description: "一款对接 OneBot 协议的聊天机器人",
  themeConfig: {

    editLink: {
      pattern: "https://github.com/liyuier/Yuni3-document/edit/master/:path",
      text: "文档有误？在 GitHub 上编辑此页"
    },

    search: {
      provider: 'local',
    },

    nav: nav(),

    sidebar: sidebarGuide(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/liyuier/Yuni3' }
    ],
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '首页',
      link: '/',
    },
    {
      text: '用户文档',
      link: '/guide/'
    },
    {
      text: '开发文档',
      link: '/dev/'
    },
    {
      text: 'GitHub', 
        items: [
          { text: 'Yuni3', link: 'https://github.com/liyuier/Yuni3' },
          { text: 'Yuni3-document', link: 'https://github.com/liyuier/Yuni3-document' },
        ]
    }
  ]
}

function sidebarGuide(): DefaultTheme.Sidebar | undefined {
  return {
    '/guide/': [
      {
        text: '用户文档',
        collapsed: false,
        items: [
          { text: 'Yuni 机器人简介', link: '/guide/yuni' },
          { text: '使用简介', link: '/guide/' },
        ]
      },
      {
        text: '部署文档',
        collapsed: false,
        items: [
          { text: '部署简介', link: '/guide/deploy' },
        ]
      },
    ],
    '/dev/': [
      {
        text: '开发文档',
        collapsed: false,
        items: [
          { text: '开发简介', link: '/dev/' },
        ]
      },
      {
        text: '插件开发',
        collapsed: false,
        items: [
          { text: '插件开发简介', link: '/dev/plugin-dev' },
        ]
      }
    ]
  }
}
