# get_flash_file_url

获取闪传文件 URL。

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
| `fileset_id` | str | - | ✅ | 文件集 ID |
| `file_name` | str | - | ✅ | 文件名 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `url` | str | 文件下载 URL |

## 示例

**请求：**

```json
{
  "action": "get_flash_file_url",
  "params": {
    "fileset_id": "fs_abc123456",
    "file_name": "file1.zip"
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "url": "https://example.com/download/file1.zip?token=xyz"
  },
  "echo": "1"
}
```

## 四方差异

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`get_flash_file_list`](./get-flash-file-list) — 获取闪传文件列表
- [`download_fileset`](./download-fileset) — 下载文件集
- [`get_fileset_info`](./get-fileset-info) — 获取文件集信息
