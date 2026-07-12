# get_file

获取文件信息（NapCat 扩展）。通过 `file_id` 获取已接收文件的详细信息，可选择返回下载 URL 或 base64 内容。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
NapCat 扩展 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `file_id` | str | - | ✅ | 文件 ID（收到的文件消息中的 `file_id`） |
| `url` | bool | false | ❌ | 是否返回下载 URL，为 `true` 时返回 `url` 字段 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `file` | str | 文件本地路径 |
| `url` | str | 文件下载 URL（`url=true` 时返回） |
| `file_size` | str | 文件大小（字节） |
| `file_name` | str | 文件名 |
| `base64` | str | 文件 base64 内容（按实现可选返回） |

## 示例

**请求（获取文件路径）：**

```json
{
  "action": "get_file",
  "params": {
    "file_id": "/9b9c4d6a/report.pdf",
    "url": false
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "file": "C:/files/report.pdf",
    "file_size": "102400",
    "file_name": "report.pdf"
  },
  "echo": "1"
}
```

**请求（获取下载 URL）：**

```json
{
  "action": "get_file",
  "params": {
    "file_id": "/9b9c4d6a/report.pdf",
    "url": true
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "file": "C:/files/report.pdf",
    "url": "https://example.com/files/report.pdf",
    "file_size": "102400",
    "file_name": "report.pdf"
  },
  "echo": "1"
}
```

## 三方差异

NapCat 与 SnowLum 均支持通过 `file_id` 获取文件信息，返回字段一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`get_image`](./get-image) — 获取图片信息
- [`get_record`](./get-record) — 获取语音文件信息
- [`download_file_stream`](./download-file-stream) — 流式下载文件
