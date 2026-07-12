# ArkService

Ark 分享服务。

## 基本信息

| 属性 | 值 |
|---|---|
| Service 名称 | ArkService |
| 说明 | Ark 分享服务 |
| 版本 | 1.0.0 |
| 始终可用 | ✅ 是（不受 Tool 开关影响） |

## 方法列表

### share_peer

分享用户/群Ark卡片。

对应 OneBot API: share_peer

`python
async def share_peer(
    self,
    user_id: int | None = None,
    group_id: int | None = None,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| user_id | int | None | None | User id |
| group_id | int | None | None | Group id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import ArkService

service = ArkService(plugin)
result = await service.share_peer(user_id=..., group_id=...)
`

---

### send_ark_share

分享Ark卡片。

对应 OneBot API: send_ark_share

`python
async def send_ark_share(
    self,
    user_id: int | None = None,
    group_id: int | None = None,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| user_id | int | None | None | User id |
| group_id | int | None | None | Group id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import ArkService

service = ArkService(plugin)
result = await service.send_ark_share(user_id=..., group_id=...)
`

---

### share_group_ex

分享群Ark卡片。

对应 OneBot API: share_group_ex

`python
async def share_group_ex(
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
from onebot_expand.services import ArkService

service = ArkService(plugin)
result = await service.share_group_ex(group_id=...)
`

---

### send_group_ark_share

发送群Ark分享。

对应 OneBot API: send_group_ark_share

`python
async def send_group_ark_share(
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
from onebot_expand.services import ArkService

service = ArkService(plugin)
result = await service.send_group_ark_share(group_id=...)
`

---

## 相关 API

- [share_peer](../api/ark/share-peer) — share_peer API 文档
- [send_ark_share](../api/ark/send-ark-share) — send_ark_share API 文档
- [share_group_ex](../api/ark/share-group-ex) — share_group_ex API 文档
- [send_group_ark_share](../api/ark/send-group-ark-share) — send_group_ark_share API 文档
