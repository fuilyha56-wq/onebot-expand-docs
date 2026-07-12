# upload_file_stream

流式上传文件（分块传输）。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
插件扩展 API（NapCat 与 SnowLuma 均支持）
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `stream_id` | str | - | ❌ | 流 ID（续传时传入） |
| `chunk_data` | str | - | ✅ | 分块数据（base64） |
| `chunk_index` | int | - | ✅ | 当前分块索引 |
| `total_chunks` | int | - | ✅ | 总分块数 |
| `file_size` | int | - | ✅ | 文件总大小（字节） |
| `expected_sha256` | str | - | ❌ | 预期 SHA256 校验值 |
| `is_complete` | bool | false | ❌ | 是否最后一块 |
| `filename` | str | - | ❌ | 文件名 |
| `reset` | bool | false | ❌ | 是否重置流 |
| `verify_only` | bool | false | ❌ | 仅校验不上传 |
| `file_retention` | int | - | ❌ | 文件保留时间（秒） |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `stream_id` | str | 流 ID |
| `chunk_index` | int | 已接收的分块索引 |
| `is_complete` | bool | 是否传输完成 |
| `file_id` | str | 完成后的文件 ID |

## 示例

**请求（上传第一块）：**

```json
{
  "action": "upload_file_stream",
  "params": {
    "chunk_data": "SGVsbG8gV29ybGQ=",
    "chunk_index": 0,
    "total_chunks": 3,
    "file_size": 3072,
    "filename": "test.bin",
    "is_complete": false
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "stream_id": "stream_abc123",
    "chunk_index": 0,
    "is_complete": false,
    "file_id": ""
  }
}
```

**请求（上传最后一块）：**

```json
{
  "action": "upload_file_stream",
  "params": {
    "stream_id": "stream_abc123",
    "chunk_data": "ZGF0YQ==",
    "chunk_index": 2,
    "total_chunks": 3,
    "file_size": 3072,
    "filename": "test.bin",
    "is_complete": true
  }
}
```

## 三方差异

NapCat 与 SnowLuma 均支持，无差异。

## 相关 API

- [`download_file_stream`](./download-file-stream) — 流式下载文件
- [`clean_stream_temp_file`](./clean-stream-temp-file) — 清理临时文件
