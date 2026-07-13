# nc_get_user_status

获取陌生人在线状态。

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
| `user_id` | int | - | ✅ | 目标用户 QQ 号 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `status` | int | 在线状态码 |
| `ext_status` | int | 扩展状态码 |
| `battery_status` | int | 电量状态 |

## 示例

**请求：**

```json
{
  "action": "nc_get_user_status",
  "params": {
    "user_id": 987654321
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "status": 11,
    "ext_status": 0,
    "battery_status": 80
  },
  "echo": "1"
}
```

## 四方差异

NapCat 与 SnowLuma 实现一致，无差异。OneBot v11 标准未定义此 API。

## 相关 API

- [`set_online_status`](./set-online-status) — 设置在线状态
- [`set_diy_online_status`](./set-diy-online-status) — 设置 DIY 在线状态
- [`set_input_status`](./set-input-status) — 设置输入状态
