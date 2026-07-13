# send_flash_msg

发送闪传消息。

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
| `fileset_id` | str | - | ✅ | 文件集 ID（由 `create_flash_task` 返回） |
| `user_id` | int | - | ❌ | 对方 QQ 号，发送私聊闪传消息时传入 |
| `group_id` | int | - | ❌ | 群号，发送群闪传消息时传入 |

::: tip 路由规则
`user_id` 与 `group_id` 二选一：传入 `group_id` 则发送到群聊，传入 `user_id` 则发送到私聊。
:::

## 响应

无

## 示例

**请求（发送到群聊）：**

```json
{
  "action": "send_flash_msg",
  "params": {
    "fileset_id": "fs_abc123456",
    "group_id": 123456789
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

**发送到私聊：**

```json
{
  "action": "send_flash_msg",
  "params": {
    "fileset_id": "fs_abc123456",
    "user_id": 987654321
  }
}
```

## 四方差异

NapCat 与 SnowLuma 实现一致。OneBot v11 标准未定义此 API。

## 相关 API

- [`create_flash_task`](./create-flash-task) — 创建闪传任务
- [`get_flash_file_list`](./get-flash-file-list) — 获取闪传文件列表
- [`get_share_link`](./get-share-link) — 获取分享链接
