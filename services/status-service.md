# StatusService

在线状态服务。

## 基本信息

| 属性 | 值 |
|---|---|
| Service 名称 | StatusService |
| 说明 | 在线状态服务 |
| 版本 | 1.0.0 |
| 始终可用 | ✅ 是（不受 Tool 开关影响） |

## 方法列表

### set_online_status

设置在线状态。

对应 OneBot API: set_online_status

`python
async def set_online_status(
    self,
    status: int,
    ext_status: int = 0,
    battery_status: int = 0,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| status | int | - | Status |
| ext_status | int | 0 | Ext status |
| battery_status | int | 0 | Battery status |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import StatusService

service = StatusService(plugin)
result = await service.set_online_status(status=..., ext_status=..., battery_status=...)
`

---

### set_diy_online_status

设置自定义在线状态。

对应 OneBot API: set_diy_online_status

`python
async def set_diy_online_status(
    self,
    face_id: int,
    face_type: int = 1,
    wording: str = '',
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| face_id | int | - | Face id |
| face_type | int | 1 | Face type |
| wording | str | '' | Wording |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import StatusService

service = StatusService(plugin)
result = await service.set_diy_online_status(face_id=..., face_type=..., wording=...)
`

---

### set_input_status

设置输入状态。

对应 OneBot API: set_input_status

`python
async def set_input_status(
    self,
    user_id: int,
    event_type: int,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| user_id | int | - | User id |
| event_type | int | - | Event type |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import StatusService

service = StatusService(plugin)
result = await service.set_input_status(user_id=..., event_type=...)
`

---

### nc_get_user_status

获取用户状态。

对应 OneBot API: nc_get_user_status

`python
async def nc_get_user_status(
    self,
    user_id: int,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| user_id | int | - | User id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import StatusService

service = StatusService(plugin)
result = await service.nc_get_user_status(user_id=...)
`

---

## 相关 API

- [set_online_status](../api/status/set-online-status) — set_online_status API 文档
- [set_diy_online_status](../api/status/set-diy-online-status) — set_diy_online_status API 文档
- [set_input_status](../api/status/set-input-status) — set_input_status API 文档
- [nc_get_user_status](../api/status/nc-get-user-status) — nc_get_user_status API 文档
