# set_group_admin

群组设置管理员。

## 兼容性

<ApiBadge platform="onebot" status="supported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
OneBot v11 标准 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `group_id` | int | - | ✅ | 群号 |
| `user_id` | int | - | ✅ | 要设置管理员的用户 QQ 号 |
| `enable` | bool | true | ❌ | 是否设为管理员 |

## 响应

无

## 示例

**请求：**

```json
{
  "action": "set_group_admin",
  "params": {
    "group_id": 123456789,
    "user_id": 987654321,
    "enable": true
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

**取消管理员：**

```json
{
  "action": "set_group_admin",
  "params": {
    "group_id": 123456789,
    "user_id": 987654321,
    "enable": false
  }
}
```

## 四方差异

四方实现一致，无差异。

## 相关 API

- [`set_group_card`](./set-group-card) — 设置群名片
- [`set_group_special_title`](./set-group-special-title) — 设置群组专属头衔
- [`set_group_whole_ban`](./set-group-whole-ban) — 群组全员禁言
