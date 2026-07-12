# get_group_album_media_list

获取群相册媒体列表。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
插件扩展（onebot_expand）
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `group_id` | int | - | ✅ | 群号 |
| `album_id` | str | - | ✅ | 相册 ID |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `media_list` | list[dict] | 媒体列表 |

**`media_list` 元素结构：**

| 字段 | 类型 | 说明 |
|---|---|---|
| `lloc` | str | 媒体定位标识 |
| `batch_id` | str | 批次 ID（用于点赞） |
| `url` | str | 媒体访问 URL |
| `create_time` | int | 上传时间（时间戳） |

## 示例

**请求：**

```json
{
  "action": "get_group_album_media_list",
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
  "data": {
    "media_list": [
      {
        "lloc": "media_001",
        "batch_id": "batch_001",
        "url": "https://example.com/photo1.jpg",
        "create_time": 1700000000
      }
    ]
  },
  "echo": "1"
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致，无差异。OneBot v11 标准未定义此 API。

## 相关 API

- [`get_qun_album_list`](./get-qun-album-list) — 获取群相册列表
- [`upload_image_to_qun_album`](./upload-image-to-qun-album) — 上传图片到群相册
- [`do_group_album_comment`](./do-group-album-comment) — 群相册评论
