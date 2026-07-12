# get_guild_list

获取频道列表。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="unsupported" />

::: tip 来源
NapCat / LLBot 扩展
:::

## 参数

无参数。

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `guild_list` | array | 频道列表 |

**`guild_list` 元素结构：**

| 字段 | 类型 | 说明 |
|---|---|---|
| `guild_id` | str | 频道 ID |
| `guild_name` | str | 频道名称 |
| `guild_display_id` | int | 频道显示 ID |
| `channels` | array | 子频道列表 |

**`channels` 元素结构：**

| 字段 | 类型 | 说明 |
|---|---|---|
| `channel_id` | str | 子频道 ID |
| `channel_name` | str | 子频道名称 |
| `channel_type` | int | 子频道类型 |

## 示例

**请求：**

```json
{
  "action": "get_guild_list",
  "params": {}
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "guild_list": [
      {
        "guild_id": "123456789",
        "guild_name": "我的频道",
        "guild_display_id": 123456789,
        "channels": [
          {
            "channel_id": "987654321",
            "channel_name": "聊天室",
            "channel_type": 1
          },
          {
            "channel_id": "987654322",
            "channel_name": "公告板",
            "channel_type": 2
          }
        ]
      }
    ]
  },
  "echo": "1"
}
```

## 三方差异

NapCat 与 LLBot 均支持此 API。SnowLuma 与 OneBot v11 标准不支持此 API。返回字段结构因实现版本而异。

## 相关 API

- [`get_config`](./get-config) — 获取机器人配置
- [`get_event`](./get-event) — 获取事件列表
- [`llonebot_debug`](./llonebot-debug) — LLBot 调试接口