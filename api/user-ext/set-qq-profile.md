# set_qq_profile

设置登录号资料。

## 兼容性

<ApiBadge platform="onebot" status="supported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
go-cqhttp 兼容 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `nickname` | str | - | ✅ | 昵称 |
| `personal_note` | str | - | ❌ | 个性签名 |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "set_qq_profile",
  "params": {
    "nickname": "新昵称",
    "personal_note": "这是我的个性签名"
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

- [`set_qq_avatar`](./set-qq-avatar) — 设置登录号头像
- [`set_self_longnick`](./set-self-longnick) — 设置登录号大昵称
