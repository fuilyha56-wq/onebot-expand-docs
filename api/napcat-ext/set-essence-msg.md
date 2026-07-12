# set_essence_msg

将指定消息设为群精华消息。

## 兼容性

<ApiBadge platform="onebot" status="supported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
go-cqhttp 兼容 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `message_id` | int | - | ✅ | 消息 ID |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "set_essence_msg",
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
  "data": null,
  "echo": "1"
}
```

## 三方差异

三方实现一致，无差异。

## 相关 API

- [`delete_essence_msg`](./delete-essence-msg) — 移出精华消息
- [`get_essence_msg_list`](./get-essence-msg-list) — 获取精华消息列表
