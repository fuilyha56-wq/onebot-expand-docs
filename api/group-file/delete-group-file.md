# delete_group_file

删除群文件。

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
| `file_id` | str | - | ✅ | 群文件 ID |
| `busid` | int | - | ❌ | 文件类型 busid |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "delete_group_file",
  "params": {
    "group_id": 123456789,
    "file_id": "/2025-01-01/abc123.txt",
    "busid": 102
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

- [`get_group_root_files`](./get-group-root-files) — 获取群根目录文件列表
- [`get_group_files_by_folder`](./get-group-files-by-folder) — 获取群子目录文件列表
- [`move_group_file`](./move-group-file) — 移动群文件
- [`rename_group_file`](./rename-group-file) — 重命名群文件
