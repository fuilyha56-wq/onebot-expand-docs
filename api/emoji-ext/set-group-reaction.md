# set_group_reaction

设置群消息表情回应。

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
| `message_id` | int | - | ✅ | 消息 ID |
| `code` | str | - | ✅ | 表情回应码 |
| `is_set` | bool | true | ❌ | 是否设置（true=添加回应，false=取消回应） |

## 响应

无

## 示例

**请求（添加回应）：**

```json
{
  "action": "set_group_reaction",
  "params": {
    "group_id": 123456789,
    "message_id": 7201234567890,
    "code": "76"
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

**请求（取消回应）：**

```json
{
  "action": "set_group_reaction",
  "params": {
    "group_id": 123456789,
    "message_id": 7201234567890,
    "code": "76",
    "is_set": false
  }
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致，无差异。OneBot v11 标准未定义此 API。

## 相关 API

- [`fetch_emoji_like`](./fetch-emoji-like) — 拉取表情回应列表
- [`get_emoji_likes`](./get-emoji-likes) — 获取表情回应用户列表
- [`send_group_msg`](../message/send-group-msg) — 发送群聊消息
