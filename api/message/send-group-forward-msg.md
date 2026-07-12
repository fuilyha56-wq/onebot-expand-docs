# send_group_forward_msg

发送群合并转发消息（go-cqhttp 兼容）。

## 兼容性

<ApiBadge platform="onebot" status="supported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
go-cqhttp 兼容 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `group_id` | int | - | ✅ | 群号 |
| `messages` | list[dict] | - | ✅ | 合并转发节点数组（`node` 消息段） |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `message_id` | int | 消息 ID |

## 示例

**请求：**

```json
{
  "action": "send_group_forward_msg",
  "params": {
    "group_id": 123456789,
    "messages": [
      {
        "type": "node",
        "data": {
          "user_id": 987654321,
          "nickname": "发送者A",
          "content": [
            { "type": "text", "data": { "text": "第一条消息" } }
          ]
        }
      },
      {
        "type": "node",
        "data": {
          "user_id": 123456789,
          "nickname": "发送者B",
          "content": [
            { "type": "text", "data": { "text": "第二条消息" } }
          ]
        }
      }
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

**使用自定义节点 ID：**

```json
{
  "action": "send_group_forward_msg",
  "params": {
    "group_id": 123456789,
    "messages": [
      {
        "type": "node",
        "data": {
          "id": "1234567890.123456"
        }
      }
    ]
  }
}
```

## 三方差异

三方实现一致，无差异。此 API 为 go-cqhttp 兼容接口，与 NapCat 扩展的 `send_forward_msg` 功能类似但需显式指定 `group_id`。

## 相关 API

- [`send_forward_msg`](./send-forward-msg) — 发送合并转发消息（NapCat 扩展，自动路由）
- [`send_private_forward_msg`](./send-private-forward-msg) — 发送私聊合并转发消息
- [`get_forward_msg`](./get-forward-msg) — 获取合并转发消息内容
