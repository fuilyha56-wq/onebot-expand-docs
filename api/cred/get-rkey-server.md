# get_rkey_server

获取 Rkey 服务器信息（含过期时间和服务器名）。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
插件扩展 API
:::

## 参数

无

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `rkey` | str | Rkey 字符串 |
| `expire_time` | int | Rkey 过期时间（Unix 时间戳，秒） |
| `server_name` | str | 服务器名称 |

## 示例

**请求：**

```json
{
  "action": "get_rkey_server",
  "params": {}
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "rkey": "CAQSKAB6JWENi5LMk0kc6lJH5YxJ0p7Qk0kc6lJH5YxJ0p7Q",
    "expire_time": 1752300000,
    "server_name": "rkey-server-01"
  },
  "echo": "1"
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`get_rkey`](./get-rkey) — 获取 Rkey
- [`get_clientkey`](./get-clientkey) — 获取 clientkey
- [`get_credentials`](./get-credentials) — 获取 QQ 接口凭证
