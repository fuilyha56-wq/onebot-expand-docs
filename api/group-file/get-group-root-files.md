# get_group_root_files

获取群根目录文件列表。

## 兼容性

<ApiBadge platform="onebot" status="supported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

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
| `files` | array | 根目录下的文件列表 |
| `folders` | array | 根目录下的文件夹列表 |

## 示例

**请求：**

```json
{
  "action": "get_group_root_files",
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
    "files": [
      {
        "file_id": "/2025-01-01/abc123.txt",
        "file_name": "说明.txt",
        "busid": 102,
        "file_size": 1024,
        "upload_time": 1735660800,
        "dead_time": 0,
        "modify_time": 1735660800,
        "download_times": 5,
        "uploader": 987654321,
        "uploader_name": "张三"
      }
    ],
    "folders": [
      {
        "folder_id": "abc123",
        "folder_name": "资料",
        "create_time": 1735660800,
        "creator": 987654321,
        "creator_name": "张三",
        "total_file_count": 10
      }
    ]
  },
  "echo": "1"
}
```

## 四方差异

四方实现一致，无差异。

## 相关 API

- [`get_group_files_by_folder`](./get-group-files-by-folder) — 获取群子目录文件列表
- [`get_group_file_system_info`](./get-group-file-system-info) — 获取群文件系统信息
- [`get_group_file_url`](./get-group-file-url) — 获取群文件资源链接
