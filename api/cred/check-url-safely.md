# check_url_safely

检查链接安全性，返回安全等级。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
插件扩展 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `url` | str | - | ✅ | 待检查的 URL |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `level` | int | 安全等级（数值越小越安全，通常 1=安全，2=可疑，3=危险） |

## 示例

**请求：**

```json
{
  "action": "check_url_safely",
  "params": {
    "url": "https://example.com"
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "level": 1
  },
  "echo": "1"
}
```

**检查可疑链接：**

```json
{
  "action": "check_url_safely",
  "params": {
    "url": "https://suspicious-site.example"
  }
}
```

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "level": 3
  },
  "echo": "1"
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`get_credentials`](./get-credentials) — 获取 QQ 接口凭证
- [`download_file`](./download-file) — 下载文件到缓存目录
- [`ocr_image`](./ocr-image) — 图片 OCR
