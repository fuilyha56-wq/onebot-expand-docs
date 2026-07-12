# get_friend_list

获取好友列表。

## 兼容性

<ApiBadge platform="onebot" status="supported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
OneBot v11 标准 API
:::

## 参数

本 API 无参数。

## 响应

返回 JSON 数组，每个元素结构如下：

| 字段 | 类型 | 说明 |
|---|---|---|
| `user_id` | int64 | 好友 QQ 号 |
| `nickname` | str | 好友昵称 |
| `remark` | str | 好友备注名 |

## 示例

**请求：**

```json
{
  "action": "get_friend_list",
  "params": {}
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": [
    {
      "user_id": 100001,
      "nickname": "小明",
      "remark": "同事-小明"
    },
    {
      "user_id": 100002,
      "nickname": "小红",
      "remark": "小红"
    },
    {
      "user_id": 100003,
      "nickname": "老王",
      "remark": "邻居老王"
    }
  ],
  "echo": "1"
}
```

## 三方差异

三方实现一致，无差异。

## 相关 API

- [`get_login_info`](./get-login-info) — 获取登录号信息
- [`get_stranger_info`](./get-stranger-info) — 获取陌生人信息
- [`get_group_list`](./get-group-list) — 获取群列表
