# get_status

获取协议端运行状态。

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
| `online` | bool | 是否在线 |
| `good` | bool | 状态是否良好 |
| `statistics` | dict | 统计信息 |

`statistics` 对象包含以下字段：

| 字段 | 类型 | 说明 |
|---|---|---|
| `packet_received` | int | 收到的数据包数 |
| `packet_sent` | int | 发送的数据包数 |
| `packet_lost` | int | 丢失的数据包数 |
| `message_received` | int | 收到的消息数 |
| `message_sent` | int | 发送的消息数 |
| `disconnect_times` | int | 断连次数 |
| `lost_times` | int | 丢失次数 |

## 示例

**请求：**

```json
{
  "action": "get_status",
  "params": {}
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "online": true,
    "good": true,
    "statistics": {
      "packet_received": 1024,
      "packet_sent": 512,
      "packet_lost": 0,
      "message_received": 128,
      "message_sent": 64,
      "disconnect_times": 0,
      "lost_times": 0
    }
  },
  "echo": "1"
}
```

## 四方差异

NapCat 与 SnowLuma 实现一致，OneBot 标准不支持此 API。

## 相关 API

- [`get_online_clients`](./get-online-clients) — 获取在线客户端列表
- [`get_version_info`](./get-version-info) — 获取版本信息
