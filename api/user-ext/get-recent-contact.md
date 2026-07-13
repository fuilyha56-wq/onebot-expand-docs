# get_recent_contact

获取最近联系人列表。

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
| `count` | int | 10 | ❌ | 获取数量 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `list` | list[dict] | 最近联系人列表 |
| `list[].user_id` | int | 联系人 QQ 号（私聊） |
| `list[].group_id` | int | 群号（群聊） |
| `list[].time` | int | 最后联系时间戳 |
| `list[].type` | str | 联系人类型，`private` 或 `group` |

## 示例

**请求：**

```json
{
  "action": "get_recent_contact",
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
        "user_id": 987654321,
        "time": 1720761600,
        "type": "private"
      },
      {
        "group_id": 123456789,
        "time": 1720758000,
        "type": "group"
      }
    ]
  },
  "echo": "1"
}
```

## 四方差异

NapCat 与 SnowLuma 实现一致，无差异。

## 相关 API

- [`get_friends_with_category`](./get-friends-with-category) — 获取分类好友列表
- [`get_unidirectional_friend_list`](./get-unidirectional-friend-list) — 获取单向好友列表
