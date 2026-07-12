# RequestService

请求处理服务。

## 基本信息

| 属性 | 值 |
|---|---|
| Service 名称 | RequestService |
| 说明 | 请求处理服务 |
| 版本 | 1.0.0 |
| 始终可用 | ✅ 是（不受 Tool 开关影响） |

## 方法列表

### set_friend_add_request

处理好友添加请求。

对应 OneBot API: set_friend_add_request

`python
async def set_friend_add_request(
    self,
    flag: str,
    approve: bool = True,
    remark: str = '',
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| flag | str | - | Flag |
| approve | bool | True | Approve |
| remark | str | '' | Remark |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import RequestService

service = RequestService(plugin)
result = await service.set_friend_add_request(flag=..., approve=..., remark=...)
`

---

### set_group_add_request

处理加群请求。

对应 OneBot API: set_group_add_request

`python
async def set_group_add_request(
    self,
    flag: str,
    sub_type: str,
    approve: bool = True,
    reason: str = '',
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| flag | str | - | Flag |
| sub_type | str | - | Sub type |
| approve | bool | True | Approve |
| reason | str | '' | Reason |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import RequestService

service = RequestService(plugin)
result = await service.set_group_add_request(flag=..., sub_type=..., approve=...)
`

---

### get_group_system_msg

获取群系统消息。

对应 OneBot API: get_group_system_msg

`python
async def get_group_system_msg(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import RequestService

service = RequestService(plugin)
result = await service.get_group_system_msg()
`

---

### get_doubt_friends_add_request

获取可疑好友申请。

对应 OneBot API: get_doubt_friends_add_request

`python
async def get_doubt_friends_add_request(
    self,
    count: int = 20,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| count | int | 20 | Count |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import RequestService

service = RequestService(plugin)
result = await service.get_doubt_friends_add_request(count=...)
`

---

### set_doubt_friends_add_request

处理可疑好友申请。

对应 OneBot API: set_doubt_friends_add_request

`python
async def set_doubt_friends_add_request(
    self,
    flag: str,
    approve: bool = True,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| flag | str | - | Flag |
| approve | bool | True | Approve |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import RequestService

service = RequestService(plugin)
result = await service.set_doubt_friends_add_request(flag=..., approve=...)
`

---

## 相关 API

- [set_friend_add_request](../api/request/set-friend-add-request) — set_friend_add_request API 文档
- [set_group_add_request](../api/request/set-group-add-request) — set_group_add_request API 文档
- [get_group_system_msg](../api/request/get-group-system-msg) — get_group_system_msg API 文档
- [get_doubt_friends_add_request](../api/request/get-doubt-friends-add-request) — get_doubt_friends_add_request API 文档
- [set_doubt_friends_add_request](../api/request/set-doubt-friends-add-request) — set_doubt_friends_add_request API 文档
