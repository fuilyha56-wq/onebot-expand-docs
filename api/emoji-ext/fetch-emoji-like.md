# fetch_emoji_like

拉取表情回应列表。

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
| `count` | int | - | ❌ | 获取数量 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `emoji_likes` | object[] | 表情回应分页列表 |
| `emoji_likes[].emoji_id` | int | 表情 ID |
| `emoji_likes[].emoji_index` | int | 表情索引 |
| `emoji_likes[].count` | int | 该表情回应数量 |
| `emoji_likes[].is_clicked` | bool | 当前账号是否已点击 |
| `emoji_likes[].is_double_clicked` | bool | 当前账号是否已双击 |

## 示例

**请求：**

```json
{
  "action": "fetch_emoji_like",
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
  "data": {
    "emoji_likes": [
      {
        "emoji_id": 76,
        "emoji_index": 1,
        "count": 3,
        "is_clicked": true,
        "is_double_clicked": false
      },
      {
        "emoji_id": 78,
        "emoji_index": 3,
        "count": 1,
        "is_clicked": false,
        "is_double_clicked": false
      }
    ]
  },
  "echo": "1"
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致，无差异。OneBot v11 标准未定义此 API。

## 相关 API

- [`get_emoji_likes`](./get-emoji-likes) — 获取表情回应用户列表
- [`set_group_reaction`](./set-group-reaction) — 设置群消息表情回应
