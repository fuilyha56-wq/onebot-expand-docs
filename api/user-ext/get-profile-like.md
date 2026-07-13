# get_profile_like

获取点赞列表。

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
| `user_id` | int | - | ❌ | 目标 QQ 号，不填默认登录号 |
| `start` | int | - | ❌ | 起始位置 |
| `count` | int | - | ❌ | 获取数量 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `list` | list[dict] | 点赞列表 |
| `list[].user_id` | int | 点赞者 QQ 号 |
| `list[].nickname` | str | 点赞者昵称 |
| `list[].time` | int | 点赞时间戳 |
| `list[].count` | int | 点赞次数 |

## 示例

**请求：**

```json
{
  "action": "get_profile_like",
  "params": {
    "user_id": 987654321,
    "start": 0,
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
        "user_id": 123456789,
        "nickname": "点赞者",
        "time": 1720761600,
        "count": 1
      }
    ]
  },
  "echo": "1"
}
```

## 四方差异

NapCat 与 SnowLuma 实现一致，无差异。

## 相关 API

- [`get_recent_contact`](./get-recent-contact) — 获取最近联系人列表
- [`get_friends_with_category`](./get-friends-with-category) — 获取分类好友列表
