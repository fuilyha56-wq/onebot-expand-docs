# 快速开始

本指南帮助你安装 OneBot Expand 插件并启用第一个 Tool。

## 前置条件

- Neo-MoFox 运行环境（Python >= 3.11，`uv` 包管理器）
- `onebot_adapter` 插件已安装
- NapCat 或 SnowLuma 协议端已运行

## 安装

OneBot Expand 作为 Neo-MoFox 插件，放置在 `plugins/` 目录下即可：

```bash
# 插件目录结构
plugins/
└── onebot_expand/
    ├── __init__.py
    ├── api_defs.py
    ├── config.py
    ├── plugin.py
    ├── services/
    └── tools/
```

## 配置

编辑 `config/plugins/onebot_expand/config.toml`：

```toml
[plugin]
enabled = true
version = "1.0.2"

[adapter]
signature = "onebot_adapter:adapter:onebot_adapter"
default_timeout = 30.0
protocol_endpoint = "napcat"  # 或 "snowluma"

[api_switches]
# Tool 总开关（默认 false，需显式开启）
enable_all_tools = true

# 启用群聊消息发送
enable_send_group_msg = true

# 启用私聊消息发送
enable_send_private_msg = true
```

::: warning 重要
`enable_all_tools` 默认为 `false`。即使你设置了某个 API 的 `enable_<action> = true`，如果总开关未开启，该 Tool 仍然会被禁用。
:::

## 启用第一个 Tool

以 `send_group_msg`（发送群聊消息）为例：

1. 在 `config.toml` 中设置 `enable_all_tools = true`
2. 设置 `enable_send_group_msg = true`
3. 重启 Neo-MoFox
4. LLM 即可通过 Tool 调用发送群聊消息

## 验证

启用后，你可以通过测试适配器验证 API 可用性：

```python
from onebot_expand.tests import call_napcat, is_available

if is_available():
    result = call_napcat("get_login_info", {})
    print(result)  # {"status": "ok", "retcode": 0, "data": {"user_id": ..., "nickname": ...}}
```

## 下一步

- [配置说明](./configuration) — 了解所有配置项
- [架构设计](./architecture) — 了解 Tool/Service 双层设计
- [API 文档](../api/) — 浏览全部 185 个 API
