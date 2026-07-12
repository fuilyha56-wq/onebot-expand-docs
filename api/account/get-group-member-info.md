# get_group_member_info

获取群成员信息。

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
| `group_id` | int | - | ✅ | 群号 |
| `user_id` | int | - | ✅ | 成员 QQ 号 |
| `no_cache` | bool | false | ❌ | 是否不使用缓存（强制从服务器拉取最新数据） |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `group_id` | int64 | 群号 |
| `user_id` | int64 | 成员 QQ 号 |
| `nickname` | str | 成员昵称 |
| `card` | str | 群名片 |
| `sex` | str | 性别，`male` / `female` / `unknown` |
| `age` | int32 | 年龄 |
| `area` | str | 地区 |
| `join_time` | int32 | 加群时间戳 |
| `last_sent_time` | int32 | 最后发言时间戳 |
| `level` | str | 成员等级 |
| `role` | str | 角色，`owner` / `admin` / `member` |
| `unfriendly` | bool | 是否不良记录成员 |
| `title` | str | 专属头衔 |
| `title_expire_time` | int32 | 头衔过期时间戳 |
| `card_changeable` | bool | 是否允许修改群名片 |

## 示例

**请求：**

```json
{
  "action": "get_group_member_info",
  "params": {
    "group_id": 123456789,
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
    "group_id": 123456789,
    "user_id": 987654321,
    "nickname": "群成员昵称",
    "card": "群名片",
    "sex": "male",
    "age": 25,
    "area": "广东",
    "join_time": 1609459200,
    "last_sent_time": 1672531200,
    "level": "42",
    "role": "member",
    "unfriendly": false,
    "title": "潜水冠军",
    "title_expire_time": 1675200000,
    "card_changeable": true
  },
  "echo": "1"
}
```

**不使用缓存：**

```json
{
  "action": "get_group_member_info",
  "params": {
    "group_id": 123456789,
    "user_id": 987654321,
    "no_cache": true
  }
}
```

## 三方差异

三方实现一致，无差异。

## 相关 API

- [`get_group_member_list`](./get-group-member-list) — 获取群成员列表
- [`get_group_info`](./get-group-info) — 获取群信息
- [`get_stranger_info`](./get-stranger-info) — 获取陌生人信息
