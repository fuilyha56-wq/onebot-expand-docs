# upload_private_file

上传私聊文件。

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
| `user_id` | int | - | ✅ | 对方 QQ 号 |
| `file` | str | - | ✅ | 文件路径（本地路径或 `file://`/`http://`/`https://`/`base64://` URI） |
| `name` | str | - | ✅ | 文件名（含扩展名，如 `photo.jpg`） |

## 响应

无

## 示例

**请求（上传本地文件）：**

```json
{
  "action": "upload_private_file",
  "params": {
    "user_id": 987654321,
    "file": "file:///C:/files/photo.jpg",
    "name": "photo.jpg"
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": null,
  "echo": "1"
}
```

**请求（上传 base64 文件）：**

```json
{
  "action": "upload_private_file",
  "params": {
    "user_id": 987654321,
    "file": "base64://SGVsbG8gV29ybGQ=",
    "name": "hello.txt"
  }
}
```

## 四方差异

四方实现一致，无差异。

## 相关 API

- [`upload_group_file`](./upload-group-file) — 上传群文件
- [`send_online_file`](./send-online-file) — 发送在线文件（NapCat 扩展）
- [`upload_file_stream`](./upload-file-stream) — 流式上传文件
