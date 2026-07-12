# _send_group_notice

发送群公告。

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
| `content` | str | - | ✅ | 公告内容 |
| `image` | str | - | ❌ | 公告图片路径（可选，支持本地路径或 URL） |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "_send_group_notice",
  "params": {
    "group_id": 123456789,
    "content": "本群禁止刷屏，违者禁言。"
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": null,
  "echo": "1"
}
```

**带图片的公告：**

```json
{
  "action": "_send_group_notice",
  "params": {
    "group_id": 123456789,
    "content": "群活动通知，详见图片。",
    "image": "https://example.com/notice.png"
  }
}
```

## 三方差异

napcat 与 snowluma 实现一致，均支持图片参数。

## 相关 API

- [`_get_group_notice`](./get-group-notice) — 获取群公告
- [`_del_group_notice`](./del-group-notice) — 删除群公告
