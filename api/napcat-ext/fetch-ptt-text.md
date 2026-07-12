# fetch_ptt_text

获取语音转文字结果（将语音消息转换为文本）。

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
| `message_id` | int | - | ✅ | 消息 ID |

## 别名

此 API 支持以下别名调用：

| 别名 | 说明 |
|---|---|
| `get_ptt_text` | 获取语音转文字 |
| `get_record_text` | 获取语音转文字（兼容命名） |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `text` | str | 语音转文字结果 |

## 示例

**请求：**

```json
{
  "action": "fetch_ptt_text",
  "params": {
    "message_id": 7201234567890
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "text": "你好，这是一段语音消息的内容。"
  },
  "echo": "1"
}
```

**使用别名调用：**

```json
{
  "action": "get_ptt_text",
  "params": {
    "message_id": 7201234567890
  }
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致，OneBot 标准不支持此 API。

::: tip 语音识别
此 API 依赖协议端或插件提供的语音识别能力，识别准确度取决于底层引擎。
:::

## 相关 API

- [`can_send_record`](./can-send-record) — 检查是否可以发送语音
- [`get_status`](./get-status) — 获取运行状态
