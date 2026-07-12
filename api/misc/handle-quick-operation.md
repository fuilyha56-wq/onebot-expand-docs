# handle_quick_operation

go-cqhttp 快速操作（NapCat 与 SnowLuma 均支持，传入 context 与 operation）。

## 兼容性

<ApiBadge platform="onebot" status="supported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
go-cqhttp 兼容 API
:::

::: tip 别名
`.handle_quick_operation`
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `context` | dict | - | ✅ | 事件上下文（通常来自上报事件） |
| `operation` | dict | - | ✅ | 要执行的操作（如回复消息、禁言等） |

## 响应

无

## 示例

**请求：**

```json
{
  "action": "handle_quick_operation",
  "params": {
    "context": {
      "message_type": "group",
      "group_id": 123456789,
      "user_id": 987654321,
      "message_id": 7201234567890
    },
    "operation": {
      "reply": "收到消息了",
      "at_sender": true
    }
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

**使用别名调用：**

```json
{
  "action": ".handle_quick_operation",
  "params": {
    "context": {},
    "operation": {}
  }
}
```

## 三方差异

三方实现一致，均支持 go-cqhttp 兼容的快速操作接口。

## 相关 API

- [`send_packet`](./send-packet) — 发送原始 SSO 包
- [`get_word_slices`](./get-word-slices) — 分词
- [`nc_get_packet_status`](./nc-get-packet-status) — 获取 PacketServer 状态
