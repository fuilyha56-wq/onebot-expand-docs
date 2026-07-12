# bot_exit

退出机器人进程。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
插件扩展 API
:::

## 参数

无

## 响应

无

## 示例

**请求：**

```json
{
  "action": "bot_exit",
  "params": {}
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

::: warning
调用此 API 后机器人进程将退出，请谨慎使用。
:::

## 三方差异

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`_get_model_show`](./get-model-show) — 获取在线机型展示
- [`nc_get_packet_status`](./nc-get-packet-status) — 获取 PacketServer 状态
- [`send_packet`](./send-packet) — 发送原始 SSO 包
