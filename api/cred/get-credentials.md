# get_credentials

获取 QQ 接口凭证（cookies 与 csrf_token）。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
插件扩展 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `domain` | str | - | ❌ | 目标域名，不传则返回默认域名的凭证 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `cookies` | str | cookies 字符串 |
| `csrf_token` | int | CSRF 令牌 |

## 示例

**请求：**

```json
{
  "action": "get_credentials",
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
    "cookies": "uin=o0123456789; skey=@ABCDEF; p_skey=xyz123; pt4_token=token456",
    "csrf_token": 1234567890
  },
  "echo": "1"
}
```

**不指定域名：**

```json
{
  "action": "get_credentials",
  "params": {}
}
```

## 四方差异

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`get_clientkey`](./get-clientkey) — 获取 clientkey
- [`check_url_safely`](./check-url-safely) — 检查链接安全性
- [`download_file`](./download-file) — 下载文件到缓存目录
