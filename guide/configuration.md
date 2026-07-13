# 配置说明

配置文件位于 `config/plugins/onebot_expand/config.toml`。

## 主要配置节

### `[plugin]` — 插件启用与版本

```toml
[plugin]
enabled = true       # 插件总开关
version = "1.0.2"     # 插件版本
```

### `[adapter]` — 适配器配置

```toml
[adapter]
signature = "onebot_adapter:adapter:onebot_adapter"  # 适配器签名
default_timeout = 30.0                                # 默认超时（秒）
protocol_endpoint = "napcat"                          # 协议端后端（napcat/snowluma）
```

### `[api_switches]` — API 级独立开关

```toml
[api_switches]
enable_all_tools = false              # Tool 总开关（默认 false）
enable_send_group_msg = false         # 群聊消息发送
enable_send_private_msg = false        # 私聊消息发送
enable_get_qzone_msg_list = false     # QQ空间说说列表
# ... 共 205 个 enable_<action> 开关
```

::: warning 默认全部关闭
所有 `enable_<action>` 开关默认为 `false`。即使 `enable_all_tools = true`，也需要显式将需要的 API 开关设为 `true`。
:::

### `[emoji]` — 表情发送与回应

```toml
[emoji]
enable_send_emoji = true       # 表情发送开关
enable_emoji_like = true       # 表情回应开关
```

### `[file_transfer]` — 文件传输模式

```toml
[file_transfer]
mode = "path_mapper"  # 路径映射 / base64 / 共享卷
```

### `[protocol]` — 协议端后端与兼容模式

```toml
[protocol]
backend = "napcat"           # napcat / snowluma / llbot
compat_mode = "auto"         # auto / strict / loose
```

## API 开关格式

每个 API 对应一个开关 `enable_<action>`，**默认全部 `false`**。示例：

```toml
[api_switches]
enable_all_tools = true          # Tool 总开关（默认 false，需显式开启）
enable_send_group_msg = true     # 群聊消息发送（默认 false）
enable_get_qzone_msg_list = true # QQ空间说说列表（默认 false）
```

## 下一步

- [架构设计](./architecture) — 了解开关机制的设计原理
- [API 文档](../api/) — 浏览全部 205 个 API
