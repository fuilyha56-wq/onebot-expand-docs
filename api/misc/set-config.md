# set_config

设置机器人配置。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="unsupported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
LLBot 扩展
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `config` | dict | - | ✅ | 配置字典（具体字段取决于实现） |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "set_config",
  "params": {
    "config": {
      "auto_accept_friend": true,
      "auto_accept_group": false,
      "debug": true,
      "music_prefix": "music_"
    }
  }
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

## 四方差异

仅 NapCat 支持（LLBot 扩展）。SnowLuma 与 OneBot v11 标准不支持此 API。可配置字段因实现版本而异。

## 相关 API

- [`get_config`](./get-config) — 获取机器人配置
- [`get_event`](./get-event) — 获取事件列表
- [`llonebot_debug`](./llonebot-debug) — LLBot 调试接口