# GroupService

群管理操作服务。

## 基本信息

| 属性 | 值 |
|---|---|
| Service 名称 | GroupService |
| 说明 | 群管理操作服务 |
| 版本 | 1.0.0 |
| 始终可用 | ✅ 是（不受 Tool 开关影响） |

## 方法列表

### kick

踢出群成员。

对应 OneBot API: set_group_kick

`python
async def kick(
    self,
    group_id: int,
    user_id: int,
    reject_add_request: bool = False,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| user_id | int | - | User id |
| reject_add_request | bool | False | Reject add request |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupService

service = GroupService(plugin)
result = await service.kick(group_id=..., user_id=..., reject_add_request=...)
`

---

### ban

禁言群成员。

对应 OneBot API: set_group_ban

`python
async def ban(
    self,
    group_id: int,
    user_id: int,
    duration: int = 1800,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| user_id | int | - | User id |
| duration | int | 1800 | Duration |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupService

service = GroupService(plugin)
result = await service.ban(group_id=..., user_id=..., duration=...)
`

---

### anonymous_ban

禁言匿名群成员。

对应 OneBot API: set_group_anonymous_ban

`python
async def anonymous_ban(
    self,
    group_id: int,
    anonymous: dict[str, Any] | None = None,
    anonymous_flag: str | None = None,
    duration: int = 1800,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| anonymous | dict[str, Any] | None | None | Anonymous |
| anonymous_flag | str | None | None | Anonymous flag |
| duration | int | 1800 | Duration |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupService

service = GroupService(plugin)
result = await service.anonymous_ban(group_id=..., anonymous=..., anonymous_flag=...)
`

---

### whole_ban

全体禁言。

对应 OneBot API: set_group_whole_ban

`python
async def whole_ban(
    self,
    group_id: int,
    enable: bool = True,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| enable | bool | True | Enable |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupService

service = GroupService(plugin)
result = await service.whole_ban(group_id=..., enable=...)
`

---

### set_admin

设置/取消群管理员。

对应 OneBot API: set_group_admin

`python
async def set_admin(
    self,
    group_id: int,
    user_id: int,
    enable: bool = True,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| user_id | int | - | User id |
| enable | bool | True | Enable |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupService

service = GroupService(plugin)
result = await service.set_admin(group_id=..., user_id=..., enable=...)
`

---

### set_anonymous

开启/关闭匿名聊天。

对应 OneBot API: set_group_anonymous

`python
async def set_anonymous(
    self,
    group_id: int,
    enable: bool = True,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| enable | bool | True | Enable |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupService

service = GroupService(plugin)
result = await service.set_anonymous(group_id=..., enable=...)
`

---

### set_card

设置群名片。

对应 OneBot API: set_group_card

`python
async def set_card(
    self,
    group_id: int,
    user_id: int,
    card: str = '',
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| user_id | int | - | User id |
| card | str | '' | Card |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupService

service = GroupService(plugin)
result = await service.set_card(group_id=..., user_id=..., card=...)
`

---

### set_group_name

设置群名。

对应 OneBot API: set_group_name

`python
async def set_group_name(
    self,
    group_id: int,
    group_name: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| group_name | str | - | Group name |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupService

service = GroupService(plugin)
result = await service.set_group_name(group_id=..., group_name=...)
`

---

### leave

退出群聊。

对应 OneBot API: set_group_leave

`python
async def leave(
    self,
    group_id: int,
    is_dismiss: bool = False,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| is_dismiss | bool | False | Is dismiss |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupService

service = GroupService(plugin)
result = await service.leave(group_id=..., is_dismiss=...)
`

---

### set_special_title

设置专属头衔。

对应 OneBot API: set_group_special_title

`python
async def set_special_title(
    self,
    group_id: int,
    user_id: int,
    special_title: str = '',
    duration: int = -1,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| user_id | int | - | User id |
| special_title | str | '' | Special title |
| duration | int | -1 | Duration |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupService

service = GroupService(plugin)
result = await service.set_special_title(group_id=..., user_id=..., special_title=...)
`

---

## 相关 API

- [set_group_kick](../api/group/set-group-kick) — set_group_kick API 文档
- [set_group_ban](../api/group/set-group-ban) — set_group_ban API 文档
- [set_group_anonymous_ban](../api/group/set-group-anonymous-ban) — set_group_anonymous_ban API 文档
- [set_group_whole_ban](../api/group/set-group-whole-ban) — set_group_whole_ban API 文档
- [set_group_admin](../api/group/set-group-admin) — set_group_admin API 文档
- [set_anonymous](../api/group/set-group-anonymous) — set_anonymous API 文档
- [set_card](../api/group/set-group-card) — set_card API 文档
- [set_group_name](../api/group/set-group-name) — set_group_name API 文档
- [leave](../api/group/set-group-leave) — leave API 文档
- [set_special_title](../api/group/set-group-special-title) — set_special_title API 文档
