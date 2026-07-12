# get_image

获取图片信息。通过收到的图片 `file` 标识获取图片本地路径。

## 兼容性

<ApiBadge platform="onebot" status="supported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
OneBot v11 标准 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `file` | str | - | ✅ | 图片文件标识（收到的图片消息段中的 `file` 值，如 `{...}.jpg`） |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `file` | str | 图片本地路径 |

## 示例

**请求：**

```json
{
  "action": "get_image",
  "params": {
    "file": "e37b79a14b5e4c00b1b8e2e6e8e9c0a1.jpg"
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "file": "C:/data/images/e37b79a14b5e4c00b1b8e2e6e8e9c0a1.jpg"
  },
  "echo": "1"
}
```

## 三方差异

三方实现一致，无差异。

## 相关 API

- [`get_record`](./get-record) — 获取语音文件信息
- [`get_file`](./get-file) — 获取文件信息（NapCat 扩展）
- [`download_file_image_stream`](./download-file-image-stream) — 流式下载图片
