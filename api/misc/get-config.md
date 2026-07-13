# get_config

获取机器人配置。

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
| `config` | dict | 配置字典（具体字段取决于实现） |

## 示例

**请求：**

```json
{
  "action": "get_config",
  "params": {}
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "config": {
      "auto_accept_friend": false,
      "auto_accept_group": false,
      "debug": false,
      "music_prefix": "music_"
    }
  },
  "echo": "1"
}
```

## 四方差异

仅 NapCat 支持（LLBot 扩展）。SnowLuma 与 OneBot v11 标准不支持此 API。返回字段结构因实现版本而异。

## 相关 API

- [`set_config`](./set-config) — 设置机器人配置
- [`get_event`](./get-event) — 获取事件列表
- [`llonebot_debug`](./llonebot-debug) — LLBot 调试接口