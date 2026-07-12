# request_decrypt_key

请求数据库解密密钥（SnowLuma 扩展，传入 db_path）。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="unsupported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
SnowLuma 扩展 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `db_path` | str | - | ✅ | 数据库文件路径 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `decrypt_key` | str | 解密密钥 |

## 示例

**请求：**

```json
{
  "action": "request_decrypt_key",
  "params": {
    "db_path": "C:/SnowLuma/data/msg.db"
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "decrypt_key": "abcdef0123456789"
  },
  "echo": "1"
}
```

## 三方差异

仅 SnowLuma 支持此 API。NapCat 与 OneBot v11 标准均未定义此 API。

## 相关 API

- [`get_credentials`](./get-credentials) — 获取 QQ 接口凭证
- [`get_clientkey`](./get-clientkey) — 获取 clientkey
- [`download_file`](./download-file) — 下载文件到缓存目录
