# get_private_file_url

获取私聊文件资源链接。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
插件扩展
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `user_id` | int | - | ✅ | 用户 QQ 号 |
| `file_id` | str | - | ✅ | 私聊文件 ID |
| `file_hash` | str | - | ❌ | 文件 hash，用于校验 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `url` | str | 文件下载链接 |

## 示例

**请求：**

```json
{
  "action": "get_private_file_url",
  "params": {
    "user_id": 987654321,
    "file_id": "abc123",
    "file_hash": "def456"
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "url": "https://example.com/private-file/abc123"
  },
  "echo": "1"
}
```

## 三方差异

| 平台 | 说明 |
|---|---|
| OneBot | ❌ 不支持 |
| NapCat | ✅ 支持 |
| SnowLuma | ✅ 支持 |

## 相关 API

- [`get_group_file_url`](./get-group-file-url) — 获取群文件资源链接
- [`get_group_root_files`](./get-group-root-files) — 获取群根目录文件列表
- [`trans_group_file`](./trans-group-file) — 转存群文件
