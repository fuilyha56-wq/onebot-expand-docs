# scan_qrcode

扫描二维码。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="unsupported" />

::: tip 来源
LLBot 扩展
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `qrcode` | str | - | ✅ | 二维码内容（二维码扫描结果字符串） |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `result` | any | 扫码结果（类型取决于二维码内容） |

## 示例

**请求：**

```json
{
  "action": "scan_qrcode",
  "params": {
    "qrcode": "https://example.com/qr/abc123"
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "result": {
      "type": "url",
      "url": "https://example.com/qr/abc123"
    }
  },
  "echo": "1"
}
```

## 三方差异

仅 NapCat 支持（LLBot 扩展）。SnowLuma 与 OneBot v11 标准不支持此 API。扫码结果结构因二维码内容而异。

## 相关 API

- [`get_config`](./get-config) — 获取机器人配置
- [`llonebot_debug`](./llonebot-debug) — LLBot 调试接口
- [`get_event`](./get-event) — 获取事件列表