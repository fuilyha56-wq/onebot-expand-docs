# refuse_online_file

拒绝在线文件（NapCat 扩展）。

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
| `msg_id` | str | - | ✅ | 消息 ID |
| `element_id` | str | - | ✅ | 元素 ID |

## 响应

无

## 示例

**请求：**

```json
{
  "action": "refuse_online_file",
  "params": {
    "user_id": 987654321,
    "msg_id": "msg_001",
    "element_id": "elem_001"
  }
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

NapCat 专属 API，SnowLuma 不支持。

## 相关 API

- [`receive_online_file`](./receive-online-file) — 接收在线文件
- [`cancel_online_file`](./cancel-online-file) — 取消在线文件
