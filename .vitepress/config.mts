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
      link: '/guide/quickstart/deploy-by-docker'
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
        text: '快速开始',
        collapsed: false,
        items: [
          { text: 'docker 部署', link: '/guide/quickstart/deploy-by-docker' },
          { text: '源码部署', link: '/guide/quickstart/deploy-by-sourcecode' },
        ]
      },
      {
        text: '插件介绍',
        collapsed: false,
        items: [
          {
            text: '插件介绍', link: '/guide/plugins/plugins-guide',
            items: [
              { text: '帮助信息', link: '/guide/plugins/help' },
              { text: '插件管理', link: '/guide/plugins/plugin-manage' },
              { text: '通用事件处理', link: '/guide/plugins/eventmanage' },
              { text: '疯狂星期四', link: '/guide/plugins/crazy-thursday' },
              { text: '今日运势', link: '/guide/plugins/fortune' },
              { text: '每日早报', link: '/guide/plugins/daily-news' },
              { text: '今日猪猪', link: '/guide/plugins/pig-today' },
              { text: '切噜语 / 齁哦语转换', link: '/guide/plugins/chieru' },
              { text: '涩涩', link: '/guide/plugins/setu' },
              { text: '反 GBF', link: '/guide/plugins/anti-gbf' },
              { text: '要我一直 IMAGE 吗', link: '/guide/plugins/yizhi' },
              { text: '麦麦适配器', link: '/guide/plugins/maimai' },
              { text: '示例模块', link: '/guide/plugins/example' },
            ]
          },
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
