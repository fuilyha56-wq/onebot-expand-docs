# _mark_all_as_read

标记全部消息已读（扩展）。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
插件扩展 API
:::

## 参数

无

## 响应

无

## 示例

**请求：**

```json
{
  "action": "_mark_all_as_read",
  "params": {}
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

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`mark_msg_as_read`](./mark-msg-as-read) — 标记消息已读（go-cqhttp 兼容）
- [`mark_group_msg_as_read`](./mark-group-msg-as-read) — 标记群消息已读
- [`mark_private_msg_as_read`](./mark-private-msg-as-read) — 标记私聊消息已读
