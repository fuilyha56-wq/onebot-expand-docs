# add_custom_face

添加收藏表情。

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
| `file` | str | - | ✅ | 图片文件路径或 URL |

## 响应

无

## 示例

**请求：**

```json
{
  "action": "add_custom_face",
  "params": {
    "file": "https://example.com/image.png"
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

**请求（本地文件）：**

```json
{
  "action": "add_custom_face",
  "params": {
    "file": "file:///C:/path/to/image.png"
  }
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致，无差异。OneBot v11 标准未定义此 API。

## 相关 API

- [`fetch_custom_face`](./fetch-custom-face) — 获取收藏表情列表
- [`delete_custom_face`](./delete-custom-face) — 删除收藏表情
- [`modify_custom_face`](./modify-custom-face) — 修改收藏表情
