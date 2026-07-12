# EmojiService

QQNT 表情表查询服务。

## 基本信息

| 属性 | 值 |
|---|---|
| Service 名称 | EmojiService |
| 说明 | QQNT 表情表查询服务 |
| 版本 | 1.0.0 |
| 始终可用 | ✅ 是（不受 Tool 开关影响） |

## 方法列表

### get_emoji_by_id

按 emoji_id 查找表情条目。

对应 OneBot API: get_emoji_by_id

`python
async def get_emoji_by_id(
    self,
    emoji_id: int,
    table_type: str = 'send',
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| emoji_id | int | - | Emoji id |
| table_type | str | 'send' | Table type |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import EmojiService

service = EmojiService(plugin)
result = await service.get_emoji_by_id(emoji_id=..., table_type=...)
`

---

### get_emoji_by_name

按名称/关键词模糊查找表情条目。

对应 OneBot API: get_emoji_by_name

`python
async def get_emoji_by_name(
    self,
    name: str,
    table_type: str = 'send',
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| name | str | - | Name |
| table_type | str | 'send' | Table type |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import EmojiService

service = EmojiService(plugin)
result = await service.get_emoji_by_name(name=..., table_type=...)
`

---

### get_all_emojis

获取指定表的全部表情列表。

对应 OneBot API: get_all_emojis

`python
async def get_all_emojis(
    self,
    table_type: str = 'send',
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| table_type | str | 'send' | Table type |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import EmojiService

service = EmojiService(plugin)
result = await service.get_all_emojis(table_type=...)
`

---

### get_all_emoji_ids

获取指定表的全部表情 ID 列表。

对应 OneBot API: get_all_emoji_ids

`python
async def get_all_emoji_ids(
    self,
    table_type: str = 'send',
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| table_type | str | 'send' | Table type |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import EmojiService

service = EmojiService(plugin)
result = await service.get_all_emoji_ids(table_type=...)
`

---

### is_emoji_enabled

检查指定表情 ID 是否启用。

对应 OneBot API: is_emoji_enabled

`python
async def is_emoji_enabled(
    self,
    emoji_id: int,
    table_type: str = 'send',
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| emoji_id | int | - | Emoji id |
| table_type | str | 'send' | Table type |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import EmojiService

service = EmojiService(plugin)
result = await service.is_emoji_enabled(emoji_id=..., table_type=...)
`

---

### get_enabled_emojis

获取已启用的表情列表。

对应 OneBot API: get_enabled_emojis

`python
async def get_enabled_emojis(
    self,
    table_type: str = 'send',
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| table_type | str | 'send' | Table type |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import EmojiService

service = EmojiService(plugin)
result = await service.get_enabled_emojis(table_type=...)
`

---
