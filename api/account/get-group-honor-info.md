# get_group_honor_info

获取群荣誉信息。

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
| `group_id` | int64 | - | ✅ | 群号 |
| `type` | str | - | ✅ | 荣誉类型，可选值：`talkative`（龙王）/ `performer`（群聊之火）/ `legend`（群聊炽焰）/ `strong_newbie`（冒尖小春笋）/ `emotion`（快乐源泉）/ `all`（全部） |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `group_id` | int64 | 群号 |
| `current_talkative` | object | 当前龙王信息 |
| `talkative_list` | array | 龙王列表 |
| `performer_list` | array | 群聊之火列表 |
| `legend_list` | array | 群聊炽焰列表 |
| `strong_newbie_list` | array | 冒尖小春笋列表 |
| `emotion_list` | array | 快乐源泉列表 |

::: tip 荣誉对象结构
`current_talkative` 对象：

| 字段 | 类型 | 说明 |
|---|---|---|
| `user_id` | int64 | 用户 QQ 号 |
| `nickname` | str | 昵称 |
| `avatar` | str | 头像 URL |
| `day_count` | int32 | 持续天数 |

`*_list` 数组中每个元素：

| 字段 | 类型 | 说明 |
|---|---|---|
| `user_id` | int64 | 用户 QQ 号 |
| `nickname` | str | 昵称 |
| `avatar` | str | 头像 URL |
| `description` | str | 荣誉描述 |
:::

## 示例

**请求：**

```json
{
  "action": "get_group_honor_info",
  "params": {
    "group_id": 123456789,
    "type": "all"
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
    "current_talkative": {
      "user_id": 100001,
      "nickname": "龙王大人",
      "avatar": "https://q1.qlogo.cn/g?k=100001",
      "day_count": 7
    },
    "talkative_list": [
      {
        "user_id": 100001,
        "nickname": "龙王大人",
        "avatar": "https://q1.qlogo.cn/g?k=100001",
        "description": "连续 7 天成为龙王"
      },
      {
        "user_id": 100002,
        "nickname": "前龙王",
        "avatar": "https://q1.qlogo.cn/g?k=100002",
        "description": "连续 3 天成为龙王"
      }
    ],
    "performer_list": [
      {
        "user_id": 100003,
        "nickname": "群聊之火",
        "avatar": "https://q1.qlogo.cn/g?k=100003",
        "description": "群聊最活跃"
      }
    ],
    "legend_list": [],
    "strong_newbie_list": [],
    "emotion_list": []
  },
  "echo": "1"
}
```

**仅查询龙王信息：**

```json
{
  "action": "get_group_honor_info",
  "params": {
    "group_id": 123456789,
    "type": "talkative"
  }
}
```

## 四方差异

四方实现一致，无差异。

## 相关 API

- [`get_group_info`](./get-group-info) — 获取群信息
- [`get_group_member_info`](./get-group-member-info) — 获取群成员信息
- [`get_group_list`](./get-group-list) — 获取群列表
