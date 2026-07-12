# get_group_member_list

获取群成员列表。

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
| `group_id` | int64 | - | ✅ | 群号 |

## 响应

返回 JSON 数组，每个元素结构同 [`get_group_member_info`](./get-group-member-info) 的响应：

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
  "action": "get_group_member_list",
  "params": {
    "group_id": 123456789
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": [
    {
      "group_id": 123456789,
      "user_id": 100001,
      "nickname": "群主大人",
      "card": "群主",
      "sex": "male",
      "age": 30,
      "area": "北京",
      "join_time": 1609459200,
      "last_sent_time": 1672531200,
      "level": "99",
      "role": "owner",
      "unfriendly": false,
      "title": "群主",
      "title_expire_time": 0,
      "card_changeable": true
    },
    {
      "group_id": 123456789,
      "user_id": 100002,
      "nickname": "管理员甲",
      "card": "管理",
      "sex": "female",
      "age": 25,
      "area": "上海",
      "join_time": 1609545600,
      "last_sent_time": 1672444800,
      "level": "50",
      "role": "admin",
      "unfriendly": false,
      "title": "",
      "title_expire_time": 0,
      "card_changeable": true
    },
    {
      "group_id": 123456789,
      "user_id": 100003,
      "nickname": "普通成员",
      "card": "",
      "sex": "unknown",
      "age": 0,
      "area": "",
      "join_time": 1609632000,
      "last_sent_time": 1672358400,
      "level": "10",
      "role": "member",
      "unfriendly": false,
      "title": "",
      "title_expire_time": 0,
      "card_changeable": true
    }
  ],
  "echo": "1"
}
```

## 三方差异

三方实现一致，无差异。

## 相关 API

- [`get_group_member_info`](./get-group-member-info) — 获取单个群成员信息
- [`get_group_info`](./get-group-info) — 获取群信息
- [`get_group_list`](./get-group-list) — 获取群列表
