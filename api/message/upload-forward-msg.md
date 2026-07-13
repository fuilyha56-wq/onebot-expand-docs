# upload_forward_msg

上传合并转发消息，返回 `res_id`（SnowLuma 扩展）。别名：`upload_foward_msg`。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
SnowLuma 扩展 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `messages` | list[dict] | - | ✅ | 合并转发节点数组（`node` 消息段） |
| `message` | list[dict] | - | ❌ | 消息内容（可选，部分实现用于补充内容） |
| `group_id` | int | - | ❌ | 群号（可选，用于指定上传上下文） |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `res_id` | str | 合并转发资源 ID（可用于 `send_forward_msg` 或 `get_forward_msg`） |

## 示例

**请求：**

```json
{
  "action": "upload_forward_msg",
  "params": {
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
    "res_id": "1234567890.123456"
  },
  "echo": "1"
}
```

**请求（指定群号）：**

```json
{
  "action": "upload_forward_msg",
  "params": {
    "group_id": 123456789,
    "messages": [
      {
        "type": "node",
        "data": {
          "user_id": 987654321,
          "nickname": "发送者",
          "content": [
            { "type": "text", "data": { "text": "内容" } }
          ]
        }
      }
    ]
  }
}
```

## 四方差异

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。此 API 仅上传合并转发内容并返回 `res_id`，不直接发送消息，需配合 `send_forward_msg` 使用。

## 相关 API

- [`send_forward_msg`](./send-forward-msg) — 发送合并转发消息
- [`send_group_forward_msg`](./send-group-forward-msg) — 发送群合并转发消息
- [`get_forward_msg`](./get-forward-msg) — 获取合并转发消息内容
