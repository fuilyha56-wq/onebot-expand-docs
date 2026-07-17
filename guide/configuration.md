# 配置说明

配置文件位于 `config/plugins/onebot_expand/config.toml`。

## 主要配置节

### `[plugin]` — 插件启用与版本

```toml
[plugin]
enabled = true       # 插件总开关
config_version = "1.0.0"  # 配置文件版本，用于版本追踪与迁移
```

### `[adapter]` — 适配器配置

```toml
[adapter]
adapter_signature = "onebot_adapter:adapter:onebot_adapter"  # 适配器签名
default_timeout = 30.0                                         # 默认超时（秒）
protocol = "napcat"                                            # napcat 或 snowluma
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
enable_send_emoji = true              # 表情发送开关
enable_reaction_emoji = true          # 表情回应开关
send_emoji_enabled_ids = []           # 空列表表示允许所有表情 ID
reaction_emoji_enabled_ids = []       # 空列表表示允许所有回应表情 ID
```

### `[file_transfer]` — 文件传输模式

```toml
[file_transfer]
enable_path_mapping = false
enable_base64_transfer = true          # 默认使用 base64 传输
enable_shared_volume = false
path_mappings = []                     # 例如 ["/app/data|/mnt/shared"]
shared_volume_root = ""
auto_detect_mode = false
max_base64_size_mb = 10
```

### `[protocol]` — 协议端后端与兼容模式

```toml
[protocol]
backend = "napcat"                 # napcat 或 snowluma
snowluma_compat_mode = false         # 本地拦截 NapCat 专属 API
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
