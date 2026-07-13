# send_msg

发送消息（通用，按 `message_type` 或 `user_id`/`group_id` 自动路由群聊或私聊）。

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
| `message_type` | str | - | ❌ | 消息类型，可选 `private` / `group`，未传时根据 `user_id`/`group_id` 自动推断 |
| `user_id` | int | - | ❌ | 对方 QQ 号（私聊时必填） |
| `group_id` | int | - | ❌ | 群号（群聊时必填） |
| `message` | list[dict] | - | ✅ | 消息内容，OneBot 消息段数组 |
| `auto_escape` | bool | false | ❌ | 是否作为纯文本发送（不解析 CQ 码），仅在 message 为字符串时有效 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `message_id` | int | 消息 ID |

## 示例

**请求（发送群聊消息）：**

```json
{
  "action": "send_msg",
  "params": {
    "message_type": "group",
    "group_id": 123456789,
    "message": [
      { "type": "text", "data": { "text": "大家好" } }
    ]
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "message_id": 7201234567890
  },
  "echo": "1"
}
```

**发送私聊消息（自动推断）：**

```json
{
  "action": "send_msg",
  "params": {
    "user_id": 987654321,
    "message": [
      { "type": "text", "data": { "text": "你好" } }
    ]
  }
}
```

**发送群聊消息（自动推断）：**

```json
{
  "action": "send_msg",
  "params": {
    "group_id": 123456789,
    "message": [
      { "type": "text", "data": { "text": "群消息" } }
    ]
  }
}
```

## 四方差异

四方实现一致，无差异。

## 相关 API

- [`send_group_msg`](./send-group-msg) — 发送群聊消息
- [`send_private_msg`](./send-private-msg) — 发送私聊消息
- [`delete_msg`](./delete-msg) — 撤回消息
