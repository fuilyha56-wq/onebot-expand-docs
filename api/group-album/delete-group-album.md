# delete_group_album

删除群相册。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="unsupported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
LLBot 扩展
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `group_id` | int | - | ✅ | 群号 |
| `album_id` | str | - | ✅ | 相册 ID |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "delete_group_album",
  "params": {
    "group_id": 123456789,
    "album_id": "abc123"
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

仅 NapCat 支持（LLBot 扩展）。SnowLuma 与 OneBot v11 标准不支持此 API。

## 相关 API

- [`create_group_album`](./create-group-album) — 创建群相册
- [`get_qun_album_list`](./get-qun-album-list) — 获取群相册列表
- [`del_group_album_media`](./del-group-album-media) — 删除群相册媒体