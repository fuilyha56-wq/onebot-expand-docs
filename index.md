---
layout: home

hero:
  name: OneBot Expand
  text: OneBot v11 + NapCat 扩展 API 完整封装
  tagline: v1.0.12 · 211 个 Tool 组件 · 23 个 Service 组件 · NapCat / SnowLuma / LLBot 三协议端支持
  image:
    src: /logo.svg
    alt: OneBot Expand
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: API 文档
      link: /api/

features:
  - icon: 🛠️
    title: 211 个 Tool 组件
    details: 每个 API 对应一个 Tool 类，供 LLM 直接调用，覆盖消息、群操作、文件、账号、扩展等 21 个功能域，支持 NapCat / SnowLuma / LLBot 三方协议端。
  - icon: 🧩
    title: 23 个 Service 组件
    details: 按功能域聚合的 Service 层，供其他插件程序化调用，不受 Tool 总开关影响，始终可用。
  - icon: 🔌
    title: 三协议端支持
    details: 同时兼容 NapCat、SnowLuma 与 LLBot，每个 API 单独标记兼容性，调用方可按需选择合适的协议端。
  - icon: 🔄
    title: 别名机制
    details: 处理历史别名（如 nc_get_rkey → get_rkey），别名与主名共用同一开关和 handler，调用时自动解析为主名。
  - icon: 🔒
    title: 安全开关
    details: Tool 总开关 + 独立开关双重控制，默认全部关闭，按需显式启用，Service 路径始终不受影响。
  - icon: 🎨
    title: 现代简约文档
    details: 全新设计的文档站，清新青色主题，充足留白，柔和阴影，响应式布局，支持亮/暗色模式。
---
