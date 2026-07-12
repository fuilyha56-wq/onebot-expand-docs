# set_friend_category

设置好友分组。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="unsupported" />

::: tip 来源
LLBot 扩展
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `user_id` | int | - | ✅ | 好友 QQ 号 |
| `category_id` | int | - | ✅ | 分组 ID |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "set_friend_category",
  "params": {
    "user_id": 987654321,
    "category_id": 5
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": null,
  "echo": "1"
}
```

## 三方差异

仅 NapCat 支持（LLBot 扩展）。SnowLuma 与 OneBot v11 标准不支持此 API。

## 相关 API

- [`get_friends_with_category`](./get-friends-with-category) — 获取分类好友列表
- [`set_friend_remark`](./set-friend-remark) — 设置好友备注
- [`delete_friend`](./delete-friend) — 删除好友