# set_qzone_ban

拉黑或解除拉黑某人（机器人自身 QQ 空间黑名单）。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="unsupported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
插件扩展（onebot_expand，SnowLuma 扩展）
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `user_id` | int | - | ✅ | 要拉黑/解除拉黑的用户 QQ |
| `enable` | bool | - | ✅ | `true` 拉黑，`false` 解除拉黑 |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "set_qzone_ban",
  "params": {
    "user_id": 100012345,
    "enable": true
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

此 API 为 SnowLuma 扩展，NapCat 不支持。OneBot v11 标准未定义此 API。

## 相关 API

- [`set_qzone_msg_right`](./set-qzone-msg-right) — 修改说说查看权限
- [`send_qzone_msg`](./send-qzone-msg) — 发表说说
- [`delete_qzone_msg`](./delete-qzone-msg) — 删除说说
