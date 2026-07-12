# get_emoji_likes

获取表情回应用户列表。

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
| `message_id` | int | - | ✅ | 消息 ID |
| `emoji_id` | int | - | ❌ | 表情 ID，不传则返回所有表情回应 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `emoji_likes` | object[] | 表情回应用户列表 |
| `emoji_likes[].emoji_id` | int | 表情 ID |
| `emoji_likes[].user_list` | object[] | 回应用户列表 |
| `emoji_likes[].user_list[].user_id` | int | 用户 QQ 号 |
| `emoji_likes[].user_list[].nick_name` | str | 用户昵称 |

## 示例

**请求：**

```json
{
  "action": "get_emoji_likes",
  "params": {
    "message_id": 7201234567890,
    "emoji_id": 76
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "emoji_likes": [
      {
        "emoji_id": 76,
        "user_list": [
          {
            "user_id": 987654321,
            "nick_name": "某群友"
          },
          {
            "user_id": 123456789,
            "nick_name": "另一群友"
          }
        ]
      }
    ]
  },
  "echo": "1"
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致，无差异。OneBot v11 标准未定义此 API。

## 相关 API

- [`fetch_emoji_like`](./fetch-emoji-like) — 拉取表情回应列表
- [`set_group_reaction`](./set-group-reaction) — 设置群消息表情回应
