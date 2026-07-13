# get_essence_msg_list

获取群精华消息列表。

## 兼容性

<ApiBadge platform="onebot" status="supported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
go-cqhttp 兼容 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `group_id` | int | - | ✅ | 群号 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `data` | list[dict] | 精华消息数组 |

每个精华消息对象包含以下字段：

| 字段 | 类型 | 说明 |
|---|---|---|
| `sender_id` | int | 发送者 QQ 号 |
| `sender_nick` | str | 发送者昵称 |
| `operator_id` | int | 操作者 QQ 号 |
| `operator_nick` | str | 操作者昵称 |
| `message_id` | int | 消息 ID |
| `operation_time` | int | 操作时间戳（秒） |

## 示例

**请求：**

```json
{
  "action": "get_essence_msg_list",
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
  "data": [
    {
      "sender_id": 1000100001,
      "sender_nick": "张三",
      "operator_id": 1000100002,
      "operator_nick": "李四",
      "message_id": 7201234567890,
      "operation_time": 1718236800
    }
  ],
  "echo": "1"
}
```

## 四方差异

四方实现一致，无差异。

## 相关 API

- [`set_essence_msg`](./set-essence-msg) — 设置精华消息
- [`delete_essence_msg`](./delete-essence-msg) — 移出精华消息
