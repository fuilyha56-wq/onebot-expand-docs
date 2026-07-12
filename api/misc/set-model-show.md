# _set_model_show

设置在线机型展示。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
插件扩展 API
:::

::: tip 别名
`._set_model_show`
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `model` | str | - | ✅ | 机型型号（如 `iPhone 15 Pro`） |
| `show` | str | - | ✅ | 要展示的机型名称 |

## 响应

无

## 示例

**请求：**

```json
{
  "action": "_set_model_show",
  "params": {
    "model": "iPhone 15 Pro",
    "show": "iPhone 99 Pro Max"
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

**使用别名调用：**

```json
{
  "action": "._set_model_show",
  "params": {
    "model": "Android Phone",
    "show": "Galaxy S99"
  }
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`_get_model_show`](./get-model-show) — 获取在线机型展示
- [`bot_exit`](./bot-exit) — 退出机器人
- [`get_mini_app_ark`](./get-mini-app-ark) — 签名小程序卡片
