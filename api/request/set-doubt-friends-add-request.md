# set_doubt_friends_add_request

处理可疑好友申请。

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
| `flag` | str | - | ✅ | 可疑好友申请的 flag（从 `get_doubt_friends_add_request` 获取） |
| `approve` | bool | - | ✅ | 是否同意申请 |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "set_doubt_friends_add_request",
  "params": {
    "flag": "987654321",
    "approve": true
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

- [`get_doubt_friends_add_request`](./get-doubt-friends-add-request) — 获取可疑好友申请列表
- [`set_friend_add_request`](./set-friend-add-request) — 处理加好友请求
