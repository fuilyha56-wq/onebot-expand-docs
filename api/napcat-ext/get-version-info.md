# get_version_info

获取协议端版本信息。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
NapCat 扩展 API
:::

## 参数

无参数。

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `app_name` | str | 应用名称 |
| `app_version` | str | 应用版本 |
| `protocol_version` | str | 协议版本 |
| `app_full_name` | str | 应用完整名称 |
| `debug_mode` | bool | 是否为调试模式 |
| `http_server` | str | HTTP 服务器地址 |
| `ws_server` | str | WebSocket 服务器地址 |
| `ws_reverse_server` | str | 反向 WebSocket 服务器地址 |
| `version` | str | 版本号（兼容字段） |

## 示例

**请求：**

```json
{
  "action": "get_version_info",
  "params": {}
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "app_name": "NapCat",
    "app_version": "4.0.0",
    "protocol_version": "v11",
    "app_full_name": "NapCatQQ",
    "debug_mode": false,
    "http_server": "http://127.0.0.1:3000",
    "ws_server": "ws://127.0.0.1:3001",
    "ws_reverse_server": "ws://127.0.0.1:8080/onebot/v11/ws",
    "version": "4.0.0"
  },
  "echo": "1"
}
```

## 四方差异

NapCat 与 SnowLuma 实现一致，OneBot 标准不支持此 API。

## 相关 API

- [`get_status`](./get-status) — 获取运行状态
- [`get_online_clients`](./get-online-clients) — 获取在线客户端列表
