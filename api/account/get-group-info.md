# get_group_info

获取群信息。

## 兼容性

<ApiBadge platform="onebot" status="supported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
OneBot v11 标准 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `group_id` | int | - | ✅ | 群号 |
| `no_cache` | bool | false | ❌ | 是否不使用缓存（强制从服务器拉取最新数据） |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `group_id` | int64 | 群号 |
| `group_name` | str | 群名称 |
| `member_count` | int32 | 群成员数 |
| `max_member_count` | int32 | 群最大成员数 |

## 示例

**请求：**

```json
{
  "action": "get_group_info",
  "params": {
    "group_id": 123456789,
    "no_cache": false
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "group_id": 123456789,
    "group_name": "技术交流群",
    "member_count": 256,
    "max_member_count": 1000
  },
  "echo": "1"
}
```

**不使用缓存：**

```json
{
  "action": "get_group_info",
  "params": {
    "group_id": 123456789,
    "no_cache": true
  }
}
```

## 三方差异

三方实现一致，无差异。

## 相关 API

- [`get_group_list`](./get-group-list) — 获取群列表
- [`get_group_detail_info`](./get-group-detail-info) — 获取群详情信息（NapCat 扩展）
- [`get_group_member_info`](./get-group-member-info) — 获取群成员信息
