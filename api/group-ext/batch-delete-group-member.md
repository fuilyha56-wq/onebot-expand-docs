# batch_delete_group_member

批量删除群成员（LLBot 扩展）。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="unsupported" />

::: tip 来源
LLBot 扩展
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `group_id` | int | - | ✅ | 群号 |
| `user_ids` | list[int] | - | ✅ | 要踢出的 QQ 号列表 |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "batch_delete_group_member",
  "params": {
    "group_id": 123456789,
    "user_ids": [10001, 10002, 10003]
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

## 三方差异

仅 NapCat 支持（LLBot 扩展）。SnowLuma 与 OneBot v11 标准不支持此 API。

## 相关 API

- [`set_group_kick_members`](./set-group-kick-members) — 批量踢出群成员（插件扩展）
- [`set_group_kick`](../group/set-group-kick) — 踢出单个群成员（OneBot 标准）