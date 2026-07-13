# unset_msg_emoji_like

取消消息表情表态。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="unsupported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
LLBot 扩展
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `message_id` | int | - | ✅ | 消息 ID |
| `emoji_id` | int | - | ✅ | 表情 ID |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "unset_msg_emoji_like",
  "params": {
    "message_id": 7201234567890,
    "emoji_id": 76
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": null,
  "echo": "1"
}
```

## 四方差异

仅 NapCat 支持（LLBot 扩展）。SnowLuma 与 OneBot v11 标准不支持此 API。

## 相关 API

- [`set_group_reaction`](./set-group-reaction) — 设置群消息表态
- [`get_emoji_likes`](./get-emoji-likes) — 获取消息表态列表
- [`fetch_emoji_like`](./fetch-emoji-like) — 获取表情点赞详情