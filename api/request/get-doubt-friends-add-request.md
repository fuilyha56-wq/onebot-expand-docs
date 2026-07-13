# get_doubt_friends_add_request

获取可疑好友申请列表。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
onebot_expand 插件扩展
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `count` | int | - | ❌ | 获取数量 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `list` | list[dict] | 可疑好友申请列表 |
| `list[].flag` | str | 请求 flag |
| `list[].user_id` | int | 申请者 QQ 号 |
| `list[].nickname` | str | 申请者昵称 |
| `list[].message` | str | 申请消息 |

## 示例

**请求：**

```json
{
  "action": "get_doubt_friends_add_request",
  "params": {
    "count": 10
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "list": [
      {
        "flag": "987654321",
        "user_id": 987654321,
        "nickname": "陌生人",
        "message": "你好，想加你为好友"
      }
    ]
  },
  "echo": "1"
}
```

## 四方差异

NapCat 与 SnowLuma 实现一致，无差异。

## 相关 API

- [`set_doubt_friends_add_request`](./set-doubt-friends-add-request) — 处理可疑好友申请
- [`set_friend_add_request`](./set-friend-add-request) — 处理加好友请求
