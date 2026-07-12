# send_private_msg

发送私聊消息。

## 兼容性

<ApiBadge platform="onebot" status="supported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
OneBot v11 标准 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `user_id` | int | - | ✅ | 对方 QQ 号 |
| `message` | list[dict] | - | ✅ | 消息内容，OneBot 消息段数组 |
| `auto_escape` | bool | false | ❌ | 是否作为纯文本发送（不解析 CQ 码），仅在 message 为字符串时有效 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `message_id` | int | 消息 ID |

## 示例

**请求：**

```json
{
  "action": "send_private_msg",
  "params": {
    "user_id": 987654321,
    "message": [
      { "type": "text", "data": { "text": "你好呀" } }
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

**发送图片：**

```json
{
  "action": "send_private_msg",
  "params": {
    "user_id": 987654321,
    "message": [
      { "type": "image", "data": { "file": "https://example.com/image.png" } }
    ]
  }
}
```

**发送表情：**

```json
{
  "action": "send_private_msg",
  "params": {
    "user_id": 987654321,
    "message": [
      { "type": "face", "data": { "id": 178 } }
    ]
  }
}
```

## 三方差异

三方实现一致，无差异。

## 相关 API

- [`send_group_msg`](./send-group-msg) — 发送群聊消息
- [`send_msg`](./send-msg) — 通用发消息（自动路由群/私聊）
- [`send_private_forward_msg`](./send-private-forward-msg) — 发送私聊合并转发消息
