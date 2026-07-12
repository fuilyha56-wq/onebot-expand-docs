# set_group_special_title

设置群组专属头衔。

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
| `user_id` | int | - | ✅ | 要设置头衔的用户 QQ 号 |
| `special_title` | str | "" | ❌ | 专属头衔内容，空字符串表示删除头衔 |
| `duration` | int | -1 | ❌ | 头衔有效期秒数，-1 表示永久 |

## 响应

无

## 示例

**请求：**

```json
{
  "action": "set_group_special_title",
  "params": {
    "group_id": 123456789,
    "user_id": 987654321,
    "special_title": "大佬",
    "duration": -1
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

**删除专属头衔：**

```json
{
  "action": "set_group_special_title",
  "params": {
    "group_id": 123456789,
    "user_id": 987654321,
    "special_title": ""
  }
}
```

## 三方差异

三方实现一致，无差异。

## 相关 API

- [`set_group_card`](./set-group-card) — 设置群名片
- [`set_group_admin`](./set-group-admin) — 群组设置管理员
- [`set_group_name`](./set-group-name) — 设置群名
