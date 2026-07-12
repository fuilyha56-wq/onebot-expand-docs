# nc_get_packet_status

获取 NapCat PacketServer 状态。

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

| 字段 | 类型 | 说明 |
|---|---|---|
| `status` | str | PacketServer 状态（如 `online`、`offline`） |

## 示例

**请求：**

```json
{
  "action": "nc_get_packet_status",
  "params": {}
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "status": "online"
  },
  "echo": "1"
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`send_packet`](./send-packet) — 发送原始 SSO 包
- [`bot_exit`](./bot-exit) — 退出机器人
- [`_get_model_show`](./get-model-show) — 获取在线机型展示
