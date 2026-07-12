# send_online_file

发送在线文件（私聊，NapCat 扩展）。向指定好友发送在线文件，文件通过在线传输而非离线文件方式发送。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="exclusive" />
<ApiBadge platform="snowluma" status="unsupported" />

::: tip 来源
NapCat 扩展 API（napcat_only）
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `user_id` | int | - | ✅ | 对方 QQ 号 |
| `file_path` | str | - | ✅ | 文件本地路径 |
| `file_name` | str | - | ✅ | 文件名（含扩展名） |

## 响应

无

## 示例

**请求：**

```json
{
  "action": "send_online_file",
  "params": {
    "user_id": 987654321,
    "file_path": "C:/files/report.pdf",
    "file_name": "report.pdf"
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

## 三方差异

此 API 为 NapCat 专属，SnowLuma 不支持。OneBot v11 标准未定义此 API。

## 相关 API

- [`send_online_folder`](./send-online-folder) — 发送在线文件夹
- [`get_online_file_msg`](./get-online-file-msg) — 获取在线文件消息列表
- [`upload_private_file`](./upload-private-file) — 上传私聊文件（OneBot v11 标准）
