# create_group_album

创建群相册。

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
| `name` | str | - | ✅ | 相册名称 |
| `desc` | str | - | ❌ | 相册描述 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `album_id` | str | 相册 ID |
| `owner` | int | 创建者 QQ 号 |
| `name` | str | 相册名称 |
| `desc` | str | 相册描述 |

## 示例

**请求：**

```json
{
  "action": "create_group_album",
  "params": {
    "group_id": 123456789,
    "name": "我的相册",
    "desc": "群活动照片"
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "album_id": "abc123",
    "owner": 123456789,
    "name": "我的相册",
    "desc": "群活动照片"
  },
  "echo": "1"
}
```

## 四方差异

仅 NapCat 支持（LLBot 扩展）。SnowLuma 与 OneBot v11 标准不支持此 API。

## 相关 API

- [`delete_group_album`](./delete-group-album) — 删除群相册
- [`get_qun_album_list`](./get-qun-album-list) — 获取群相册列表
- [`upload_image_to_qun_album`](./upload-image-to-qun-album) — 上传图片到群相册