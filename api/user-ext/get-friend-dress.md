# _get_friend_dress

获取指定好友正在使用的个性装扮。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="unsupported" />
<ApiBadge platform="snowluma" status="exclusive" />
<ApiBadge platform="llbot" status="unsupported" />

::: tip 来源
SnowLuma 扩展 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `user_id` | int | - | ✅ | 目标好友 QQ 号 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `target_uin` | str | 目标 QQ 号 |
| `is_svip` | bool | 是否为超级会员 |
| `avatar_url` | str | 头像 URL |
| `items` | list[dict] | 当前使用的个性装扮列表 |

## 示例

```json
{
  "action": "_get_friend_dress",
  "params": {
    "user_id": 987654321
  }
}
```

## 四方差异

仅 SnowLuma 支持。目标未使用可查询装扮时，`items` 为空数组。

## 相关 API

- [`get_qq_avatar`](./get-qq-avatar) — 获取 QQ 头像 URL
- [`get_profile_like`](./get-profile-like) — 获取资料点赞