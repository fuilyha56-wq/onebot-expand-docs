# download_fileset

下载文件集。

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

## 响应

无

## 示例

**请求：**

```json
{
  "action": "download_fileset",
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
  "data": null,
  "echo": "1"
}
```

## 四方差异

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`get_flash_file_url`](./get-flash-file-url) — 获取闪传文件 URL
- [`get_flash_file_list`](./get-flash-file-list) — 获取闪传文件列表
- [`get_fileset_info`](./get-fileset-info) — 获取文件集信息
