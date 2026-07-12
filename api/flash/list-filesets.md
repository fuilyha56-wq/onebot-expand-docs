# list_filesets

列出当前账号所有闪传文件集（SnowLuma 扩展）。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
插件扩展 API
:::

## 参数

无

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| - | array | 文件集列表，每项含 fileset_id、名称、文件数等信息 |

## 示例

**请求：**

```json
{
  "action": "list_filesets",
  "params": {}
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": [
    {
      "fileset_id": "fs_abc123456",
      "name": "我的闪传任务",
      "file_count": 2,
      "total_size": 3072000,
      "create_time": 1752300000
    },
    {
      "fileset_id": "fs_def789012",
      "name": "另一个任务",
      "file_count": 1,
      "total_size": 512000,
      "create_time": 1752400000
    }
  ],
  "echo": "1"
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`get_fileset_info`](./get-fileset-info) — 获取文件集信息
- [`delete_flash_file`](./delete-flash-file) — 删除闪传文件
- [`rename_flash_file`](./rename-flash-file) — 重命名闪传文件
