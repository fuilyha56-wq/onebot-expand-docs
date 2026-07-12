# send_packet

发送原始 SSO 包。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="unsupported" />

::: tip 来源
插件扩展 API
:::

::: tip 别名
`.send_packet`
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `cmd` | str | - | ✅ | SSO 命令名 |
| `data` | dict | - | ✅ | SSO 包数据 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| - | - | 响应数据，结构取决于 SSO 命令 |

## 示例

**请求：**

```json
{
  "action": "send_packet",
  "params": {
    "cmd": "OidbSvc.0x568_1",
    "data": {
      "field1": "value1",
      "field2": 123
    }
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "result": 0,
    "message": "OK"
  },
  "echo": "1"
}
```

**使用别名调用：**

```json
{
  "action": ".send_packet",
  "params": {
    "cmd": "OidbSvc.0x568_1",
    "data": {}
  }
}
```

## 三方差异

仅 NapCat 支持此 API。SnowLuma 与 OneBot v11 标准均未定义此 API。

::: warning
发送原始 SSO 包属于底层操作，请确保了解命令含义后再调用，避免触发风控。
:::

## 相关 API

- [`nc_get_packet_status`](./nc-get-packet-status) — 获取 PacketServer 状态
- [`handle_quick_operation`](./handle-quick-operation) — 快速操作
- [`get_mini_app_ark`](./get-mini-app-ark) — 签名小程序卡片
