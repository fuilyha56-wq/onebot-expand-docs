# set_friend_remark

设置好友备注。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
onebot_expand 插件扩展
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `user_id` | int | - | ✅ | 好友 QQ 号 |
| `remark` | str | - | ✅ | 备注名 |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "set_friend_remark",
  "params": {
    "user_id": 987654321,
    "remark": "小明"
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

NapCat 与 SnowLuma 实现一致，无差异。

## 相关 API

- [`delete_friend`](./delete-friend) — 删除好友
- [`get_friends_with_category`](./get-friends-with-category) — 获取分类好友列表
