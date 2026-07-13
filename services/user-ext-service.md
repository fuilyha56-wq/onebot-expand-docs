# UserExtService

用户信息扩展服务。

## 基本信息

| 属性 | 值 |
|---|---|
| Service 名称 | UserExtService |
| 说明 | 用户信息扩展服务 |
| 版本 | 1.0.0 |
| 始终可用 | ✅ 是（不受 Tool 开关影响） |

## 方法列表

### delete_friend

删除好友。

对应 OneBot API: delete_friend

`python
async def delete_friend(
    self,
    user_id: int,
    block: bool = False,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| user_id | int | - | User id |
| block | bool | False | Block |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import UserExtService

service = UserExtService(plugin)
result = await service.delete_friend(user_id=..., block=...)
`

---

### set_friend_remark

设置好友备注。

对应 OneBot API: set_friend_remark

`python
async def set_friend_remark(
    self,
    user_id: int,
    remark: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| user_id | int | - | User id |
| remark | str | - | Remark |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import UserExtService

service = UserExtService(plugin)
result = await service.set_friend_remark(user_id=..., remark=...)
`

---

### get_friends_with_category

获取分组好友列表。

对应 OneBot API: get_friends_with_category

`python
async def get_friends_with_category(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import UserExtService

service = UserExtService(plugin)
result = await service.get_friends_with_category()
`

---

### get_unidirectional_friend_list

获取单向好友列表。

对应 OneBot API: get_unidirectional_friend_list

`python
async def get_unidirectional_friend_list(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import UserExtService

service = UserExtService(plugin)
result = await service.get_unidirectional_friend_list()
`

---

### set_qq_profile

设置QQ资料。

对应 OneBot API: set_qq_profile

`python
async def set_qq_profile(
    self,
    nickname: str = '',
    personal_note: str = '',
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| nickname | str | '' | Nickname |
| personal_note | str | '' | Personal note |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import UserExtService

service = UserExtService(plugin)
result = await service.set_qq_profile(nickname=..., personal_note=...)
`

---

### set_qq_avatar

设置QQ头像。

对应 OneBot API: set_qq_avatar

`python
async def set_qq_avatar(
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
from onebot_expand.services import UserExtService

service = UserExtService(plugin)
result = await service.set_qq_avatar(file=...)
`

---

### set_self_longnick

设置个性签名。

对应 OneBot API: set_self_longnick

`python
async def set_self_longnick(
    self,
    long_nick: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| long_nick | str | - | Long nick |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import UserExtService

service = UserExtService(plugin)
result = await service.set_self_longnick(long_nick=...)
`

---

### get_recent_contact

获取最近联系人。

对应 OneBot API: get_recent_contact

`python
async def get_recent_contact(
    self,
    count: int = 10,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| count | int | 10 | Count |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import UserExtService

service = UserExtService(plugin)
result = await service.get_recent_contact(count=...)
`

---

### get_profile_like

获取资料点赞。

对应 OneBot API: get_profile_like

`python
async def get_profile_like(
    self,
    user_id: int,
    start: int = 0,
    count: int = 10,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| user_id | int | - | User id |
| start | int | 0 | Start |
| count | int | 10 | Count |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import UserExtService

service = UserExtService(plugin)
result = await service.get_profile_like(user_id=..., start=..., count=...)
`

---

### get_profile_like_me

获取自身被点赞列表（LLBot 扩展）。

对应 OneBot API: get_profile_like_me

`python
async def get_profile_like_me(
    self,
    start: int = 0,
    count: int = 10,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| start | int | 0 | 起始位置 |
| count | int | 10 | 每页数量 |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import UserExtService

service = UserExtService(plugin)
result = await service.get_profile_like_me(start=..., count=...)
`

---

### get_profile_like_count

获取用户点赞总数（LLBot 扩展）。

对应 OneBot API: get_profile_like_count

`python
async def get_profile_like_count(
    self,
    user_id: int,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| user_id | int | - | 用户 QQ 号 |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import UserExtService

service = UserExtService(plugin)
result = await service.get_profile_like_count(user_id=...)
`

---

### get_qq_avatar

获取 QQ 头像 URL（LLBot 扩展）。

对应 OneBot API: get_qq_avatar

`python
async def get_qq_avatar(
    self,
    user_id: int,
    group_id: int | None = None,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| user_id | int | - | 用户 QQ 号 |
| group_id | int | None | 群号（可选，用于获取群头像） |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import UserExtService

service = UserExtService(plugin)
result = await service.get_qq_avatar(user_id=..., group_id=...)
`

---

### set_friend_category

设置好友分类（LLBot 扩展）。

对应 OneBot API: set_friend_category

`python
async def set_friend_category(
    self,
    user_id: int,
    category_id: int,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| user_id | int | - | 用户 QQ 号 |
| category_id | int | - | 分类 ID |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import UserExtService

service = UserExtService(plugin)
result = await service.set_friend_category(user_id=..., category_id=...)
`

---

## 相关 API

- [delete_friend](../api/user-ext/delete-friend) — delete_friend API 文档
- [set_friend_remark](../api/user-ext/set-friend-remark) — set_friend_remark API 文档
- [get_friends_with_category](../api/user-ext/get-friends-with-category) — get_friends_with_category API 文档
- [get_unidirectional_friend_list](../api/user-ext/get-unidirectional-friend-list) — get_unidirectional_friend_list API 文档
- [set_qq_profile](../api/user-ext/set-qq-profile) — set_qq_profile API 文档
- [set_qq_avatar](../api/user-ext/set-qq-avatar) — set_qq_avatar API 文档
- [set_self_longnick](../api/user-ext/set-self-longnick) — set_self_longnick API 文档
- [get_recent_contact](../api/user-ext/get-recent-contact) — get_recent_contact API 文档
- [get_profile_like](../api/user-ext/get-profile-like) — get_profile_like API 文档
- [get_profile_like_me](../api/user-ext/get-profile-like-me) — get_profile_like_me API 文档
- [get_profile_like_count](../api/user-ext/get-profile-like-count) — get_profile_like_count API 文档
- [get_qq_avatar](../api/user-ext/get-qq-avatar) — get_qq_avatar API 文档
- [set_friend_category](../api/user-ext/set-friend-category) — set_friend_category API 文档
