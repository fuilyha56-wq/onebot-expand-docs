# set_qq_avatar

设置登录号头像。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
onebot_expand 插件扩展
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `file` | str | - | ✅ | 图片路径，支持本地路径、URL、Base64 |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "set_qq_avatar",
  "params": {
    "file": "https://example.com/avatar.png"
  }
}
```

**使用本地文件：**

```json
{
  "action": "set_qq_avatar",
  "params": {
    "file": "file:///C:/avatar.png"
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

NapCat 与 SnowLuma 实现一致，无差异。

## 相关 API

- [`set_qq_profile`](./set-qq-profile) — 设置登录号资料
- [`set_self_longnick`](./set-self-longnick) — 设置登录号大昵称
