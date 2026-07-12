# set_group_anonymous_ban

群组匿名用户禁言。

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
| `anonymous` | dict | - | ❌ | 匿名用户对象，与 `anonymous_flag` 二选一 |
| `anonymous_flag` | str | - | ❌ | 匿名用户 flag，与 `anonymous` 二选一 |
| `duration` | int | 1800 | ❌ | 禁言秒数，0 表示取消禁言 |

## 响应

无

## 示例

**请求（使用 anonymous 对象）：**

```json
{
  "action": "set_group_anonymous_ban",
  "params": {
    "group_id": 123456789,
    "anonymous": {
      "id": 5,
      "name": "匿名用户",
      "flag": "abc123"
    },
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

**使用 anonymous_flag：**

```json
{
  "action": "set_group_anonymous_ban",
  "params": {
    "group_id": 123456789,
    "anonymous_flag": "abc123",
    "duration": 3600
  }
}
```

## 三方差异

三方实现一致，无差异。

## 相关 API

- [`set_group_ban`](./set-group-ban) — 群组单人禁言
- [`set_group_anonymous`](./set-group-anonymous) — 群组匿名
- [`set_group_whole_ban`](./set-group-whole-ban) — 群组全员禁言
