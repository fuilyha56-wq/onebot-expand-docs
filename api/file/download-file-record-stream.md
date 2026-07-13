# download_file_record_stream

流式下载语音文件并转换格式。

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
| `file` | str | - | ❌ | 语音文件名（与 file_id 二选一） |
| `file_id` | str | - | ❌ | 文件 ID（与 file 二选一） |
| `chunk_size` | int | - | ❌ | 分块大小（字节） |
| `out_format` | str | - | ❌ | 输出格式：`mp3`/`amr`/`wma`/`m4a`/`spx`/`ogg`/`wav`/`flac` |

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
  "action": "download_file_record_stream",
  "params": {
    "file_id": "/abc123/voice.silk",
    "out_format": "mp3",
    "chunk_size": 2048
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "stream_id": "stream_voice001",
    "chunk_data": "//uQxAAAAAAAAAAAAAAAAAAAAAA==",
    "chunk_index": 0,
    "total_chunks": 8,
    "is_complete": false
  }
}
```

## 四方差异

NapCat 与 SnowLuma 均支持，无差异。

## 相关 API

- [`download_file_stream`](./download-file-stream) — 流式下载文件
- [`download_file_image_stream`](./download-file-image-stream) — 流式下载图片
