# get_cookies

获取登录账号在指定域名下的 Cookies。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
NapCat 扩展 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `domain` | str | - | ❌ | 域名，不指定时返回默认 Cookies |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `cookies` | str | Cookies 字符串 |

## 示例

**请求：**

```json
{
  "action": "get_cookies",
  "params": {
    "domain": "qun.qq.com"
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "cookies": "uin=o1000100001; skey=@HelloWorld; p_skey=abc123; pt4token=xyz789"
  },
  "echo": "1"
}
```

## 四方差异

NapCat 与 SnowLuma 实现一致，OneBot 标准不支持此 API。

## 相关 API

- [`get_csrf_token`](./get-csrf-token) — 获取 CSRF Token
