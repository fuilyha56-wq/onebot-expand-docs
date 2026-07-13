# get_group_at_all_remain

获取群 @全体 剩余次数。

## 兼容性

<ApiBadge platform="onebot" status="supported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
go-cqhttp 兼容 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `group_id` | int | - | ✅ | 群号 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `can_at_all` | bool | 是否可以 @全体 |
| `remain_at_all_count` | int | 剩余 @全体 次数 |
| `remain_at_all_count_for_group` | int | 群剩余 @全体 次数 |

## 示例

**请求：**

```json
{
  "action": "get_group_at_all_remain",
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
    "can_at_all": true,
    "remain_at_all_count": 10,
    "remain_at_all_count_for_group": 20
  },
  "echo": "1"
}
```

## 四方差异

四方实现一致，无差异。

## 相关 API

- [`get_essence_msg_list`](./get-essence-msg-list) — 获取精华消息列表
- [`get_status`](./get-status) — 获取运行状态
