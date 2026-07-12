# reshare_flash_file

重新分享闪传文件。

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
| `fileset_id` | str | - | ❌ | 文件集 ID（与 `share_link` 二选一） |
| `share_link` | str | - | ❌ | 分享链接（与 `fileset_id` 二选一） |

::: warning 参数约束
`fileset_id` 与 `share_link` 必须二选一，至少传入一个。
:::

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `file_set_id` | str | 文件集 ID |
| `share_link` | str | 新的分享链接 |
| `expire_time` | int | 过期时间（时间戳） |

## 示例

**请求（通过 fileset_id）：**

```json
{
  "action": "reshare_flash_file",
  "params": {
    "fileset_id": "fs_abc123456"
  }
}
```

**请求（通过 share_link）：**

```json
{
  "action": "reshare_flash_file",
  "params": {
    "share_link": "https://example.com/share/abc123"
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
    "share_link": "https://example.com/share/new123",
    "expire_time": 1721000000
  },
  "echo": "1"
}
```

## 三方差异

仅 NapCat 支持（LLBot 扩展）。SnowLuma 与 OneBot v11 标准不支持此 API。

## 相关 API

- [`upload_flash_file`](./upload-flash-file) — 上传闪传文件
- [`get_flash_file_download_urls`](./get-flash-file-download-urls) — 获取闪传文件下载 URL 列表
- [`get_share_link`](./get-share-link) — 获取分享链接