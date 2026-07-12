# get_ai_characters

获取 AI 语音角色列表。

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
| `chat_type` | int | - | ❌ | 聊天类型 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `type` | str | 角色列表类型 |
| `characters` | object[] | AI 角色列表 |
| `characters[].character_id` | str | 角色 ID |
| `characters[].character_name` | str | 角色名称 |

## 示例

**请求：**

```json
{
  "action": "get_ai_characters",
  "params": {
    "group_id": 123456789
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "type": "character",
    "characters": [
      {
        "character_id": "1",
        "character_name": "喵喵"
      },
      {
        "character_id": "2",
        "character_name": "汪汪"
      }
    ]
  },
  "echo": "1"
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致，无差异。OneBot v11 标准未定义此 API。

## 相关 API

- [`get_ai_record`](./get-ai-record) — AI 文字转语音
- [`send_group_ai_record`](./send-group-ai-record) — 群聊发送 AI 语音
