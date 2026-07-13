# get_msg

获取消息详情。

## 兼容性

<ApiBadge platform="onebot" status="supported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
OneBot v11 标准 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `message_id` | int | - | ✅ | 消息 ID |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `time` | int | 消息发送时间戳（秒） |
| `message_type` | str | 消息类型，`private` / `group` |
| `message_id` | int | 消息 ID |
| `real_id` | int | 消息真实 ID |
| `sender` | object | 发送者信息，包含 `user_id`、`nickname`、`card` 等字段 |
| `message` | message | 消息内容，OneBot 消息段数组 |

## 示例

**请求：**

```json
{
  "action": "get_msg",
  "params": {
    "message_id": 7201234567890
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "time": 1672531200,
    "message_type": "group",
    "message_id": 7201234567890,
    "real_id": 123456,
    "sender": {
      "user_id": 987654321,
      "nickname": "某群友",
      "card": "群名片"
    },
    "message": [
      { "type": "text", "data": { "text": "你好" } }
    ]
  },
  "echo": "1"
}
```

## 四方差异

四方实现一致，无差异。

## 相关 API

- [`send_msg`](./send-msg) — 发送消息
- [`delete_msg`](./delete-msg) — 撤回消息
- [`get_forward_msg`](./get-forward-msg) — 获取合并转发消息内容
