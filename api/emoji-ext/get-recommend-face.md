# get_recommend_face

获取推荐表情（通过关键词搜索）。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="unsupported" />

::: tip 来源
LLBot 扩展
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `word` | str | - | ✅ | 搜索关键词 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `faces` | array | 表情列表 |

**`faces` 元素结构：**

| 字段 | 类型 | 说明 |
|---|---|---|
| `emoji_id` | str | 表情 ID |
| `name` | str | 表情名称 |
| `url` | str | 表情图片 URL |

## 示例

**请求：**

```json
{
  "action": "get_recommend_face",
  "params": {
    "word": "开心"
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "faces": [
      {
        "emoji_id": "12345",
        "name": "开心",
        "url": "https://example.com/emoji/12345.png"
      },
      {
        "emoji_id": "12346",
        "name": "哈哈",
        "url": "https://example.com/emoji/12346.png"
      }
    ]
  },
  "echo": "1"
}
```

## 三方差异

仅 NapCat 支持（LLBot 扩展）。SnowLuma 与 OneBot v11 标准不支持此 API。

## 相关 API

- [`fetch_custom_face`](./fetch-custom-face) — 获取收藏表情列表
- [`add_custom_face`](./add-custom-face) — 添加收藏表情
- [`set_group_reaction`](./set-group-reaction) — 设置群消息表态