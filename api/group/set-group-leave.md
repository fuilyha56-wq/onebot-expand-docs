# set_group_leave

退出群组。

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
| `is_dismiss` | bool | false | ❌ | 是否解散群（仅群主可用） |

## 响应

无

## 示例

**请求：**

```json
{
  "action": "set_group_leave",
  "params": {
    "group_id": 123456789,
    "is_dismiss": false
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

**解散群（群主）：**

```json
{
  "action": "set_group_leave",
  "params": {
    "group_id": 123456789,
    "is_dismiss": true
  }
}
```

## 三方差异

三方实现一致，无差异。

## 相关 API

- [`set_group_kick`](./set-group-kick) — 群组踢人
- [`set_group_admin`](./set-group-admin) — 群组设置管理员
- [`set_group_name`](./set-group-name) — 设置群名
