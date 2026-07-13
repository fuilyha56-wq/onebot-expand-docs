# get_word_slices

go-cqhttp 分词（NapCat 支持，SnowLuma 未实现）。

## 兼容性

<ApiBadge platform="onebot" status="supported" />
<ApiBadge platform="napcat" status="exclusive" />
<ApiBadge platform="snowluma" status="unsupported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
go-cqhttp 兼容 API
:::

::: tip 别名
`.get_word_slices`
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `content` | str | - | ✅ | 待分词的文本内容 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `slices` | string[] | 分词结果数组 |

## 示例

**请求：**

```json
{
  "action": "get_word_slices",
  "params": {
    "content": "今天天气真不错"
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "slices": ["今天", "天气", "真", "不错"]
  },
  "echo": "1"
}
```

**使用别名调用：**

```json
{
  "action": ".get_word_slices",
  "params": {
    "content": "hello world"
  }
}
```

## 四方差异

仅 NapCat 支持此 API（NapCat 专属）。SnowLuma 未实现分词功能。OneBot v11 标准定义了此 API。

## 相关 API

- [`handle_quick_operation`](./handle-quick-operation) — 快速操作
- [`translate_en2zh`](./translate-en2zh) — 英译中翻译
- [`send_packet`](./send-packet) — 发送原始 SSO 包
