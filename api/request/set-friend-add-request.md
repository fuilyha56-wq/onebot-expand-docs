# set_friend_add_request

处理加好友请求。

## 兼容性

<ApiBadge platform="onebot" status="supported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
OneBot v11 标准 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `flag` | str | - | ✅ | 好友请求的 flag（从请求事件中获取） |
| `approve` | bool | true | ❌ | 是否同意请求 |
| `remark` | str | - | ❌ | 好友备注名 |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "set_friend_add_request",
  "params": {
    "flag": "123456789",
    "approve": true,
    "remark": "小明"
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

四方实现一致，无差异。

## 相关 API

- [`set_group_add_request`](./set-group-add-request) — 处理加群请求
- [`get_group_system_msg`](./get-group-system-msg) — 获取群系统消息
