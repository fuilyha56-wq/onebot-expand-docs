# download_file_stream

流式下载文件（分块传输）。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
插件扩展 API（NapCat 与 SnowLuma 均支持）
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `file` | str | - | ❌ | 文件名（与 file_id 二选一） |
| `file_id` | str | - | ❌ | 文件 ID（与 file 二选一） |
| `chunk_size` | int | - | ❌ | 分块大小（字节） |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `stream_id` | str | 流 ID |
| `chunk_data` | str | 分块数据（base64） |
| `chunk_index` | int | 当前分块索引 |
| `total_chunks` | int | 总分块数 |
| `is_complete` | bool | 是否传输完成 |

## 示例

**请求：**

```json
{
  "action": "download_file_stream",
  "params": {
    "file_id": "/abc123/file.bin",
    "chunk_size": 1024
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "stream_id": "stream_xyz789",
    "chunk_data": "SGVsbG8=",
    "chunk_index": 0,
    "total_chunks": 5,
    "is_complete": false
  }
}
```

## 四方差异

NapCat 与 SnowLuma 均支持，无差异。

## 相关 API

- [`upload_file_stream`](./upload-file-stream) — 流式上传文件
- [`download_file_record_stream`](./download-file-record-stream) — 流式下载语音
