# llonebot_debug

LLBot 调试接口，直接调用底层 API。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="unsupported" />

::: tip 来源
LLBot 扩展
:::

::: warning 调试用途
此 API 为调试用途，直接调用底层接口，可能引发未定义行为，请谨慎使用。
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `api_class` | str | - | ✅ | API 类名 |
| `method` | str | - | ✅ | 调用方法名 |
| `args` | list | - | ✅ | 调用参数列表 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `result` | any | 调试调用结果（类型取决于具体调用） |

## 示例

**请求：**

```json
{
  "action": "llonebot_debug",
  "params": {
    "api_class": "GroupService",
    "method": "getGroupInfo",
    "args": [123456789]
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
      "group_id": 123456789,
      "group_name": "测试群"
    }
  },
  "echo": "1"
}
```

## 三方差异

仅 NapCat 支持（LLBot 扩展）。SnowLuma 与 OneBot v11 标准不支持此 API。可调用的 `api_class` 与 `method` 取决于底层实现版本。

## 相关 API

- [`get_config`](./get-config) — 获取机器人配置
- [`set_config`](./set-config) — 设置机器人配置
- [`nc_get_packet_status`](./nc-get-packet-status) — 获取 PacketServer 状态