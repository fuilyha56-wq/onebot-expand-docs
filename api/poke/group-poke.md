# group_poke

群聊戳一戳。

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
| `group_id` | int | - | ✅ | 群号 |
| `user_id` | int | - | ✅ | 被戳的群成员 QQ 号 |

## 响应

无

## 示例

**请求：**

```json
{
  "action": "group_poke",
  "params": {
    "group_id": 123456789,
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

## 三方差异

NapCat 与 SnowLuma 实现一致，无差异。OneBot v11 标准未定义此 API。

## 相关 API

- [`friend_poke`](./friend-poke) — 私聊戳一戳
- [`send_poke`](../message/send-poke) — 自动路由戳一戳
- [`send_group_msg`](../message/send-group-msg) — 发送群聊消息
