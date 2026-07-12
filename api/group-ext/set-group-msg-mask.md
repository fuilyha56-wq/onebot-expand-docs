# set_group_msg_mask

设置群消息屏蔽等级。

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
| `mask` | int | - | ✅ | 屏蔽等级（1-4） |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "set_group_msg_mask",
  "params": {
    "group_id": 123456789,
    "mask": 2
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

`mask` 取值含义：

| 取值 | 说明 |
|---|---|
| 1 | 接收全部消息 |
| 2 | 仅接收 @我 的消息 |
| 3 | 仅接收管理员消息 |
| 4 | 不接收任何消息 |

## 相关 API

- [`set_group_kick_members`](./set-group-kick-members) — 批量踢出群成员
- [`get_group_info_ex`](./get-group-info-ex) — 获取群扩展信息