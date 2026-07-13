# cancel_group_album_media_like

取消点赞群相册。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
插件扩展（onebot_expand）
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `group_id` | int | - | ✅ | 群号 |
| `album_id` | str | - | ✅ | 相册 ID |
| `batch_id` | str | - | ✅ | 批次 ID（从媒体列表获取） |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "cancel_group_album_media_like",
  "params": {
    "group_id": 123456789,
    "album_id": "abc123",
    "batch_id": "batch_001"
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

NapCat 与 SnowLuma 实现一致，无差异。OneBot v11 标准未定义此 API。

## 相关 API

- [`set_group_album_media_like`](./set-group-album-media-like) — 群相册点赞
- [`get_group_album_media_list`](./get-group-album-media-list) — 获取群相册媒体列表
- [`do_group_album_comment`](./do-group-album-comment) — 群相册评论
