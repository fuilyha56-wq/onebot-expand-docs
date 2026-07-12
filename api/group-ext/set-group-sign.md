# set_group_sign

群签到（别名：`send_group_sign`）。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
插件扩展（onebot_expand）
:::

::: tip 别名
`send_group_sign`
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `group_id` | int | - | ✅ | 群号 |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "set_group_sign",
  "params": {
    "group_id": 123456789
  }
}
```

**使用别名：**

```json
{
  "action": "send_group_sign",
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
  "data": null,
  "echo": "1"
}
```

## 三方差异

napcat 与 snowluma 实现一致，均支持别名 `send_group_sign`。

## 相关 API

- [`get_group_signed_list`](./get-group-signed-list) — 获取今日打卡列表
- [`get_group_info_ex`](./get-group-info-ex) — 获取群扩展信息
