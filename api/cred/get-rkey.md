# get_rkey

获取 Rkey（用于访问 QQ 图片/文件资源时的鉴权密钥）。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
插件扩展 API
:::

::: tip 别名
`nc_get_rkey`
:::

## 参数

无

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `rkey` | str | Rkey 字符串 |

## 示例

**请求：**

```json
{
  "action": "get_rkey",
  "params": {}
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "rkey": "CAQSKAB6JWENi5LMk0kc6lJH5YxJ0p7Qk0kc6lJH5YxJ0p7Q"
  },
  "echo": "1"
}
```

**使用别名调用：**

```json
{
  "action": "nc_get_rkey",
  "params": {}
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`get_rkey_server`](./get-rkey-server) — 获取 Rkey 服务器信息（含过期时间）
- [`get_clientkey`](./get-clientkey) — 获取 clientkey
- [`get_credentials`](./get-credentials) — 获取 QQ 接口凭证
