# get_event

获取事件列表。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="unsupported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
LLBot 扩展
:::

## 参数

无参数。

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `events` | array | 事件列表 |

**`events` 元素结构：**

| 字段 | 类型 | 说明 |
|---|---|---|
| `name` | str | 事件名称 |
| `type` | str | 事件类型 |

## 示例

**请求：**

```json
{
  "action": "get_event",
  "params": {}
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "events": [
      {
        "name": "on_message",
        "type": "message"
      },
      {
        "name": "on_notice",
        "type": "notice"
      },
      {
        "name": "on_request",
        "type": "request"
      }
    ]
  },
  "echo": "1"
}
```

## 四方差异

仅 NapCat 支持（LLBot 扩展）。SnowLuma 与 OneBot v11 标准不支持此 API。返回的事件列表因实现版本而异。

## 相关 API

- [`get_config`](./get-config) — 获取机器人配置
- [`set_config`](./set-config) — 设置机器人配置
- [`llonebot_debug`](./llonebot-debug) — LLBot 调试接口