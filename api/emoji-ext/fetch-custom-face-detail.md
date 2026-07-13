# fetch_custom_face_detail

获取收藏表情详情列表。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="exclusive" />
<ApiBadge platform="snowluma" status="unsupported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
插件扩展（onebot_expand）
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `count` | int | - | ❌ | 获取数量 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `data` | object[] | 收藏表情详情列表，含表情 ID、MD5、URL 等字段 |

## 示例

**请求：**

```json
{
  "action": "fetch_custom_face_detail",
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
    {
      "emoji_id": "abc123",
      "md5": "d41d8cd98f00b204e9800998ecf8427e",
      "url": "https://example.com/emoji1.png"
    },
    {
      "emoji_id": "def456",
      "md5": "098f6bcd4621d373cade4e832627b4f6",
      "url": "https://example.com/emoji2.png"
    }
  ],
  "echo": "1"
}
```

## 四方差异

此 API 为 NapCat 专属，SnowLuma 不支持。OneBot v11 标准未定义此 API。

## 相关 API

- [`fetch_custom_face`](./fetch-custom-face) — 获取收藏表情列表
- [`add_custom_face`](./add-custom-face) — 添加收藏表情
- [`set_custom_face_desc`](./set-custom-face-desc) — 设置收藏表情描述
