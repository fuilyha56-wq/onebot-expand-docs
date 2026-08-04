# set_group_new_member_history_visibility

设置新入群成员是否可以查看最近聊天记录。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="exclusive" />
<ApiBadge platform="snowluma" status="unsupported" />
<ApiBadge platform="llbot" status="unsupported" />

::: tip 来源
NapCat 扩展 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `group_id` | str | - | ✅ | 群号 |
| `visible` | bool | - | ✅ | 新成员是否可见最近聊天记录 |

## 响应

无响应数据。

## 示例

```json
{
  "action": "set_group_new_member_history_visibility",
  "params": {
    "group_id": "123456789",
    "visible": true
  }
}
```

## 四方差异

仅 NapCat 支持。OneBot v11、SnowLuma 与 LLBot 未实现。

## 相关 API

- [`set_group_member_invite_policy`](./set-group-member-invite-policy) — 设置群成员邀请策略
- [`set_group_member_permissions`](./set-group-member-permissions) — 设置群成员功能权限