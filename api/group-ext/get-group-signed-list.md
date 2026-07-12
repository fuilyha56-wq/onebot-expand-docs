# get_group_signed_list

获取群今日打卡列表。

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
| `signed_list` | array[dict] | 今日打卡列表 |

## 示例

**请求：**

```json
{
  "action": "get_group_signed_list",
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
    "signed_list": [
      {
        "user_id": 10001,
        "nickname": "张三",
        "sign_time": 1720780800
      },
      {
        "user_id": 10002,
        "nickname": "李四",
        "sign_time": 1720784400
      }
    ]
  },
  "echo": "1"
}
```

## 三方差异

napcat 与 snowluma 实现一致，返回字段结构相同。

## 相关 API

- [`set_group_sign`](./set-group-sign) — 群签到
- [`get_group_info_ex`](./get-group-info-ex) — 获取群扩展信息
