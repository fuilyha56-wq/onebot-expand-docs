# GroupTodoService

群待办服务。

## 基本信息

| 属性 | 值 |
|---|---|
| Service 名称 | GroupTodoService |
| 说明 | 群待办服务 |
| 版本 | 1.0.0 |
| 始终可用 | ✅ 是（不受 Tool 开关影响） |

## 方法列表

### set_group_todo

设置群待办。

对应 OneBot API: set_group_todo

`python
async def set_group_todo(
    self,
    group_id: int,
    message_id: int,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| message_id | int | - | Message id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupTodoService

service = GroupTodoService(plugin)
result = await service.set_group_todo(group_id=..., message_id=...)
`

---

### complete_group_todo

完成群待办。

对应 OneBot API: complete_group_todo

`python
async def complete_group_todo(
    self,
    group_id: int,
    message_id: int,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| message_id | int | - | Message id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupTodoService

service = GroupTodoService(plugin)
result = await service.complete_group_todo(group_id=..., message_id=...)
`

---

### cancel_group_todo

取消群待办。

对应 OneBot API: cancel_group_todo

`python
async def cancel_group_todo(
    self,
    group_id: int,
    message_id: int,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| message_id | int | - | Message id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupTodoService

service = GroupTodoService(plugin)
result = await service.cancel_group_todo(group_id=..., message_id=...)
`

---

## 相关 API

- [set_group_todo](../api/group-todo/set-group-todo) — set_group_todo API 文档
- [complete_group_todo](../api/group-todo/complete-group-todo) — complete_group_todo API 文档
- [cancel_group_todo](../api/group-todo/cancel-group-todo) — cancel_group_todo API 文档
