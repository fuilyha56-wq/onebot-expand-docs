# forward_group_single_msg

转发单条消息到群（扩展）。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
插件扩展 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `message_id` | int | - | ✅ | 待转发的消息 ID |
| `group_id` | int | - | ✅ | 目标群号 |

## 响应

无

## 示例

**请求：**

```json
{
  "action": "forward_group_single_msg",
  "params": {
    "message_id": 7201234567890,
    "group_id": 123456789
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

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`forward_friend_single_msg`](./forward-friend-single-msg) — 转发单条消息给好友
- [`send_group_msg`](./send-group-msg) — 发送群聊消息
- [`get_msg`](./get-msg) — 获取消息详情
