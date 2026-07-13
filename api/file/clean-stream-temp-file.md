# clean_stream_temp_file

清理流式传输临时文件。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
插件扩展 API（NapCat 与 SnowLuma 均支持）
:::

## 参数

无

## 响应

无

## 示例

**请求：**

```json
{
  "action": "clean_stream_temp_file",
  "params": {}
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": null
}
```

## 四方差异

NapCat 与 SnowLuma 均支持，无差异。

## 相关 API

- [`upload_file_stream`](./upload-file-stream) — 流式上传文件
- [`download_file_stream`](./download-file-stream) — 流式下载文件
