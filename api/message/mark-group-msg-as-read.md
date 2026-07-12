# mark_group_msg_as_read

标记群消息已读（扩展）。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
插件扩展 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `message_id` | int | - | ❌ | 消息 ID |
| `group_id` | int | - | ✅ | 群号 |

## 响应

无

## 示例

**请求：**

```json
{
  "action": "mark_group_msg_as_read",
  "params": {
    "group_id": 123456789,
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

**请求（仅按群号标记）：**

```json
{
  "action": "mark_group_msg_as_read",
  "params": {
    "group_id": 123456789
  }
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API，可使用 go-cqhttp 兼容的 `mark_msg_as_read` 作为替代。

## 相关 API

- [`mark_msg_as_read`](./mark-msg-as-read) — 标记消息已读（go-cqhttp 兼容）
- [`mark_private_msg_as_read`](./mark-private-msg-as-read) — 标记私聊消息已读
- [`mark_all_as_read`](./mark-all-as-read) — 标记全部已读
