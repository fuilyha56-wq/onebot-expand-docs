# create_flash_task

创建闪传任务。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
插件扩展 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `files` | list[dict] | - | ✅ | 文件列表，每项含文件路径/URL 等信息 |
| `name` | str | - | ✅ | 任务名称 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `fileset_id` | str | 文件集 ID |

## 示例

**请求：**

```json
{
  "action": "create_flash_task",
  "params": {
    "files": [
      {
        "file": "https://example.com/file1.zip",
        "name": "file1.zip"
      },
      {
        "file": "https://example.com/file2.zip",
        "name": "file2.zip"
      }
    ],
    "name": "我的闪传任务"
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "fileset_id": "fs_abc123456"
  },
  "echo": "1"
}
```

## 四方差异

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`send_flash_msg`](./send-flash-msg) — 发送闪传消息
- [`get_flash_file_list`](./get-flash-file-list) — 获取闪传文件列表
- [`get_fileset_info`](./get-fileset-info) — 获取文件集信息
