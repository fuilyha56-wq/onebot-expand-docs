# get_login_info

获取登录号信息。

## 兼容性

<ApiBadge platform="onebot" status="supported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
OneBot v11 标准 API
:::

## 参数

本 API 无参数。

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `user_id` | int64 | 登录号 QQ 号 |
| `nickname` | str | 登录号昵称 |

## 示例

**请求：**

```json
{
  "action": "get_login_info",
  "params": {}
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "user_id": 123456789,
    "nickname": "我的机器人"
  },
  "echo": "1"
}
```

## 四方差异

四方实现一致，无差异。

## 相关 API

- [`get_stranger_info`](./get-stranger-info) — 获取陌生人信息
- [`get_friend_list`](./get-friend-list) — 获取好友列表
