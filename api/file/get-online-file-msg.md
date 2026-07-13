# get_online_file_msg

获取在线文件消息列表（NapCat 扩展）。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="exclusive" />
<ApiBadge platform="snowluma" status="unsupported" />
<ApiBadge platform="llbot" status="supported" />

::: warning NapCat 专属
此 API 为 NapCat 专属，SnowLuma 不支持。
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `user_id` | int | - | ✅ | 对方 QQ 号 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `files` | array | 在线文件消息列表 |

## 示例

**请求：**

```json
{
  "action": "get_online_file_msg",
  "params": {
    "user_id": 987654321
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "files": [
      {
        "msg_id": "msg_001",
        "file_name": "document.pdf",
        "file_size": 204800
      }
    ]
  }
}
```

## 四方差异

NapCat 专属 API，SnowLuma 不支持。

## 相关 API

- [`send_online_file`](./send-online-file) — 发送在线文件
- [`receive_online_file`](./receive-online-file) — 接收在线文件
