# translate_en2zh

英译中翻译。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
插件扩展 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `words` | list[str] | - | ✅ | 待翻译的英文单词/短语数组 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `string[]` | array | 翻译后的中文结果数组，与输入一一对应 |

## 示例

**请求：**

```json
{
  "action": "translate_en2zh",
  "params": {
    "words": ["hello", "world", "thank you"]
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": [
    "你好",
    "世界",
    "谢谢"
  ],
  "echo": "1"
}
```

## 四方差异

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`get_mini_app_ark`](./get-mini-app-ark) — 签名小程序卡片
- [`create_collection`](./create-collection) — 创建文本收藏
- [`get_collection_list`](./get-collection-list) — 获取收藏列表
