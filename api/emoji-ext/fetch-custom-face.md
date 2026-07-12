# fetch_custom_face

获取收藏表情列表。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
插件扩展（onebot_expand）
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `count` | int | 48 | ❌ | 获取数量 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `data` | string[] | 收藏表情 URL 列表 |

## 示例

**请求：**

```json
{
  "action": "fetch_custom_face",
  "params": {
    "count": 48
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": [
    "https://example.com/emoji1.png",
    "https://example.com/emoji2.png",
    "https://example.com/emoji3.png"
  ],
  "echo": "1"
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致，无差异。OneBot v11 标准未定义此 API。

## 相关 API

- [`fetch_custom_face_detail`](./fetch-custom-face-detail) — 获取收藏表情详情
- [`add_custom_face`](./add-custom-face) — 添加收藏表情
- [`delete_custom_face`](./delete-custom-face) — 删除收藏表情
