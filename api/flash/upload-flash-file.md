# upload_flash_file

上传闪传文件。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="unsupported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
LLBot 扩展
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `title` | str | - | ❌ | 文件集标题 |
| `paths` | list[str] | - | ✅ | 本地文件路径列表 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `file_set_id` | str | 文件集 ID |
| `share_link` | str | 分享链接 |
| `expire_time` | int | 过期时间（时间戳） |
| `downloads` | array | 文件下载信息列表 |

**`downloads` 元素结构：**

| 字段 | 类型 | 说明 |
|---|---|---|
| `file_name` | str | 文件名 |
| `url` | str | 下载 URL |
| `size` | int | 文件大小（字节） |

## 示例

**请求：**

```json
{
  "action": "upload_flash_file",
  "params": {
    "title": "我的文件集",
    "paths": [
      "C:/files/file1.zip",
      "C:/files/file2.zip"
    ]
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "file_set_id": "fs_abc123456",
    "share_link": "https://example.com/share/abc123",
    "expire_time": 1721000000,
    "downloads": [
      {
        "file_name": "file1.zip",
        "url": "https://example.com/download/file1.zip?token=xyz",
        "size": 1024000
      },
      {
        "file_name": "file2.zip",
        "url": "https://example.com/download/file2.zip?token=xyz",
        "size": 2048000
      }
    ]
  },
  "echo": "1"
}
```

## 四方差异

仅 NapCat 支持（LLBot 扩展）。SnowLuma 与 OneBot v11 标准不支持此 API。

## 相关 API

- [`get_flash_file_download_urls`](./get-flash-file-download-urls) — 获取闪传文件下载 URL 列表
- [`reshare_flash_file`](./reshare-flash-file) — 重新分享闪传文件
- [`send_flash_msg`](./send-flash-msg) — 发送闪传消息