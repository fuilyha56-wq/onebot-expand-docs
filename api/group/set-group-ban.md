# set_group_ban

群组单人禁言。

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
| `user_id` | int | - | ✅ | 要禁言的用户 QQ 号 |
| `duration` | int | 1800 | ❌ | 禁言秒数，0 表示取消禁言 |

## 响应

无

## 示例

**请求：**

```json
{
  "action": "set_group_ban",
  "params": {
    "group_id": 123456789,
    "user_id": 987654321,
    "duration": 1800
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

**取消禁言：**

```json
{
  "action": "set_group_ban",
  "params": {
    "group_id": 123456789,
    "user_id": 987654321,
    "duration": 0
  }
}
```

## 三方差异

三方实现一致，无差异。

## 相关 API

- [`set_group_anonymous_ban`](./set-group-anonymous-ban) — 群组匿名用户禁言
- [`set_group_whole_ban`](./set-group-whole-ban) — 群组全员禁言
- [`set_group_kick`](./set-group-kick) — 群组踢人
