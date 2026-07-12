# _get_model_show

获取在线机型展示信息。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
插件扩展 API
:::

::: tip 别名
`._get_model_show`
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `model` | str | - | ✅ | 机型型号（如 `iPhone 15 Pro`） |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `model_show` | str | 机型展示名称 |
| `items` | array | 机型展示项列表 |

## 示例

**请求：**

```json
{
  "action": "_get_model_show",
  "params": {
    "model": "iPhone 15 Pro"
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "model_show": "iPhone 15 Pro",
    "items": [
      {
        "label": "系统",
        "value": "iOS 17"
      },
      {
        "label": "电量",
        "value": "85%"
      }
    ]
  },
  "echo": "1"
}
```

**使用别名调用：**

```json
{
  "action": "._get_model_show",
  "params": {
    "model": "Android Phone"
  }
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`_set_model_show`](./set-model-show) — 设置在线机型展示
- [`bot_exit`](./bot-exit) — 退出机器人
- [`nc_get_packet_status`](./nc-get-packet-status) — 获取 PacketServer 状态
