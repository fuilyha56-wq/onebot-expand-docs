# get_group_file_system_info

获取群文件系统信息。

## 兼容性

<ApiBadge platform="onebot" status="supported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
go-cqhttp 兼容
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `group_id` | int | - | ✅ | 群号 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `file_count` | int | 当前群文件数量 |
| `limit_count` | int | 群文件数量上限 |
| `used_space` | int | 已使用空间（字节） |
| `total_space` | int | 总空间（字节） |

## 示例

**请求：**

```json
{
  "action": "get_group_file_system_info",
  "params": {
    "group_id": 123456789
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "file_count": 50,
    "limit_count": 10000,
    "used_space": 524288000,
    "total_space": 8589934592
  },
  "echo": "1"
}
```

## 三方差异

三方实现一致，无差异。

## 相关 API

- [`get_group_root_files`](./get-group-root-files) — 获取群根目录文件列表
- [`get_group_files_by_folder`](./get-group-files-by-folder) — 获取群子目录文件列表
- [`get_group_file_url`](./get-group-file-url) — 获取群文件资源链接
