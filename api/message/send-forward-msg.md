# send_forward_msg

发送合并转发消息（NapCat 扩展，自动路由）。通过 `group_id` 或 `user_id` 自动路由群聊或私聊。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
NapCat 扩展 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `group_id` | int | - | ❌ | 群号（群合并转发时必填，与 `user_id` 二选一） |
| `user_id` | int | - | ❌ | 对方 QQ 号（私聊合并转发时必填，与 `group_id` 二选一） |
| `messages` | list[dict] | - | ✅ | 合并转发节点数组（`node` 消息段） |
| `news` | list[dict] | - | ❌ | 合并转发消息的预览新闻条目 |
| `prompt` | str | - | ❌ | 合并转发消息的提示文本 |
| `summary` | str | - | ❌ | 合并转发消息的摘要文本 |
| `source_type` | str | - | ❌ | 合并转发消息的来源类型 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `message_id` | int | 消息 ID |
| `res_id` | str | 合并转发资源 ID（可用于 `get_forward_msg`） |

## 示例

**请求（群合并转发）：**

```json
{
  "action": "send_forward_msg",
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
    ],
    "summary": "聊天记录",
    "prompt": "[聊天记录]"
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "message_id": 7201234567890,
    "res_id": "1234567890.123456"
  },
  "echo": "1"
}
```

**请求（私聊合并转发）：**

```json
{
  "action": "send_forward_msg",
  "params": {
    "user_id": 987654321,
    "messages": [
      {
        "type": "node",
        "data": {
          "user_id": 987654321,
          "nickname": "发送者",
          "content": [
            { "type": "text", "data": { "text": "私聊转发内容" } }
          ]
        }
      }
    ]
  }
}
```

## 三方差异

NapCat 与 SnowLuma 均支持自动路由（通过 `group_id`/`user_id` 区分群聊/私聊），实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`send_group_forward_msg`](./send-group-forward-msg) — 发送群合并转发消息（go-cqhttp 兼容）
- [`send_private_forward_msg`](./send-private-forward-msg) — 发送私聊合并转发消息（go-cqhttp 兼容）
- [`get_forward_msg`](./get-forward-msg) — 获取合并转发消息内容
- [`upload_forward_msg`](./upload-forward-msg) — 上传合并转发消息
