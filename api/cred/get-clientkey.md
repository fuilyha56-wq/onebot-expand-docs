# get_clientkey

获取 clientkey（用于访问 QQ 接口时的鉴权凭证）。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
插件扩展 API
:::

## 参数

无

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `clientkey` | str | clientkey 字符串 |

## 示例

**请求：**

```json
{
  "action": "get_clientkey",
  "params": {}
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "clientkey": "A1B2C3D4E5F6G7H8"
  },
  "echo": "1"
}
```

## 四方差异

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`get_credentials`](./get-credentials) — 获取 QQ 接口凭证（cookies + csrf_token）
- [`get_rkey`](./get-rkey) — 获取 Rkey
- [`get_rkey_server`](./get-rkey-server) — 获取 Rkey 服务器信息
