# create_group_file_folder

创建群文件文件夹。

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
| `name` | str | - | ✅ | 文件夹名称 |
| `parent_id` | str | - | ❌ | 父文件夹 ID，不填则在根目录创建 |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "create_group_file_folder",
  "params": {
    "group_id": 123456789,
    "name": "新文件夹",
    "parent_id": "abc123"
  }
}
```

**在根目录创建：**

```json
{
  "action": "create_group_file_folder",
  "params": {
    "group_id": 123456789,
    "name": "根目录文件夹"
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

四方实现一致，无差异。

## 相关 API

- [`delete_group_folder`](./delete-group-folder) — 删除群文件文件夹
- [`rename_group_file_folder`](./rename-group-file-folder) — 重命名群文件文件夹
- [`get_group_root_files`](./get-group-root-files) — 获取群根目录文件列表
- [`get_group_files_by_folder`](./get-group-files-by-folder) — 获取群子目录文件列表
