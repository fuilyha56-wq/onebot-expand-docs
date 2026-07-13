# send_group_ai_record

群聊发送 AI 语音。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
插件扩展（onebot_expand）
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `group_id` | int | - | ✅ | 群号 |
| `character` | str | - | ✅ | AI 角色名 |
| `text` | str | - | ✅ | 要转换的文本 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `message_id` | str | 消息 ID |

## 示例

**请求：**

```json
{
  "action": "send_group_ai_record",
  "params": {
    "group_id": 123456789,
    "character": "喵喵",
    "text": "你好呀"
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "message_id": "7201234567890"
  },
  "echo": "1"
}
```

## 四方差异

NapCat 与 SnowLuma 实现一致，无差异。OneBot v11 标准未定义此 API。

## 相关 API

- [`get_ai_characters`](./get-ai-characters) — 获取 AI 语音角色列表
- [`get_ai_record`](./get-ai-record) — AI 文字转语音
- [`send_group_msg`](../message/send-group-msg) — 发送群聊消息
