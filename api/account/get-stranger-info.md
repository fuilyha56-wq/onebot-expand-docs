# get_stranger_info

获取陌生人信息。

## 兼容性

<ApiBadge platform="onebot" status="supported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
OneBot v11 标准 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `user_id` | int | - | ✅ | 陌生人 QQ 号 |
| `no_cache` | bool | false | ❌ | 是否不使用缓存（强制从服务器拉取最新数据） |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `user_id` | int64 | 陌生人 QQ 号 |
| `nickname` | str | 昵称 |
| `sex` | str | 性别，`male` / `female` / `unknown` |
| `age` | int32 | 年龄 |

## 示例

**请求：**

```json
{
  "action": "get_stranger_info",
  "params": {
    "user_id": 987654321,
    "no_cache": false
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "user_id": 987654321,
    "nickname": "路人甲",
    "sex": "male",
    "age": 25
  },
  "echo": "1"
}
```

**不使用缓存：**

```json
{
  "action": "get_stranger_info",
  "params": {
    "user_id": 987654321,
    "no_cache": true
  }
}
```

## 四方差异

四方实现一致，无差异。

## 相关 API

- [`get_login_info`](./get-login-info) — 获取登录号信息
- [`get_friend_list`](./get-friend-list) — 获取好友列表
- [`get_group_member_info`](./get-group-member-info) — 获取群成员信息
