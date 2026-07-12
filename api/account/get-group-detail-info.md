# get_group_detail_info

获取群详情信息。相比 [`get_group_info`](./get-group-info) 返回更丰富的群信息，包括群主、创建时间等。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
NapCat 扩展 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `group_id` | int | - | ✅ | 群号 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `group_id` | int64 | 群号 |
| `group_name` | str | 群名称 |
| `owner_id` | int64 | 群主 QQ 号 |
| `create_time` | int32 | 群创建时间戳 |
| `member_count` | int32 | 群成员数 |
| `max_member_count` | int32 | 群最大成员数 |
| `introduction` | str | 群简介 |
| `notification` | str | 群公告 |

## 示例

**请求：**

```json
{
  "action": "get_group_detail_info",
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
    "group_id": 123456789,
    "group_name": "技术交流群",
    "owner_id": 100001,
    "create_time": 1609459200,
    "member_count": 256,
    "max_member_count": 1000,
    "introduction": "本群用于技术交流与学习",
    "notification": "请遵守群规，文明发言"
  },
  "echo": "1"
}
```

## 三方差异

| 平台 | 支持情况 | 说明 |
|---|---|---|
| OneBot v11 | ✗ | 标准未定义此 API |
| NapCat | ✓ | 完整支持 |
| SnowLuma | ✓ | 完整支持 |

::: warning 注意
此 API 为 NapCat 扩展，OneBot v11 标准实现不支持。如需跨平台使用，请优先使用 [`get_group_info`](./get-group-info)。
:::

## 相关 API

- [`get_group_info`](./get-group-info) — 获取群信息（标准 API）
- [`get_group_list`](./get-group-list) — 获取群列表
- [`get_group_member_list`](./get-group-member-list) — 获取群成员列表
