# get_group_info_ex

获取群扩展信息。

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
| `group_id` | int | 群号 |
| `group_name` | str | 群名称 |
| `group_remark` | str | 群备注 |
| `group_portrait` | str | 群头像 URL |
| `member_count` | int | 成员数 |
| `max_member_count` | int | 最大成员数 |
| `add_option` | int | 入群方式 |
| `robot_member_switch` | bool | 是否允许机器人入群 |
| `search` | bool | 是否可被搜索 |

## 示例

**请求：**

```json
{
  "action": "get_group_info_ex",
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
    "group_name": "测试群",
    "group_remark": "测试群备注",
    "group_portrait": "https://example.com/avatar.png",
    "member_count": 100,
    "max_member_count": 200,
    "add_option": 1,
    "robot_member_switch": true,
    "search": true
  },
  "echo": "1"
}
```

## 三方差异

napcat 与 snowluma 实现一致，返回字段结构相同。

## 相关 API

- [`set_group_portrait`](./set-group-portrait) — 设置群头像
- [`set_group_remark`](./set-group-remark) — 设置群备注
- [`set_group_add_option`](./set-group-add-option) — 设置群入群方式选项
- [`set_group_search`](./set-group-search) — 设置群可被搜索状态
- [`set_group_robot_add_option`](./set-group-robot-add-option) — 设置群机器人入群开关
