# rename_group_file_folder

重命名群文件文件夹。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
SnowLuma 扩展
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `group_id` | int | - | ✅ | 群号 |
| `folder_id` | str | - | ✅ | 文件夹 ID |
| `new_folder_name` | str | - | ✅ | 新文件夹名称 |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "rename_group_file_folder",
  "params": {
    "group_id": 123456789,
    "folder_id": "abc123",
    "new_folder_name": "新文件夹名"
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

- [`create_group_file_folder`](./create-group-file-folder) — 创建群文件文件夹
- [`delete_group_folder`](./delete-group-folder) — 删除群文件文件夹
- [`rename_group_file`](./rename-group-file) — 重命名群文件
- [`get_group_root_files`](./get-group-root-files) — 获取群根目录文件列表
