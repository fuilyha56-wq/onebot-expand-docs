# get_group_list

获取群列表。

## 兼容性

<ApiBadge platform="onebot" status="supported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
OneBot v11 标准 API
:::

## 参数

本 API 无参数。

## 响应

返回 JSON 数组，每个元素结构如下：

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
  "action": "get_group_list",
  "params": {}
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": [
    {
      "group_id": 100100100,
      "group_name": "技术交流群",
      "member_count": 256,
      "max_member_count": 1000
    },
    {
      "group_id": 100200200,
      "group_name": "摸鱼大队",
      "member_count": 88,
      "max_member_count": 500
    }
  ],
  "echo": "1"
}
```

## 三方差异

三方实现一致，无差异。

## 相关 API

- [`get_group_info`](./get-group-info) — 获取单个群信息
- [`get_group_detail_info`](./get-group-detail-info) — 获取群详情信息
- [`get_group_member_list`](./get-group-member-list) — 获取群成员列表
