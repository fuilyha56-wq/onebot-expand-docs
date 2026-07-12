# friend_poke

私聊戳一戳。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
插件扩展（onebot_expand）
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `user_id` | int | - | ✅ | 对方 QQ 号 |
| `target_id` | int | - | ❌ | 目标 QQ 号，不传则戳对方 |

## 响应

无

## 示例

**请求：**

```json
{
  "action": "friend_poke",
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

**请求（指定目标）：**

```json
{
  "action": "friend_poke",
  "params": {
    "user_id": 987654321,
    "target_id": 123456789
  }
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致，无差异。OneBot v11 标准未定义此 API。

## 相关 API

- [`group_poke`](./group-poke) — 群聊戳一戳
- [`send_poke`](../message/send-poke) — 自动路由戳一戳
- [`send_like`](../message/send-like) — 发送名片点赞
