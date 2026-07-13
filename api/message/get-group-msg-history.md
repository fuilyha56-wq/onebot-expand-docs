# get_group_msg_history

获取群消息历史（go-cqhttp 兼容）。

## 兼容性

<ApiBadge platform="onebot" status="supported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
go-cqhttp 兼容 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `group_id` | int | - | ✅ | 群号 |
| `message_seq` | int | - | ❌ | 起始消息序号，不传则从最新消息开始 |
| `count` | int | - | ❌ | 获取消息条数 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `messages` | array | 消息列表，每项为消息对象（含 `time`、`message_type`、`message_id`、`sender`、`message` 等字段） |

## 示例

**请求（获取最近消息）：**

```json
{
  "action": "get_group_msg_history",
  "params": {
    "group_id": 123456789,
    "count": 5
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "messages": [
      {
        "time": 1672531200,
        "message_type": "group",
        "message_id": 7201234567890,
        "real_id": 123456,
        "sender": {
          "user_id": 987654321,
          "nickname": "群友A",
          "card": "名片A"
        },
        "message": [
          { "type": "text", "data": { "text": "你好" } }
        ]
      },
      {
        "time": 1672531260,
        "message_type": "group",
        "message_id": 7201234567891,
        "real_id": 123457,
        "sender": {
          "user_id": 123456789,
          "nickname": "群友B",
          "card": "名片B"
        },
        "message": [
          { "type": "text", "data": { "text": "在的" } }
        ]
      }
    ]
  },
  "echo": "1"
}
```

**请求（从指定序号获取）：**

```json
{
  "action": "get_group_msg_history",
  "params": {
    "group_id": 123456789,
    "message_seq": 123456,
    "count": 10
  }
}
```

## 四方差异

四方实现一致，无差异。

## 相关 API

- [`get_friend_msg_history`](./get-friend-msg-history) — 获取好友消息历史
- [`get_msg`](./get-msg) — 获取消息详情
- [`mark_group_msg_as_read`](./mark-group-msg-as-read) — 标记群消息已读
