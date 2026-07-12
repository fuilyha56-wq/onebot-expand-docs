# get_unidirectional_friend_list

获取单向好友列表。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
onebot_expand 插件扩展
:::

## 参数

无参数。

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `list` | list[dict] | 单向好友列表 |
| `list[].user_id` | int | 单向好友 QQ 号 |
| `list[].nickname` | str | 单向好友昵称 |
| `list[].source` | str | 来源 |

## 示例

**请求：**

```json
{
  "action": "get_unidirectional_friend_list",
  "params": {}
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
        "nickname": "单向好友",
        "source": "群聊"
      }
    ]
  },
  "echo": "1"
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致，无差异。

## 相关 API

- [`get_friends_with_category`](./get-friends-with-category) — 获取分类好友列表
- [`delete_friend`](./delete-friend) — 删除好友
