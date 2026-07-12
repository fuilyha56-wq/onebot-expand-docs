/**
 * OneBot Expand 文档站 MD3 主题入口。
 *
 * 继承 VitePress 默认主题，注入 MD3 设计令牌和自定义组件。
 */

import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

import './styles/tokens.css'
import './styles/overrides.css'

import ApiBadge from './components/ApiBadge.vue'
import ApiTable from './components/ApiTable.vue'
import ApiCard from './components/ApiCard.vue'

export default {
  extends: DefaultTheme,

  enhanceApp({ app }) {
    // 注册全局组件，可在 Markdown 中直接使用
    app.component('ApiBadge', ApiBadge)
    app.component('ApiTable', ApiTable)
    app.component('ApiCard', ApiCard)
  },

  Layout: () => {
    // 保持默认布局，未来可在此插入自定义槽位
    return h(DefaultTheme.Layout, null, {})
  },
} satisfies Theme
