# ocr_image

图片 OCR 识别（go-cqhttp 兼容）。

## 兼容性

<ApiBadge platform="onebot" status="supported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
go-cqhttp 兼容 API
:::

::: tip 别名
`.ocr_image`
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `image` | str | - | ✅ | 图片标识，可为 URL、本地路径或 OneBot 图片消息段的 `file` 字段值 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `texts` | array | OCR 识别结果数组，每项含识别文本与置信度等信息 |

## 示例

**请求：**

```json
{
  "action": "ocr_image",
  "params": {
    "image": "https://example.com/image.png"
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "texts": [
      {
        "text": "识别到的文字内容",
        "confidence": 98,
        "coordinates": {
          "x": 10,
          "y": 20,
          "width": 100,
          "height": 30
        }
      }
    ]
  },
  "echo": "1"
}
```

**使用别名调用：**

```json
{
  "action": ".ocr_image",
  "params": {
    "image": "file:///C:/path/to/image.png"
  }
}
```

## 四方差异

四方实现一致，均支持 go-cqhttp 兼容的 OCR 接口。

## 相关 API

- [`check_url_safely`](./check-url-safely) — 检查链接安全性
- [`download_file`](./download-file) — 下载文件到缓存目录
- [`get_credentials`](./get-credentials) — 获取 QQ 接口凭证
