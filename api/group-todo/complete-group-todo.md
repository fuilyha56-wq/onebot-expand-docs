# complete_group_todo

完成群待办。

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
| `message_id` | int | - | ✅ | 消息 ID |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "complete_group_todo",
  "params": {
    "group_id": 123456789,
    "message_id": 7201234567890
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

NapCat 与 SnowLuma 实现一致，无差异。OneBot v11 标准未定义此 API。

## 相关 API

- [`set_group_todo`](./set-group-todo) — 设置群待办
- [`cancel_group_todo`](./cancel-group-todo) — 取消群待办
- [`send_group_msg`](../message/send-group-msg) — 发送群聊消息
