# delete_group_folder

删除群文件文件夹。

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
| `folder_id` | str | - | ✅ | 文件夹 ID |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "delete_group_folder",
  "params": {
    "group_id": 123456789,
    "folder_id": "abc123"
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
| OneBot | 支持 action `delete_group_folder` |
| NapCat | 支持 action `delete_group_folder` |
| SnowLuma | 同时支持别名 `delete_group_file_folder` |

::: tip 别名
SnowLuma 同时支持 `delete_group_file_folder` 作为本 API 的别名。
:::

## 相关 API

- [`create_group_file_folder`](./create-group-file-folder) — 创建群文件文件夹
- [`rename_group_file_folder`](./rename-group-file-folder) — 重命名群文件文件夹
- [`get_group_root_files`](./get-group-root-files) — 获取群根目录文件列表
- [`get_group_files_by_folder`](./get-group-files-by-folder) — 获取群子目录文件列表
