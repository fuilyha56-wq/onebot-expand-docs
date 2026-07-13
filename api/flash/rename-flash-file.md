# rename_flash_file

重命名闪传文件（SnowLuma 扩展）。

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
| `fileset_id` | str | - | ✅ | 文件集 ID |
| `new_name` | str | - | ✅ | 新名称 |

## 响应

无

## 示例

**请求：**

```json
{
  "action": "rename_flash_file",
  "params": {
    "fileset_id": "fs_abc123456",
    "new_name": "重命名后的任务"
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

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`delete_flash_file`](./delete-flash-file) — 删除闪传文件
- [`list_filesets`](./list-filesets) — 列出文件集
- [`get_fileset_info`](./get-fileset-info) — 获取文件集信息
