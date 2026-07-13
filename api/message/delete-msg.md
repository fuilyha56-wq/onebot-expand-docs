# delete_msg

撤回消息。

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

无

## 示例

**请求：**

```json
{
  "action": "delete_msg",
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
  "data": null,
  "echo": "1"
}
```

## 四方差异

四方实现一致，无差异。

## 相关 API

- [`send_msg`](./send-msg) — 发送消息
- [`get_msg`](./get-msg) — 获取消息详情
- [`mark_msg_as_read`](./mark-msg-as-read) — 标记消息已读
