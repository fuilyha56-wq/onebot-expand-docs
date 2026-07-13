# send_online_folder

发送在线文件夹（私聊，NapCat 扩展）。向指定好友发送整个文件夹，文件夹内所有文件通过在线传输方式发送。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="exclusive" />
<ApiBadge platform="snowluma" status="unsupported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
NapCat 扩展 API（napcat_only）
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `user_id` | int | - | ✅ | 对方 QQ 号 |
| `folder_path` | str | - | ✅ | 文件夹本地路径 |
| `folder_name` | str | - | ✅ | 文件夹名称 |

## 响应

无

## 示例

**请求：**

```json
{
  "action": "send_online_folder",
  "params": {
    "user_id": 987654321,
    "folder_path": "C:/files/project",
    "folder_name": "project"
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

## 四方差异

此 API 为 NapCat 专属，SnowLuma 不支持。OneBot v11 标准未定义此 API。

## 相关 API

- [`send_online_file`](./send-online-file) — 发送在线文件
- [`get_online_file_msg`](./get-online-file-msg) — 获取在线文件消息列表
- [`receive_online_file`](./receive-online-file) — 接收在线文件
