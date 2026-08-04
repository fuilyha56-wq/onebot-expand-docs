# set_group_member_permissions

设置群成员上传相册、发起临时会话和创建群聊的权限。

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
| `allow_member_upload_album` | bool | - | ❌ | 是否允许成员上传群相册 |
| `allow_member_temporary_session` | bool | - | ❌ | 是否允许成员发起临时会话 |
| `allow_member_create_group` | bool | - | ❌ | 是否允许成员发起新群聊 |

::: warning 参数要求
三个权限参数至少提供一个；未提供的项目保持不变。
:::

## 响应

无响应数据。

## 示例

```json
{
  "action": "set_group_member_permissions",
  "params": {
    "group_id": "123456789",
    "allow_member_upload_album": false
  }
}
```

## 四方差异

仅 NapCat 支持。OneBot v11、SnowLuma 与 LLBot 未实现。

## 相关 API

- [`set_group_member_invite_policy`](./set-group-member-invite-policy) — 设置群成员邀请策略
- [`set_group_new_member_history_visibility`](./set-group-new-member-history-visibility) — 设置新成员历史消息可见性