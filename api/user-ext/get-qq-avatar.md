# get_qq_avatar

获取 QQ 头像 URL。

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
| `user_id` | int | - | ❌ | 目标 QQ 号（与 `group_id` 二选一） |
| `group_id` | int | - | ❌ | 群号（与 `user_id` 二选一，获取群头像） |

::: warning 参数约束
`user_id` 与 `group_id` 必须二选一，至少传入一个。
:::

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `url` | str | 头像图片 URL |

## 示例

**请求（获取用户头像）：**

```json
{
  "action": "get_qq_avatar",
  "params": {
    "user_id": 987654321
  }
}
```

**请求（获取群头像）：**

```json
{
  "action": "get_qq_avatar",
  "params": {
    "group_id": 123456789
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "url": "https://q.qlogo.cn/g?b=qq&nk=987654321&s=640"
  },
  "echo": "1"
}
```

## 三方差异

仅 NapCat 支持（LLBot 扩展）。SnowLuma 与 OneBot v11 标准不支持此 API。

## 相关 API

- [`set_qq_avatar`](./set-qq-avatar) — 设置 QQ 头像
- [`set_group_portrait`](../group-ext/set-group-portrait) — 设置群头像
- [`get_group_info_ex`](../group-ext/get-group-info-ex) — 获取群扩展信息