# GroupNoticeService

群公告管理服务。

## 基本信息

| 属性 | 值 |
|---|---|
| Service 名称 | GroupNoticeService |
| 说明 | 群公告管理服务 |
| 版本 | 1.0.0 |
| 始终可用 | ✅ 是（不受 Tool 开关影响） |

## 方法列表

### send_group_notice

发送群公告。

对应 OneBot API: _send_group_notice

`python
async def send_group_notice(
    self,
    group_id: int,
    content: str,
    image: str = '',
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| content | str | - | Content |
| image | str | '' | Image |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupNoticeService

service = GroupNoticeService(plugin)
result = await service.send_group_notice(group_id=..., content=..., image=...)
`

---

### get_group_notice

获取群公告。

对应 OneBot API: _get_group_notice

`python
async def get_group_notice(
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
from onebot_expand.services import GroupNoticeService

service = GroupNoticeService(plugin)
result = await service.get_group_notice(group_id=...)
`

---

### del_group_notice

删除群公告。

对应 OneBot API: _del_group_notice

`python
async def del_group_notice(
    self,
    group_id: int,
    notice_id: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| notice_id | str | - | Notice id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupNoticeService

service = GroupNoticeService(plugin)
result = await service.del_group_notice(group_id=..., notice_id=...)
`

---

## 相关 API

- [`_send_group_notice`](../api/group-notice/send-group-notice) — _send_group_notice API 文档
- [`_get_group_notice`](../api/group-notice/get-group-notice) — _get_group_notice API 文档
- [`_del_group_notice`](../api/group-notice/del-group-notice) — _del_group_notice API 文档
