# mark_msg_as_read

标记消息已读（go-cqhttp 兼容）。

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
| `message_id` | int | - | ❌ | 消息 ID |
| `target_id` | int | - | ❌ | 目标 ID（会话标识） |

## 响应

无

## 示例

**请求（按消息 ID 标记）：**

```json
{
  "action": "mark_msg_as_read",
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

**请求（按目标 ID 标记）：**

```json
{
  "action": "mark_msg_as_read",
  "params": {
    "target_id": 987654321
  }
}
```

## 四方差异

四方实现一致，无差异。

## 相关 API

- [`mark_group_msg_as_read`](./mark-group-msg-as-read) — 标记群消息已读
- [`mark_private_msg_as_read`](./mark-private-msg-as-read) — 标记私聊消息已读
- [`mark_all_as_read`](./mark-all-as-read) — 标记全部已读
