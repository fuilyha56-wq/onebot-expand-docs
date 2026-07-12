# get_qun_album_list

获取群相册列表。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
插件扩展（onebot_expand）
:::

::: tip 别名
`get_group_album_list`
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `group_id` | int | - | ✅ | 群号 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `album_list` | list[dict] | 相册列表 |

**`album_list` 元素结构：**

| 字段 | 类型 | 说明 |
|---|---|---|
| `album_id` | str | 相册 ID |
| `album_name` | str | 相册名称 |
| `album_create_time` | int | 相册创建时间（时间戳） |
| `album_update_time` | int | 相册更新时间（时间戳） |
| `album_total` | int | 相册内媒体数量 |

## 示例

**请求：**

```json
{
  "action": "get_qun_album_list",
  "params": {
    "group_id": 123456789
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "album_list": [
      {
        "album_id": "abc123",
        "album_name": "群相册",
        "album_create_time": 1700000000,
        "album_update_time": 1700000000,
        "album_total": 12
      }
    ]
  },
  "echo": "1"
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致，无差异。OneBot v11 标准未定义此 API。

## 相关 API

- [`upload_image_to_qun_album`](./upload-image-to-qun-album) — 上传图片到群相册
- [`get_group_album_media_list`](./get-group-album-media-list) — 获取群相册媒体列表
- [`do_group_album_comment`](./do-group-album-comment) — 群相册评论
