# GroupAlbumService

群相册服务。

## 基本信息

| 属性 | 值 |
|---|---|
| Service 名称 | GroupAlbumService |
| 说明 | 群相册服务 |
| 版本 | 1.0.0 |
| 始终可用 | ✅ 是（不受 Tool 开关影响） |

## 方法列表

### get_qun_album_list

获取群相册列表。

对应 OneBot API: get_qun_album_list

`python
async def get_qun_album_list(
    self,
    group_id: int,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupAlbumService

service = GroupAlbumService(plugin)
result = await service.get_qun_album_list(group_id=...)
`

---

### upload_image_to_qun_album

上传图片到群相册。

对应 OneBot API: upload_image_to_qun_album

`python
async def upload_image_to_qun_album(
    self,
    group_id: int,
    file: str,
    album_id: str = '',
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| file | str | - | File |
| album_id | str | '' | Album id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupAlbumService

service = GroupAlbumService(plugin)
result = await service.upload_image_to_qun_album(group_id=..., file=..., album_id=...)
`

---

### get_group_album_media_list

获取群相册媒体列表。

对应 OneBot API: get_group_album_media_list

`python
async def get_group_album_media_list(
    self,
    group_id: int,
    album_id: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| album_id | str | - | Album id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupAlbumService

service = GroupAlbumService(plugin)
result = await service.get_group_album_media_list(group_id=..., album_id=...)
`

---

### do_group_album_comment

评论群相册。

对应 OneBot API: do_group_album_comment

`python
async def do_group_album_comment(
    self,
    group_id: int,
    album_id: str,
    lloc: str,
    content: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| album_id | str | - | Album id |
| lloc | str | - | Lloc |
| content | str | - | Content |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupAlbumService

service = GroupAlbumService(plugin)
result = await service.do_group_album_comment(group_id=..., album_id=..., lloc=...)
`

---

### set_group_album_media_like

点赞群相册。

对应 OneBot API: set_group_album_media_like

`python
async def set_group_album_media_like(
    self,
    group_id: int,
    album_id: str,
    batch_id: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| album_id | str | - | Album id |
| batch_id | str | - | Batch id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupAlbumService

service = GroupAlbumService(plugin)
result = await service.set_group_album_media_like(group_id=..., album_id=..., batch_id=...)
`

---

### cancel_group_album_media_like

取消点赞群相册。

对应 OneBot API: cancel_group_album_media_like

`python
async def cancel_group_album_media_like(
    self,
    group_id: int,
    album_id: str,
    batch_id: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| album_id | str | - | Album id |
| batch_id | str | - | Batch id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupAlbumService

service = GroupAlbumService(plugin)
result = await service.cancel_group_album_media_like(group_id=..., album_id=..., batch_id=...)
`

---

### del_group_album_media

删除群相册媒体。

对应 OneBot API: del_group_album_media

`python
async def del_group_album_media(
    self,
    group_id: int,
    album_id: str,
    lloc: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| album_id | str | - | Album id |
| lloc | str | - | Lloc |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupAlbumService

service = GroupAlbumService(plugin)
result = await service.del_group_album_media(group_id=..., album_id=..., lloc=...)
`

---

## 相关 API

- [get_qun_album_list](../api/group-album/get-qun-album-list) — get_qun_album_list API 文档
- [upload_image_to_qun_album](../api/group-album/upload-image-to-qun-album) — upload_image_to_qun_album API 文档
- [get_group_album_media_list](../api/group-album/get-group-album-media-list) — get_group_album_media_list API 文档
- [do_group_album_comment](../api/group-album/do-group-album-comment) — do_group_album_comment API 文档
- [set_group_album_media_like](../api/group-album/set-group-album-media-like) — set_group_album_media_like API 文档
