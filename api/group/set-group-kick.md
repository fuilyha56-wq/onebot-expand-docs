# set_group_kick

群组踢人。

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
| `group_id` | int | - | ✅ | 群号 |
| `user_id` | int | - | ✅ | 要踢出的用户 QQ 号 |
| `reject_add_request` | bool | false | ❌ | 拒绝此人再次加群请求 |

## 响应

无

## 示例

**请求：**

```json
{
  "action": "set_group_kick",
  "params": {
    "group_id": 123456789,
    "user_id": 987654321
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": null
}
```

**拒绝此人再次加群：**

```json
{
  "action": "set_group_kick",
  "params": {
    "group_id": 123456789,
    "user_id": 987654321,
    "reject_add_request": true
  }
}
```

## 三方差异

三方实现一致，无差异。

## 相关 API

- [`set_group_ban`](./set-group-ban) — 群组单人禁言
- [`set_group_leave`](./set-group-leave) — 退出群组
- [`set_group_whole_ban`](./set-group-whole-ban) — 群组全员禁言
