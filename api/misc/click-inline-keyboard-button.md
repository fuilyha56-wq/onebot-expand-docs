# click_inline_keyboard_button

点击内联键盘按钮。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
插件扩展 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `group_id` | int | - | ✅ | 群号 |
| `bot_appid` | int | - | ✅ | 机器人 AppID |
| `msg_seq` | int | - | ✅ | 消息序号 |
| `button_id` | str | - | ✅ | 按钮 ID |

## 响应

无

## 示例

**请求：**

```json
{
  "action": "click_inline_keyboard_button",
  "params": {
    "group_id": 123456789,
    "bot_appid": 1020304050,
    "msg_seq": 1,
    "button_id": "btn_confirm"
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

## 三方差异

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`get_mini_app_ark`](./get-mini-app-ark) — 签名小程序卡片
- [`send_packet`](./send-packet) — 发送原始 SSO 包
- [`_get_model_show`](./get-model-show) — 获取在线机型展示
