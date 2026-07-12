# get_fileset_info

获取文件集信息。

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
| - | dict | 文件集信息，含名称、文件数、总大小、创建时间等 |

## 示例

**请求：**

```json
{
  "action": "get_fileset_info",
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
    "fileset_id": "fs_abc123456",
    "name": "我的闪传任务",
    "file_count": 2,
    "total_size": 3072000,
    "create_time": 1752300000
  },
  "echo": "1"
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`get_flash_file_list`](./get-flash-file-list) — 获取闪传文件列表
- [`list_filesets`](./list-filesets) — 列出文件集
- [`get_share_link`](./get-share-link) — 获取分享链接
