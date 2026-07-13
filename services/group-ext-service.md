# GroupExtService

群管理扩展服务。

## 基本信息

| 属性 | 值 |
|---|---|
| Service 名称 | GroupExtService |
| 说明 | 群管理扩展服务 |
| 版本 | 1.0.0 |
| 始终可用 | ✅ 是（不受 Tool 开关影响） |

## 方法列表

### set_group_portrait

设置群头像。

对应 OneBot API: set_group_portrait

`python
async def set_group_portrait(
    self,
    group_id: int,
    file: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| file | str | - | File |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupExtService

service = GroupExtService(plugin)
result = await service.set_group_portrait(group_id=..., file=...)
`

---

### set_group_remark

设置群备注。

对应 OneBot API: set_group_remark

`python
async def set_group_remark(
    self,
    group_id: int,
    remark: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| remark | str | - | Remark |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupExtService

service = GroupExtService(plugin)
result = await service.set_group_remark(group_id=..., remark=...)
`

---

### set_group_add_option

设置加群选项。

对应 OneBot API: set_group_add_option

`python
async def set_group_add_option(
    self,
    group_id: int,
    add_type: int,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| add_type | int | - | Add type |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupExtService

service = GroupExtService(plugin)
result = await service.set_group_add_option(group_id=..., add_type=...)
`

---

### set_group_search

允许群被搜索。

对应 OneBot API: set_group_search

`python
async def set_group_search(
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
from onebot_expand.services import GroupExtService

service = GroupExtService(plugin)
result = await service.set_group_search(group_id=...)
`

---

### set_group_robot_add_option

设置群机器人加群选项。

对应 OneBot API: set_group_robot_add_option

`python
async def set_group_robot_add_option(
    self,
    group_id: int,
    robot_member_switch: bool = True,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| robot_member_switch | bool | True | Robot member switch |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupExtService

service = GroupExtService(plugin)
result = await service.set_group_robot_add_option(group_id=..., robot_member_switch=...)
`

---

### set_group_kick_members

批量踢出群成员。

对应 OneBot API: set_group_kick_members

`python
async def set_group_kick_members(
    self,
    group_id: int,
    user_id_list: list[int],
    reject_add_request: bool = False,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| user_id_list | list[int] | - | User id list |
| reject_add_request | bool | False | Reject add request |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupExtService

service = GroupExtService(plugin)
result = await service.set_group_kick_members(group_id=..., user_id_list=..., reject_add_request=...)
`

---

### get_group_shut_list

获取群禁言列表。

对应 OneBot API: get_group_shut_list

`python
async def get_group_shut_list(
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
from onebot_expand.services import GroupExtService

service = GroupExtService(plugin)
result = await service.get_group_shut_list(group_id=...)
`

---

### get_group_ignored_notifies

获取被过滤的入群请求。

对应 OneBot API: get_group_ignored_notifies

`python
async def get_group_ignored_notifies(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupExtService

service = GroupExtService(plugin)
result = await service.get_group_ignored_notifies()
`

---

### get_group_ignore_add_request

获取被忽略的入群请求。

对应 OneBot API: get_group_ignore_add_request

`python
async def get_group_ignore_add_request(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupExtService

service = GroupExtService(plugin)
result = await service.get_group_ignore_add_request()
`

---

### get_group_info_ex

获取群信息扩展。

对应 OneBot API: get_group_info_ex

`python
async def get_group_info_ex(
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
from onebot_expand.services import GroupExtService

service = GroupExtService(plugin)
result = await service.get_group_info_ex(group_id=...)
`

---

### set_group_sign

群签到。

对应 OneBot API: set_group_sign

`python
async def set_group_sign(
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
from onebot_expand.services import GroupExtService

service = GroupExtService(plugin)
result = await service.set_group_sign(group_id=...)
`

---

### get_group_signed_list

获取群今日打卡列表。

对应 OneBot API: get_group_signed_list

`python
async def get_group_signed_list(
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
from onebot_expand.services import GroupExtService

service = GroupExtService(plugin)
result = await service.get_group_signed_list(group_id=...)
`

---

### batch_delete_group_member

批量删除群成员（LLBot 扩展）。

对应 OneBot API: batch_delete_group_member

`python
async def batch_delete_group_member(
    self,
    group_id: int,
    user_ids: list[int],
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | 群号 |
| user_ids | list[int] | - | 要踢出的 QQ 号列表 |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupExtService

service = GroupExtService(plugin)
result = await service.batch_delete_group_member(group_id=..., user_ids=...)
`

---

### set_group_msg_mask

设置群消息屏蔽等级（LLBot 扩展）。

对应 OneBot API: set_group_msg_mask

`python
async def set_group_msg_mask(
    self,
    group_id: int,
    mask: int,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | 群号 |
| mask | int | - | 屏蔽等级（1-4） |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupExtService

service = GroupExtService(plugin)
result = await service.set_group_msg_mask(group_id=..., mask=...)
`

---

## 相关 API

- [set_group_portrait](../api/group-ext/set-group-portrait) — set_group_portrait API 文档
- [set_group_remark](../api/group-ext/set-group-remark) — set_group_remark API 文档
- [set_group_add_option](../api/group-ext/set-group-add-option) — set_group_add_option API 文档
- [set_group_search](../api/group-ext/set-group-search) — set_group_search API 文档
- [set_group_robot_add_option](../api/group-ext/set-group-robot-add-option) — set_group_robot_add_option API 文档
- [set_group_kick_members](../api/group-ext/set-group-kick-members) — set_group_kick_members API 文档
- [get_group_shut_list](../api/group-ext/get-group-shut-list) — get_group_shut_list API 文档
- [get_group_ignored_notifies](../api/group-ext/get-group-ignored-notifies) — get_group_ignored_notifies API 文档
- [get_group_ignore_add_request](../api/group-ext/get-group-ignore-add-request) — get_group_ignore_add_request API 文档
- [get_group_info_ex](../api/group-ext/get-group-info-ex) — get_group_info_ex API 文档
- [set_group_sign](../api/group-ext/set-group-sign) — set_group_sign API 文档
- [get_group_signed_list](../api/group-ext/get-group-signed-list) — get_group_signed_list API 文档
- [batch_delete_group_member](../api/group-ext/batch-delete-group-member) — batch_delete_group_member API 文档
- [set_group_msg_mask](../api/group-ext/set-group-msg-mask) — set_group_msg_mask API 文档
