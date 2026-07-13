# send_like

发送名片点赞（好友点赞）。

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
| `user_id` | int | - | ✅ | 对方 QQ 号 |
| `times` | int | 1 | ❌ | 点赞次数，每个好友每天最多 10 次 |

## 响应

无

## 示例

**请求（默认点赞 1 次）：**

```json
{
  "action": "send_like",
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

**请求（点赞 10 次）：**

```json
{
  "action": "send_like",
  "params": {
    "user_id": 987654321,
    "times": 10
  }
}
```

## 四方差异

四方实现一致，无差异。

## 相关 API

- [`send_private_msg`](./send-private-msg) — 发送私聊消息
- [`send_poke`](./send-poke) — 发送戳一戳
