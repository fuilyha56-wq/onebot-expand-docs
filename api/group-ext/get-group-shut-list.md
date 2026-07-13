# get_group_shut_list

获取群禁言用户列表。

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

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `shut_list` | array[dict] | 禁言用户列表 |

## 示例

**请求：**

```json
{
  "action": "get_group_shut_list",
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
    "shut_list": [
      {
        "user_id": 10001,
        "nickname": "张三",
        "shut_up_timestamp": 1720784400
      },
      {
        "user_id": 10002,
        "nickname": "李四",
        "shut_up_timestamp": 1720788000
      }
    ]
  },
  "echo": "1"
}
```

## 四方差异

napcat 与 snowluma 实现一致，返回字段结构相同。

## 相关 API

- [`set_group_ban`](../group/set-group-ban) — 群禁言单人（OneBot 标准）
- [`get_group_info_ex`](./get-group-info-ex) — 获取群扩展信息
