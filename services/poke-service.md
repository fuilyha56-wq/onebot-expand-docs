# PokeService

戳一拍服务。

## 基本信息

| 属性 | 值 |
|---|---|
| Service 名称 | PokeService |
| 说明 | 戳一拍服务 |
| 版本 | 1.0.0 |
| 始终可用 | ✅ 是（不受 Tool 开关影响） |

## 方法列表

### friend_poke

好友戳一戳。

对应 OneBot API: friend_poke

`python
async def friend_poke(
    self,
    user_id: int,
    target_id: int | None = None,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| user_id | int | - | User id |
| target_id | int | None | None | Target id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import PokeService

service = PokeService(plugin)
result = await service.friend_poke(user_id=..., target_id=...)
`

---

### group_poke

群戳一戳。

对应 OneBot API: group_poke

`python
async def group_poke(
    self,
    group_id: int,
    user_id: int,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| user_id | int | - | User id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import PokeService

service = PokeService(plugin)
result = await service.group_poke(group_id=..., user_id=...)
`

---

## 相关 API

- [friend_poke](../api/poke/friend-poke) — friend_poke API 文档
- [group_poke](../api/poke/group-poke) — group_poke API 文档
