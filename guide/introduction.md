# 简介

OneBot Expand 是一个 OneBot v11 + NapCat 扩展 API 完整封装插件，提供 **185 个 Tool 组件** 和 **23 个 Service 组件**，通过 `onebot_adapter` 调用 NapCat / SnowLuma 等协议端的全部扩展能力。

## 定位

OneBot Expand 的核心价值在于：

- **统一封装**：将 OneBot v11 标准、NapCat 扩展、go-cqhttp 兼容、SnowLuma 独有 API 统一封装为一套一致的 Tool/Service 接口
- **双协议端支持**：同时兼容 NapCat 与 SnowLuma，每个 API 单独标记兼容性
- **LLM 友好**：每个 API 对应一个 Tool 类，LLM 可直接调用；Service 层供其他插件程序化调用
- **安全可控**：Tool 总开关 + 独立开关双重控制，默认全部关闭

## 与 onebot_adapter 的关系

OneBot Expand 依赖 `onebot_adapter` 插件提供的适配器层。调用链如下：

```
LLM 调用 → Tool.execute → _call_onebot_api → onebot_adapter → NapCat/SnowLuma
其他插件 → Service.method → _call_onebot_api → onebot_adapter → NapCat/SnowLuma
```

## 协议端兼容性

| 协议端 | 支持 API 数 | 说明 |
|---|---|---|
| NapCat | 167 / 185 | 基于 NTQQ 的 Bot 协议端实现 |
| SnowLuma | 169 / 185 | 基于 NTQQ 的远程协议框架 |

::: tip 提示
部分 API 为某一方专属（如 NapCat 的在线文件、SnowLuma 的 QQ 空间），调用前请查阅 API 文档的兼容性徽章。
:::

## 下一步

- [快速开始](./getting-started) — 安装并启用第一个 Tool
- [架构设计](./architecture) — 了解双层组件设计
- [配置说明](./configuration) — 完整配置项参考
