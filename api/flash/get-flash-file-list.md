# get_flash_file_list

获取闪传文件列表。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
插件扩展 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `fileset_id` | str | - | ✅ | 文件集 ID |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `files` | array | 文件列表，每项含文件名、大小等信息 |

## 示例

**请求：**

```json
{
  "action": "get_flash_file_list",
  "params": {
    "fileset_id": "fs_abc123456"
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
        "file_name": "file1.zip",
        "file_size": 1024000,
        "file_url": "https://example.com/file1.zip"
      },
      {
        "file_name": "file2.zip",
        "file_size": 2048000,
        "file_url": "https://example.com/file2.zip"
      }
    ]
  },
  "echo": "1"
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`get_flash_file_url`](./get-flash-file-url) — 获取闪传文件 URL
- [`get_fileset_info`](./get-fileset-info) — 获取文件集信息
- [`create_flash_task`](./create-flash-task) — 创建闪传任务
