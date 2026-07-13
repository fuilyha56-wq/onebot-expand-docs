# set_group_kick_members

批量踢出群成员。

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
| `user_id_list` | list[int] | - | ✅ | 待踢出的用户 ID 列表 |
| `reject_add_request` | bool | false | ❌ | 是否拒绝此人再次加群 |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "set_group_kick_members",
  "params": {
    "group_id": 123456789,
    "user_id_list": [10001, 10002, 10003],
    "reject_add_request": false
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

- [`set_group_kick`](../group/set-group-kick) — 踢出单个群成员（OneBot 标准）
- [`get_group_info_ex`](./get-group-info-ex) — 获取群扩展信息
