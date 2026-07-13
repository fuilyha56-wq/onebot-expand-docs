# set_self_longnick

设置登录号大昵称。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
onebot_expand 插件扩展
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `long_nick` | str | - | ✅ | 大昵称内容 |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "set_self_longnick",
  "params": {
    "long_nick": "这是我的大昵称"
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

NapCat 与 SnowLuma 实现一致，无差异。

## 相关 API

- [`set_qq_profile`](./set-qq-profile) — 设置登录号资料
- [`set_qq_avatar`](./set-qq-avatar) — 设置登录号头像
