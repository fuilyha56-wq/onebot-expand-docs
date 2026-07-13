# get_online_clients

获取当前账号的在线客户端列表。

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
| `data` | list[dict] | 在线客户端数组 |

每个客户端对象包含以下字段：

| 字段 | 类型 | 说明 |
|---|---|---|
| `client_id` | int | 客户端 ID |
| `device_name` | str | 设备名称 |
| `device_kind` | str | 设备类型 |

## 示例

**请求：**

```json
{
  "action": "get_online_clients",
  "params": {}
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": [
    {
      "client_id": 1,
      "device_name": "iPhone 15 Pro",
      "device_kind": "phone"
    },
    {
      "client_id": 2,
      "device_name": "Windows 11",
      "device_kind": "pc"
    }
  ],
  "echo": "1"
}
```

## 四方差异

NapCat 与 SnowLuma 实现一致，OneBot 标准不支持此 API。

## 相关 API

- [`get_status`](./get-status) — 获取运行状态
- [`get_version_info`](./get-version-info) — 获取版本信息
