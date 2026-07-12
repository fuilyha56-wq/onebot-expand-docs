# get_mini_app_ark

签名小程序卡片，返回 Ark 消息 JSON。

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
| `type` | str | - | ✅ | 小程序类型 |
| `title` | str | - | ✅ | 卡片标题 |
| `desc` | str | - | ✅ | 卡片描述 |
| `pic_url` | str | - | ✅ | 卡片图片 URL |
| `jump_url` | str | - | ✅ | 点击跳转 URL |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `ark` | str | 小程序卡片 Ark JSON 字符串 |

## 示例

**请求：**

```json
{
  "action": "get_mini_app_ark",
  "params": {
    "type": "mini_app",
    "title": "我的小程序",
    "desc": "点击进入小程序",
    "pic_url": "https://example.com/cover.png",
    "jump_url": "https://example.com/mini_app"
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "ark": "{\"app\":\"com.tencent.miniapp\",\"desc\":\"\",\"view\":\"notification\",\"ver\":\"1.0.0.11\",\"prompt\":\"[应用]我的小程序\",\"meta\":{\"notification\":{\"appInfo\":{\"appName\":\"我的小程序\",\"appType\":4,\"appid\":1,\"type\":3},\"data\":\"\",\"title\":\"我的小程序\",\"desc\":\"点击进入小程序\",\"view\":\"1\",\"button\":[{\"name\":\"进入应用\",\"action\":\"https://example.com/mini_app\"}],\"remote_url\":\"https://example.com/cover.png\"}}}"
  },
  "echo": "1"
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`click_inline_keyboard_button`](./click-inline-keyboard-button) — 点击内联键盘按钮
- [`send_packet`](./send-packet) — 发送原始 SSO 包
- [`translate_en2zh`](./translate-en2zh) — 英译中翻译
