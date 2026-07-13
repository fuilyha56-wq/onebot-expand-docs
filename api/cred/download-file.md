# download_file

下载文件到缓存目录。

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
| `url` | str | - | ✅ | 下载地址 |
| `name` | str | - | ❌ | 保存的文件名，不传则使用 URL 中的文件名或自动生成 |
| `headers` | list[str] | - | ❌ | 自定义请求头，每项格式为 `"Key: Value"` |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `file` | str | 下载后的本地文件路径 |

## 示例

**请求：**

```json
{
  "action": "download_file",
  "params": {
    "url": "https://example.com/file.zip"
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "file": "C:/NapCat/cache/file.zip"
  },
  "echo": "1"
}
```

**指定文件名与请求头：**

```json
{
  "action": "download_file",
  "params": {
    "url": "https://example.com/protected/file.zip",
    "name": "downloaded.zip",
    "headers": [
      "Authorization: Bearer token123",
      "User-Agent: OneBot/1.0"
    ]
  }
}
```

## 四方差异

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`check_url_safely`](./check-url-safely) — 检查链接安全性
- [`ocr_image`](./ocr-image) — 图片 OCR
- [`get_credentials`](./get-credentials) — 获取 QQ 接口凭证
