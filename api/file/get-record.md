# get_record

获取语音文件信息。通过收到的语音 `file` 标识获取语音文件，并转换为指定格式。

## 兼容性

<ApiBadge platform="onebot" status="supported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
OneBot v11 标准 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `file` | str | - | ✅ | 语音文件标识（收到的语音消息段中的 `file` 值，如 `{...}.amr`） |
| `out_format` | str | - | ✅ | 输出格式，可选值：`mp3`/`amr`/`wma`/`m4a`/`spx`/`ogg`/`wav`/`flac` |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `file` | str | 转换后的语音文件本地路径 |

## 示例

**请求（转换为 mp3）：**

```json
{
  "action": "get_record",
  "params": {
    "file": "e37b79a14b5e4c00b1b8e2e6e8e9c0a1.amr",
    "out_format": "mp3"
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "file": "C:/data/records/e37b79a14b5e4c00b1b8e2e6e8e9c0a1.mp3"
  },
  "echo": "1"
}
```

**请求（转换为 wav）：**

```json
{
  "action": "get_record",
  "params": {
    "file": "e37b79a14b5e4c00b1b8e2e6e8e9c0a1.amr",
    "out_format": "wav"
  }
}
```

## 四方差异

四方实现一致，无差异。支持的输出格式取决于协议端本地 ffmpeg 编解码能力。

## 相关 API

- [`get_image`](./get-image) — 获取图片信息
- [`get_file`](./get-file) — 获取文件信息（NapCat 扩展）
- [`download_file_record_stream`](./download-file-record-stream) — 流式下载语音
