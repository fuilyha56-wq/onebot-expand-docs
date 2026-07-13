# AccountService

账号与群组信息查询服务。

## 基本信息

| 属性 | 值 |
|---|---|
| Service 名称 | AccountService |
| 说明 | 账号与群组信息查询服务 |
| 版本 | 1.0.0 |
| 始终可用 | ✅ 是（不受 Tool 开关影响） |

## 方法列表

### get_login_info

获取 Bot 登录信息。

对应 OneBot API: get_login_info

`python
async def get_login_info(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import AccountService

service = AccountService(plugin)
result = await service.get_login_info()
`

---

### get_stranger_info

获取陌生人信息。

对应 OneBot API: get_stranger_info

`python
async def get_stranger_info(
    self,
    user_id: int,
    no_cache: bool = False,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| user_id | int | - | User id |
| no_cache | bool | False | No cache |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import AccountService

service = AccountService(plugin)
result = await service.get_stranger_info(user_id=..., no_cache=...)
`

---

### get_friend_list

获取好友列表。

对应 OneBot API: get_friend_list

`python
async def get_friend_list(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import AccountService

service = AccountService(plugin)
result = await service.get_friend_list()
`

---

### get_group_list

获取群列表。

对应 OneBot API: get_group_list

`python
async def get_group_list(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import AccountService

service = AccountService(plugin)
result = await service.get_group_list()
`

---

### get_group_member_list

获取群成员列表。

对应 OneBot API: get_group_member_list

`python
async def get_group_member_list(
    self,
    group_id: int,
    no_cache: bool = False,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| no_cache | bool | False | No cache |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import AccountService

service = AccountService(plugin)
result = await service.get_group_member_list(group_id=..., no_cache=...)
`

---

### get_group_member_info

获取群成员详情。

对应 OneBot API: get_group_member_info

`python
async def get_group_member_info(
    self,
    group_id: int,
    user_id: int,
    no_cache: bool = False,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| user_id | int | - | User id |
| no_cache | bool | False | No cache |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import AccountService

service = AccountService(plugin)
result = await service.get_group_member_info(group_id=..., user_id=..., no_cache=...)
`

---

### get_group_info

获取群信息。

对应 OneBot API: get_group_info

`python
async def get_group_info(
    self,
    group_id: int,
    no_cache: bool = False,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| no_cache | bool | False | No cache |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import AccountService

service = AccountService(plugin)
result = await service.get_group_info(group_id=..., no_cache=...)
`

---

### get_group_detail_info

获取群详细信息（NapCat 扩展）。

对应 OneBot API: get_group_detail_info

`python
async def get_group_detail_info(
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
from onebot_expand.services import AccountService

service = AccountService(plugin)
result = await service.get_group_detail_info(group_id=...)
`

---

### get_group_honor_info

获取群荣誉信息。

对应 OneBot API: get_group_honor_info

`python
async def get_group_honor_info(
    self,
    group_id: int,
    honor_type: str = 'all',
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| honor_type | str | 'all' | Honor type |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import AccountService

service = AccountService(plugin)
result = await service.get_group_honor_info(group_id=..., honor_type=...)
`

---

### get_robot_uin_range

获取机器人 UIN 范围（NapCat 扩展）。

对应 OneBot API: get_robot_uin_range

`python
async def get_robot_uin_range(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import AccountService

service = AccountService(plugin)
result = await service.get_robot_uin_range()
`

---

## 相关 API

- [get_login_info](../api/account/get-login-info) — get_login_info API 文档
- [get_stranger_info](../api/account/get-stranger-info) — get_stranger_info API 文档
- [get_friend_list](../api/account/get-friend-list) — get_friend_list API 文档
- [get_group_list](../api/account/get-group-list) — get_group_list API 文档
- [get_group_member_list](../api/account/get-group-member-list) — get_group_member_list API 文档
- [get_group_member_info](../api/account/get-group-member-info) — get_group_member_info API 文档
- [get_group_info](../api/account/get-group-info) — get_group_info API 文档
- [get_group_detail_info](../api/account/get-group-detail-info) — get_group_detail_info API 文档
- [get_group_honor_info](../api/account/get-group-honor-info) — get_group_honor_info API 文档
- [get_robot_uin_range](../api/account/get-robot-uin-range) — get_robot_uin_range API 文档
