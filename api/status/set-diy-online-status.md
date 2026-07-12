# set_diy_online_status

设置 DIY 在线状态。

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
| `face_id` | int | - | ✅ | DIY 状态使用的表情 ID |
| `face_type` | int | - | ❌ | 表情类型 |
| `wording` | str | - | ✅ | DIY 状态文案 |

## 响应

无

## 示例

**请求：**

```json
{
  "action": "set_diy_online_status",
  "params": {
    "face_id": 1,
    "wording": "今天也要元气满满"
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

**请求（带表情类型）：**

```json
{
  "action": "set_diy_online_status",
  "params": {
    "face_id": 1,
    "face_type": 1,
    "wording": "今天也要元气满满"
  }
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致，无差异。OneBot v11 标准未定义此 API。

## 相关 API

- [`set_online_status`](./set-online-status) — 设置在线状态
- [`set_input_status`](./set-input-status) — 设置输入状态
- [`nc_get_user_status`](./nc-get-user-status) — 获取陌生人在线状态
