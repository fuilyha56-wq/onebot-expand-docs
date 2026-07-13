# set_msg_emoji_like

设置消息表情回复（对消息添加表情表态）。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
NapCat 扩展 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `message_id` | int | - | ✅ | 消息 ID |
| `emoji_id` | int | - | ✅ | 表情 ID |
| `set` | bool | true | ❌ | true 为添加表态，false 为取消表态 |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "set_msg_emoji_like",
  "params": {
    "message_id": 7201234567890,
    "emoji_id": 4294967295,
    "set": true
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

NapCat 与 SnowLuma 实现一致，OneBot 标准不支持此 API。

## 相关 API

- [`get_essence_msg_list`](./get-essence-msg-list) — 获取精华消息列表
- [`set_essence_msg`](./set-essence-msg) — 设置精华消息
