# PathMapperService

文件路径映射服务。

## 基本信息

| 属性 | 值 |
|---|---|
| Service 名称 | PathMapperService |
| 说明 | 文件路径映射服务 |
| 版本 | 1.0.0 |
| 始终可用 | ✅ 是（不受 Tool 开关影响） |

## 方法列表

### resolve_path

解析文件路径，根据配置的模式返回适配后的路径。

对应 OneBot API: resolve_path

`python
async def resolve_path(
    self,
    file_path: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| file_path | str | - | File path |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import PathMapperService

service = PathMapperService(plugin)
result = await service.resolve_path(file_path=...)
`

---

### to_base64

将文件转为 base64 编码字符串。

对应 OneBot API: to_base64

`python
async def to_base64(
    self,
    file_path: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| file_path | str | - | File path |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import PathMapperService

service = PathMapperService(plugin)
result = await service.to_base64(file_path=...)
`

---

### map_path

根据路径映射表转换路径。

对应 OneBot API: map_path

`python
async def map_path(
    self,
    host_path: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| host_path | str | - | Host path |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import PathMapperService

service = PathMapperService(plugin)
result = await service.map_path(host_path=...)
`

---

### get_transfer_mode

获取当前传输模式。

对应 OneBot API: get_transfer_mode

`python
async def get_transfer_mode(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import PathMapperService

service = PathMapperService(plugin)
result = await service.get_transfer_mode()
`

---

### get_available_modes

获取可用模式列表。

对应 OneBot API: get_available_modes

`python
async def get_available_modes(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import PathMapperService

service = PathMapperService(plugin)
result = await service.get_available_modes()
`

---
