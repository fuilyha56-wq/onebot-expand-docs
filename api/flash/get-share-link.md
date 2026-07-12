# get_share_link

获取文件分享链接。

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
| `share_code` | str | 分享码 |

## 示例

**请求：**

```json
{
  "action": "get_share_link",
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
    "share_code": "sc_xyz789"
  },
  "echo": "1"
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`get_fileset_id`](./get-fileset-id) — 从分享码获取 fileset_id
- [`send_flash_msg`](./send-flash-msg) — 发送闪传消息
- [`get_fileset_info`](./get-fileset-info) — 获取文件集信息
