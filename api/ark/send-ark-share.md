# send_ark_share

发送Ark分享（NapCat 名，功能等价于 `share_peer`）。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
插件扩展（onebot_expand）
:::

::: tip 别名
`share_peer`（SnowLuma 主名，功能等价）
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `user_id` | int | - | ❌ | 要分享的用户 QQ（与 `group_id` 二选一） |
| `group_id` | int | - | ❌ | 要分享的群号（与 `user_id` 二选一） |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `ark` | dict | Ark 卡片消息段 |

## 示例

**请求：**

```json
{
  "action": "send_ark_share",
  "params": {
    "group_id": 123456789
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "ark": {
      "type": "ark",
      "data": {
        "template_id": 1,
        "kv": [
          { "key": "#TITLE", "value": "推荐群聊" },
          { "key": "#META_COM_1", "value": "群名称" }
        ]
      }
    }
  },
  "echo": "1"
}
```

## 三方差异

NapCat 名为 `send_ark_share`，SnowLuma 主名为 `share_peer`，两者功能等价。OneBot v11 标准未定义此 API。

## 相关 API

- [`share_peer`](./share-peer) — 分享用户/群Ark卡片（SnowLuma 主名）
- [`share_group_ex`](./share-group-ex) — 推荐群聊卡片
- [`send_group_ark_share`](./send-group-ark-share) — 群聊Ark分享
