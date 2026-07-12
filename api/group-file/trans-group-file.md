# trans_group_file

转存群文件。

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
| `group_id` | int | - | ✅ | 群号 |
| `file_id` | str | - | ✅ | 群文件 ID |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "trans_group_file",
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

| 平台 | 说明 |
|---|---|
| OneBot | ❌ 不支持 |
| NapCat | ✅ 支持 |
| SnowLuma | ✅ 支持 |

## 相关 API

- [`get_group_file_url`](./get-group-file-url) — 获取群文件资源链接
- [`delete_group_file`](./delete-group-file) — 删除群文件
- [`move_group_file`](./move-group-file) — 移动群文件
- [`get_group_root_files`](./get-group-root-files) — 获取群根目录文件列表
