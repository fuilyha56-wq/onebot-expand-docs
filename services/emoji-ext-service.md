# EmojiExtService

表情/收藏扩展服务。

## 基本信息

| 属性 | 值 |
|---|---|
| Service 名称 | EmojiExtService |
| 说明 | 表情/收藏扩展服务 |
| 版本 | 1.0.0 |
| 始终可用 | ✅ 是（不受 Tool 开关影响） |

## 方法列表

### fetch_custom_face

获取收藏表情。

对应 OneBot API: fetch_custom_face

`python
async def fetch_custom_face(
    self,
    count: int = 48,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| count | int | 48 | Count |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import EmojiExtService

service = EmojiExtService(plugin)
result = await service.fetch_custom_face(count=...)
`

---

### fetch_custom_face_detail

获取收藏表情详情列表（NapCat 扩展）。

对应 OneBot API: fetch_custom_face_detail

`python
async def fetch_custom_face_detail(
    self,
    count: int = 48,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| count | int | 48 | Count |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import EmojiExtService

service = EmojiExtService(plugin)
result = await service.fetch_custom_face_detail(count=...)
`

---

### add_custom_face

添加收藏表情。

对应 OneBot API: add_custom_face

`python
async def add_custom_face(
    self,
    file: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| file | str | - | File |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import EmojiExtService

service = EmojiExtService(plugin)
result = await service.add_custom_face(file=...)
`

---

### delete_custom_face

删除收藏表情。

对应 OneBot API: delete_custom_face

`python
async def delete_custom_face(
    self,
    emoji_id: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| emoji_id | str | - | Emoji id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import EmojiExtService

service = EmojiExtService(plugin)
result = await service.delete_custom_face(emoji_id=...)
`

---

### set_custom_face_desc

修改收藏表情描述（NapCat 扩展）。

对应 OneBot API: set_custom_face_desc

`python
async def set_custom_face_desc(
    self,
    emoji_id: int,
    res_id: str,
    md5: str,
    desc: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| emoji_id | int | - | Emoji id |
| res_id | str | - | Res id |
| md5 | str | - | Md5 |
| desc | str | - | Desc |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import EmojiExtService

service = EmojiExtService(plugin)
result = await service.set_custom_face_desc(emoji_id=..., res_id=..., md5=...)
`

---

### modify_custom_face

修改收藏表情备注（SnowLuma 扩展）。

对应 OneBot API: modify_custom_face

`python
async def modify_custom_face(
    self,
    emoji_id: str,
    desc: str = '',
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| emoji_id | str | - | Emoji id |
| desc | str | '' | Desc |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import EmojiExtService

service = EmojiExtService(plugin)
result = await service.modify_custom_face(emoji_id=..., desc=...)
`

---

### move_custom_face_to_front

收藏表情移到最前（SnowLuma 扩展）。

对应 OneBot API: move_custom_face_to_front

`python
async def move_custom_face_to_front(
    self,
    emoji_id: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| emoji_id | str | - | Emoji id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import EmojiExtService

service = EmojiExtService(plugin)
result = await service.move_custom_face_to_front(emoji_id=...)
`

---

### fetch_emoji_like

获取表情回应分页。

对应 OneBot API: fetch_emoji_like

`python
async def fetch_emoji_like(
    self,
    message_id: int,
    emoji_id: int = 0,
    count: int = 30,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| message_id | int | - | Message id |
| emoji_id | int | 0 | Emoji id |
| count | int | 30 | Count |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import EmojiExtService

service = EmojiExtService(plugin)
result = await service.fetch_emoji_like(message_id=..., emoji_id=..., count=...)
`

---

### get_emoji_likes

获取表情回应用户。

对应 OneBot API: get_emoji_likes

`python
async def get_emoji_likes(
    self,
    message_id: int,
    emoji_id: int,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| message_id | int | - | Message id |
| emoji_id | int | - | Emoji id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import EmojiExtService

service = EmojiExtService(plugin)
result = await service.get_emoji_likes(message_id=..., emoji_id=...)
`

---

### set_group_reaction

群聊消息表情回应（SnowLuma 扩展）。

对应 OneBot API: set_group_reaction

`python
async def set_group_reaction(
    self,
    message_id: int,
    code: str,
    group_id: int | None = None,
    is_set: bool = True,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| message_id | int | - | Message id |
| code | str | - | Code |
| group_id | int | None | None | Group id |
| is_set | bool | True | Is set |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import EmojiExtService

service = EmojiExtService(plugin)
result = await service.set_group_reaction(message_id=..., code=..., group_id=...)
`

---

### get_recommend_face

获取推荐表情（LLBot 扩展）。

对应 OneBot API: get_recommend_face

`python
async def get_recommend_face(
    self,
    word: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| word | str | - | 关键词 |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import EmojiExtService

service = EmojiExtService(plugin)
result = await service.get_recommend_face(word=...)
`

---

### unset_msg_emoji_like

取消消息表情回应（LLBot 扩展）。

对应 OneBot API: unset_msg_emoji_like

`python
async def unset_msg_emoji_like(
    self,
    message_id: int,
    emoji_id: int,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| message_id | int | - | 消息 ID |
| emoji_id | int | - | 表情 ID |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import EmojiExtService

service = EmojiExtService(plugin)
result = await service.unset_msg_emoji_like(message_id=..., emoji_id=...)
`

---

## 相关 API

- [fetch_custom_face](../api/emoji-ext/fetch-custom-face) — fetch_custom_face API 文档
- [fetch_custom_face_detail](../api/emoji-ext/fetch-custom-face-detail) — fetch_custom_face_detail API 文档
- [add_custom_face](../api/emoji-ext/add-custom-face) — add_custom_face API 文档
- [delete_custom_face](../api/emoji-ext/delete-custom-face) — delete_custom_face API 文档
- [set_custom_face_desc](../api/emoji-ext/set-custom-face-desc) — set_custom_face_desc API 文档
- [modify_custom_face](../api/emoji-ext/modify-custom-face) — modify_custom_face API 文档
- [move_custom_face_to_front](../api/emoji-ext/move-custom-face-to-front) — move_custom_face_to_front API 文档
- [fetch_emoji_like](../api/emoji-ext/fetch-emoji-like) — fetch_emoji_like API 文档
- [get_emoji_likes](../api/emoji-ext/get-emoji-likes) — get_emoji_likes API 文档
- [set_group_reaction](../api/emoji-ext/set-group-reaction) — set_group_reaction API 文档
- [get_recommend_face](../api/emoji-ext/get-recommend-face) — get_recommend_face API 文档
- [unset_msg_emoji_like](../api/emoji-ext/unset-msg-emoji-like) — unset_msg_emoji_like API 文档
