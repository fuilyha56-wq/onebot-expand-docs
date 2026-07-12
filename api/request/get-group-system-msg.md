# get_group_system_msg

获取群系统消息（加群请求、邀请入群请求）。

## 兼容性

<ApiBadge platform="onebot" status="supported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
OneBot v11 标准 API
:::

## 参数

无参数。

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `invited_requests` | list[dict] | 邀请入群请求列表 |
| `invited_requests[].request_id` | int | 请求 ID |
| `invited_requests[].verifier_id` | int | 审核者 QQ 号 |
| `invited_requests[].group_id` | int | 群号 |
| `invited_requests[].message` | str | 邀请消息 |
| `join_requests` | list[dict] | 进群请求列表 |
| `join_requests[].request_id` | int | 请求 ID |
| `join_requests[].verifier_id` | int | 审核者 QQ 号 |
| `join_requests[].group_id` | int | 群号 |
| `join_requests[].message` | str | 进群消息 |

## 示例

**请求：**

```json
{
  "action": "get_group_system_msg",
  "params": {}
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "invited_requests": [
      {
        "request_id": 1,
        "verifier_id": 10001,
        "group_id": 123456789,
        "message": "邀请你加入群聊"
      }
    ],
    "join_requests": [
      {
        "request_id": 2,
        "verifier_id": 10001,
        "group_id": 123456789,
        "message": "我想加入群聊"
      }
    ]
  },
  "echo": "1"
}
```

## 三方差异

三方实现一致，无差异。

## 相关 API

- [`set_group_add_request`](./set-group-add-request) — 处理加群请求
- [`set_friend_add_request`](./set-friend-add-request) — 处理加好友请求
