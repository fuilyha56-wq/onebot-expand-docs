import { defineConfig } from 'vitepress'
import type { ThemeConfig } from 'vitepress'

/**
 * OneBot Expand 文档站配置。
 *
 * 站点部署到 GitHub Pages，base 路径为 /onebot-expand-docs/。
 * 本地开发时通过 docs:dev 启动，访问 http://localhost:5173/onebot-expand-docs/
 */
export default defineConfig({
  lang: 'zh-CN',
  title: 'OneBot Expand',
  description: 'OneBot v11 + NapCat 扩展 API 完整封装插件文档',
  base: '/onebot-expand-docs/',
  cleanUrls: true,
  lastUpdated: true,

  // API 详情页逐步补充中，暂时忽略所有死链接
  ignoreDeadLinks: false,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/onebot-expand-docs/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#006495' }],
  ],

  themeConfig: {
    siteTitle: 'OneBot Expand',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
            },
          },
        },
      },
    },

    nav: [
      { text: '指南', link: '/guide/introduction', activeMatch: '/guide/' },
      { text: 'API', link: '/api/', activeMatch: '/api/' },
      { text: 'Service', link: '/services/', activeMatch: '/services/' },
      { text: '参考', link: '/reference/', activeMatch: '/reference/' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开始',
          collapsed: false,
          items: [
            { text: '简介', link: '/guide/introduction' },
            { text: '快速开始', link: '/guide/getting-started' },
          ],
        },
        {
          text: '核心概念',
          collapsed: false,
          items: [
            { text: '架构设计', link: '/guide/architecture' },
            { text: '配置说明', link: '/guide/configuration' },
          ],
        },
      ],

      '/api/': [
        {
          text: 'API 总览',
          collapsed: false,
          items: [{ text: '全部 API', link: '/api/' }],
        },
        {
          text: '消息 (20)',
          collapsed: true,
          items: [{ text: '概览', link: '/api/message/' }],
        },
        {
          text: '群操作 (10)',
          collapsed: true,
          items: [{ text: '概览', link: '/api/group/' }],
        },
        {
          text: '文件操作 (16)',
          collapsed: true,
          items: [{ text: '概览', link: '/api/file/' }],
        },
        {
          text: '账号信息 (10)',
          collapsed: true,
          items: [{ text: '概览', link: '/api/account/' }],
        },
        {
          text: 'NapCat 扩展 (15)',
          collapsed: true,
          items: [{ text: '概览', link: '/api/napcat-ext/' }],
        },
        {
          text: '群文件管理 (12)',
          collapsed: true,
          items: [{ text: '概览', link: '/api/group-file/' }],
        },
        {
          text: '群公告 (3)',
          collapsed: true,
          items: [{ text: '概览', link: '/api/group-notice/' }],
        },
        {
          text: '群管理扩展 (12)',
          collapsed: true,
          items: [{ text: '概览', link: '/api/group-ext/' }],
        },
        {
          text: '请求处理 (5)',
          collapsed: true,
          items: [{ text: '概览', link: '/api/request/' }],
        },
        {
          text: '用户信息扩展 (9)',
          collapsed: true,
          items: [{ text: '概览', link: '/api/user-ext/' }],
        },
        {
          text: '在线状态 (4)',
          collapsed: true,
          items: [{ text: '概览', link: '/api/status/' }],
        },
        {
          text: '戳一拍 (2)',
          collapsed: true,
          items: [{ text: '概览', link: '/api/poke/' }],
        },
        {
          text: '表情/收藏扩展 (10)',
          collapsed: true,
          items: [{ text: '概览', link: '/api/emoji-ext/' }],
        },
        {
          text: 'AI 语音 (3)',
          collapsed: true,
          items: [{ text: '概览', link: '/api/ai-voice/' }],
        },
        {
          text: '凭证/安全/下载 (8)',
          collapsed: true,
          items: [{ text: '概览', link: '/api/cred/' }],
        },
        {
          text: '机型/其他 (12)',
          collapsed: true,
          items: [{ text: '概览', link: '/api/misc/' }],
        },
        {
          text: '闪传 (11)',
          collapsed: true,
          items: [{ text: '概览', link: '/api/flash/' }],
        },
        {
          text: '群相册 (7)',
          collapsed: true,
          items: [{ text: '概览', link: '/api/group-album/' }],
        },
        {
          text: '群待办 (3)',
          collapsed: true,
          items: [{ text: '概览', link: '/api/group-todo/' }],
        },
        {
          text: 'QQ 空间 (9)',
          collapsed: true,
          items: [{ text: '概览', link: '/api/qzone/' }],
        },
        {
          text: 'Ark 分享 (4)',
          collapsed: true,
          items: [{ text: '概览', link: '/api/ark/' }],
        },
      ],

      '/services/': [
        {
          text: 'Service 层',
          collapsed: false,
          items: [{ text: '概览', link: '/services/' }],
        },
      ],

      '/reference/': [
        {
          text: '参考资料',
          collapsed: false,
          items: [
            { text: '总览', link: '/reference/' },
            { text: 'OneBot v11 标准', link: '/reference/onebot-v11' },
            { text: 'NapCat 扩展', link: '/reference/napcat' },
            { text: 'SnowLuma 扩展', link: '/reference/snowluma' },
            { text: '兼容性矩阵', link: '/reference/compatibility-matrix' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Lycoris/onebot-expand-docs' },
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    outline: {
      level: [2, 3],
      label: '本页导航',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

    lastUpdatedText: '最后更新',

    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',

    editLink: {
      pattern: 'https://github.com/Lycoris/onebot-expand-docs/edit/main/:path',
      text: '在 GitHub 上编辑此页',
    },
  } satisfies ThemeConfig,
})
