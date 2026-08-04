# set_group_member_invite_policy

设置群成员邀请好友进群的审核策略。

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
| `policy` | str | - | ✅ | `disabled`、`require_approval`、`no_approval` 或 `no_approval_under_100` |

## 响应

无响应数据。

## 示例

```json
{
  "action": "set_group_member_invite_policy",
  "params": {
    "group_id": "123456789",
    "policy": "require_approval"
  }
}
```

## 四方差异

仅 NapCat 支持。OneBot v11、SnowLuma 与 LLBot 未实现。

## 相关 API

- [`set_group_member_permissions`](./set-group-member-permissions) — 设置群成员功能权限
- [`set_group_new_member_history_visibility`](./set-group-new-member-history-visibility) — 设置新成员历史消息可见性