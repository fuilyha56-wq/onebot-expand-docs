# get_profile_like_me

获取"赞过我"的用户列表。

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
| `start` | int | 0 | ❌ | 起始位置 |
| `count` | int | 20 | ❌ | 获取数量（最多 30） |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `users` | array | 点赞用户列表 |
| `nextStart` | int | 下一页起始位置 |

**`users` 元素结构：**

| 字段 | 类型 | 说明 |
|---|---|---|
| `user_id` | int | 点赞者 QQ 号 |
| `nickname` | str | 点赞者昵称 |
| `time` | int | 点赞时间戳 |
| `count` | int | 点赞次数 |

## 示例

**请求：**

```json
{
  "action": "get_profile_like_me",
  "params": {
    "start": 0,
    "count": 20
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "users": [
      {
        "user_id": 123456789,
        "nickname": "点赞者",
        "time": 1720761600,
        "count": 1
      }
    ],
    "nextStart": 20
  },
  "echo": "1"
}
```

## 四方差异

仅 NapCat 支持（LLBot 扩展）。SnowLuma 与 OneBot v11 标准不支持此 API。

## 相关 API

- [`get_profile_like`](./get-profile-like) — 获取点赞列表
- [`get_profile_like_count`](./get-profile-like-count) — 获取点赞数量
- [`get_recent_contact`](./get-recent-contact) — 获取最近联系人列表