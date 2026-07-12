# set_group_file_forever

设置群文件为永久文件。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="unsupported" />

::: tip 来源
LLBot 扩展
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `group_id` | int | - | ✅ | 群号 |
| `file_id` | str | - | ✅ | 群文件 ID |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "set_group_file_forever",
  "params": {
    "group_id": 123456789,
    "file_id": "/2025-01-01/abc123.txt"
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

仅 NapCat 支持（LLBot 扩展）。SnowLuma 与 OneBot v11 标准不支持此 API。

## 相关 API

- [`delete_group_file`](./delete-group-file) — 删除群文件
- [`get_group_file_url`](./get-group-file-url) — 获取群文件下载链接
- [`trans_group_file`](./trans-group-file) — 转发群文件