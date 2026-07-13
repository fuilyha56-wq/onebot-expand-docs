# rename_group_file

重命名群文件。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
插件扩展
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `group_id` | int | - | ✅ | 群号 |
| `file_id` | str | - | ✅ | 群文件 ID |
| `current_parent_directory` | str | - | ✅ | 当前所在父目录 ID |
| `new_name` | str | - | ✅ | 新文件名 |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "rename_group_file",
  "params": {
    "group_id": 123456789,
    "file_id": "/2025-01-01/abc123.txt",
    "current_parent_directory": "/",
    "new_name": "新名称.txt"
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

## 四方差异

| 平台 | 说明 |
|---|---|
| OneBot | ❌ 不支持 |
| NapCat | ✅ 支持 |
| SnowLuma | ✅ 支持 |

## 相关 API

- [`move_group_file`](./move-group-file) — 移动群文件
- [`delete_group_file`](./delete-group-file) — 删除群文件
- [`rename_group_file_folder`](./rename-group-file-folder) — 重命名群文件文件夹
- [`get_group_root_files`](./get-group-root-files) — 获取群根目录文件列表
