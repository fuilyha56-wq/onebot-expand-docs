# get_profile_like_count

获取用户被点赞数量。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="unsupported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
LLBot 扩展
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `user_id` | int | - | ✅ | 目标 QQ 号 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `count` | int | 被点赞总数 |

## 示例

**请求：**

```json
{
  "action": "get_profile_like_count",
  "params": {
    "user_id": 987654321
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "count": 128
  },
  "echo": "1"
}
```

## 四方差异

仅 NapCat 支持（LLBot 扩展）。SnowLuma 与 OneBot v11 标准不支持此 API。

## 相关 API

- [`get_profile_like`](./get-profile-like) — 获取点赞列表
- [`get_profile_like_me`](./get-profile-like-me) — 获取"赞过我"的用户列表
- [`get_recent_contact`](./get-recent-contact) — 获取最近联系人列表