# send_poke

发送戳一戳（NapCat 扩展，自动路由版，等价于 `friend_poke` + `group_poke`）。传入 `group_id` 则为群戳一戳，否则为好友戳一戳。

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
| `user_id` | int | - | ✅ | 对方 QQ 号 |
| `group_id` | int | - | ❌ | 群号，传入则为群内戳一戳，不传则为好友戳一戳 |

## 响应

无

## 示例

**请求（好友戳一戳）：**

```json
{
  "action": "send_poke",
  "params": {
    "user_id": 987654321
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

**请求（群内戳一戳）：**

```json
{
  "action": "send_poke",
  "params": {
    "user_id": 987654321,
    "group_id": 123456789
  }
}
```

## 三方差异

NapCat 与 SnowLuma 均支持自动路由（通过 `group_id` 区分群戳/好友戳），实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`send_like`](./send-like) — 发送名片点赞
- [`send_private_msg`](./send-private-msg) — 发送私聊消息
- [`send_group_msg`](./send-group-msg) — 发送群聊消息
