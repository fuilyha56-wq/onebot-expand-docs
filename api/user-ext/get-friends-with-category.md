# get_friends_with_category

获取分类好友列表。

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
| `list` | list[dict] | 分类好友列表 |
| `list[].category_id` | int | 分类 ID |
| `list[].category_name` | str | 分类名称 |
| `list[].friends` | list[dict] | 该分类下的好友列表 |
| `list[].friends[].user_id` | int | 好友 QQ 号 |
| `list[].friends[].nickname` | str | 好友昵称 |
| `list[].friends[].remark` | str | 好友备注 |

## 示例

**请求：**

```json
{
  "action": "get_friends_with_category",
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
        "category_id": 1,
        "category_name": "我的好友",
        "friends": [
          {
            "user_id": 987654321,
            "nickname": "小明",
            "remark": "同事-小明"
          }
        ]
      }
    ]
  },
  "echo": "1"
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致，无差异。

## 相关 API

- [`get_unidirectional_friend_list`](./get-unidirectional-friend-list) — 获取单向好友列表
- [`set_friend_remark`](./set-friend-remark) — 设置好友备注
