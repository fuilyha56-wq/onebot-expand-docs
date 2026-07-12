# can_send_image

检查是否可以发送图片。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
NapCat 扩展 API
:::

## 参数

无参数。

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `yes` | bool | 是否可以发送图片 |

## 示例

**请求：**

```json
{
  "action": "can_send_image",
  "params": {}
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "yes": true
  },
  "echo": "1"
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致，OneBot 标准不支持此 API。

## 相关 API

- [`can_send_record`](./can-send-record) — 检查是否可以发送语音
- [`get_status`](./get-status) — 获取运行状态
