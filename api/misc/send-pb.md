# send_pb

LLBot 扩展：发送原始 SSO 包（pmhq 发包），返回响应 cmd 与 pb hex。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="unsupported" />
<ApiBadge platform="snowluma" status="unsupported" />
<ApiBadge platform="llbot" status="exclusive" />

::: tip 来源
LLBot 扩展 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `cmd` | str | - | ✅ | SSO 命令名 |
| `hex` | str | - | ✅ | SSO 包内容（hex 字符串） |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `cmd` | str | 响应命令名 |
| `hex` | str | 响应 pb 内容（hex 字符串） |
| `echo` | str | 可选，原样回显字段 |

## 示例

**请求：**

```json
{
  "action": "send_pb",
  "params": {
    "cmd": "OidbSvc.0x568_1",
    "hex": "0a0b..."
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "cmd": "OidbSvc.0x568_1",
    "hex": "0a0c..."
  },
  "echo": "1"
}
```

## 四方差异

仅 LLBot 支持此 API（依赖 LLBot 内置的 pmhq 发包能力）。NapCat 与 SnowLuma 未实现。

::: warning
发送原始 SSO 包属于底层操作，请确保了解命令含义后再调用，避免触发风控。
:::

## 相关 API

- [`send_packet`](./send-packet) — NapCat 发送 SSO 包（参数为 dict）
- [`nc_get_packet_status`](./nc-get-packet-status) — 获取 PacketServer 状态
