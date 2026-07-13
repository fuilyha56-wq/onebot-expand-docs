# get_group_ignore_add_request

获取被忽略的入群请求列表。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
插件扩展（onebot_expand）
:::

## 参数

无参数。

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `ignore_add_request` | array[dict] | 被忽略的入群请求列表 |

## 示例

**请求：**

```json
{
  "action": "get_group_ignore_add_request",
  "params": {}
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "ignore_add_request": [
      {
        "group_id": 123456789,
        "user_id": 10001,
        "message": "请求加群",
        "flag": "flag_001"
      }
    ]
  },
  "echo": "1"
}
```

## 四方差异

napcat 与 snowluma 实现一致，返回字段结构相同。

## 相关 API

- [`get_group_ignored_notifies`](./get-group-ignored-notifies) — 获取被过滤的入群请求
- [`get_group_info_ex`](./get-group-info-ex) — 获取群扩展信息
