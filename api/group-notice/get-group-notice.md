# _get_group_notice

获取群公告列表。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
插件扩展（onebot_expand）
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `group_id` | int | - | ✅ | 群号 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `notices` | array[dict] | 群公告列表 |

## 示例

**请求：**

```json
{
  "action": "_get_group_notice",
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
    "notices": [
      {
        "notice_id": "notice_001",
        "content": "本群禁止刷屏，违者禁言。",
        "image": "https://example.com/notice.png",
        "sender_id": 10001,
        "publish_time": 1720780800
      }
    ]
  },
  "echo": "1"
}
```

## 三方差异

napcat 与 snowluma 实现一致，返回字段结构相同。

## 相关 API

- [`_send_group_notice`](./send-group-notice) — 发送群公告
- [`_del_group_notice`](./del-group-notice) — 删除群公告
