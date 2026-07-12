# get_forward_msg

获取合并转发消息内容。

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
| `id` | str | - | ✅ | 合并转发 ID（从 `forward` 消息段的 `id` 字段获取） |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `message` | message | 合并转发消息内容，`node` 消息段数组 |

## 示例

**请求：**

```json
{
  "action": "get_forward_msg",
  "params": {
    "id": "1234567890.123456"
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "message": [
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
  },
  "echo": "1"
}
```

## 三方差异

三方实现一致，无差异。

## 相关 API

- [`send_forward_msg`](./send-forward-msg) — 发送合并转发消息
- [`send_group_forward_msg`](./send-group-forward-msg) — 发送群合并转发消息
- [`upload_forward_msg`](./upload-forward-msg) — 上传合并转发消息
