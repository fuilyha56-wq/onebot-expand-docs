# set_group_card

设置群名片。

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
| `user_id` | int | - | ✅ | 要设置群名片的用户 QQ 号 |
| `card` | str | "" | ❌ | 群名片内容，空字符串表示删除群名片 |

## 响应

无

## 示例

**请求：**

```json
{
  "action": "set_group_card",
  "params": {
    "group_id": 123456789,
    "user_id": 987654321,
    "card": "新名片"
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

**删除群名片：**

```json
{
  "action": "set_group_card",
  "params": {
    "group_id": 123456789,
    "user_id": 987654321,
    "card": ""
  }
}
```

## 三方差异

三方实现一致，无差异。

## 相关 API

- [`set_group_admin`](./set-group-admin) — 群组设置管理员
- [`set_group_special_title`](./set-group-special-title) — 设置群组专属头衔
- [`set_group_name`](./set-group-name) — 设置群名
