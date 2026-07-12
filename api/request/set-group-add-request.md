# set_group_add_request

处理加群请求。

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
| `flag` | str | - | ✅ | 加群请求的 flag（从请求事件中获取） |
| `sub_type` | str | - | ✅ | 请求子类型，`add` 为主动加群，`invite` 为被邀请入群 |
| `approve` | bool | true | ❌ | 是否同意请求 |
| `reason` | str | - | ❌ | 拒绝理由（仅在 `approve` 为 false 时有效） |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "set_group_add_request",
  "params": {
    "flag": "123456789",
    "sub_type": "add",
    "approve": true
  }
}
```

**拒绝入群：**

```json
{
  "action": "set_group_add_request",
  "params": {
    "flag": "123456789",
    "sub_type": "invite",
    "approve": false,
    "reason": "暂不接收新成员"
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

三方实现一致，无差异。

## 相关 API

- [`set_friend_add_request`](./set-friend-add-request) — 处理加好友请求
- [`get_group_system_msg`](./get-group-system-msg) — 获取群系统消息
