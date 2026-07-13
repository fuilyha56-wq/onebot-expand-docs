# _del_group_notice

删除群公告。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
插件扩展（onebot_expand）
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `group_id` | int | - | ✅ | 群号 |
| `notice_id` | str | - | ✅ | 公告 ID |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "_del_group_notice",
  "params": {
    "group_id": 123456789,
    "notice_id": "notice_001"
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

## 四方差异

napcat 与 snowluma 实现一致，无差异。

## 相关 API

- [`_send_group_notice`](./send-group-notice) — 发送群公告
- [`_get_group_notice`](./get-group-notice) — 获取群公告
