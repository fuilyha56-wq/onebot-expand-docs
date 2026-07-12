# FlashService

闪传服务。

## 基本信息

| 属性 | 值 |
|---|---|
| Service 名称 | FlashService |
| 说明 | 闪传服务 |
| 版本 | 1.0.0 |
| 始终可用 | ✅ 是（不受 Tool 开关影响） |

## 方法列表

### create_flash_task

创建闪传任务。

对应 OneBot API: create_flash_task

`python
async def create_flash_task(
    self,
    files: list[dict[str, Any]],
    name: str = '',
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| files | list[dict[str, Any]] | - | Files |
| name | str | '' | Name |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FlashService

service = FlashService(plugin)
result = await service.create_flash_task(files=..., name=...)
`

---

### send_flash_msg

发送闪传消息。

对应 OneBot API: send_flash_msg

`python
async def send_flash_msg(
    self,
    fileset_id: str,
    user_id: int | None = None,
    group_id: int | None = None,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| fileset_id | str | - | Fileset id |
| user_id | int | None | None | User id |
| group_id | int | None | None | Group id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FlashService

service = FlashService(plugin)
result = await service.send_flash_msg(fileset_id=..., user_id=..., group_id=...)
`

---

### get_flash_file_list

获取闪传文件列表。

对应 OneBot API: get_flash_file_list

`python
async def get_flash_file_list(
    self,
    fileset_id: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| fileset_id | str | - | Fileset id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FlashService

service = FlashService(plugin)
result = await service.get_flash_file_list(fileset_id=...)
`

---

### get_flash_file_url

获取闪传文件URL。

对应 OneBot API: get_flash_file_url

`python
async def get_flash_file_url(
    self,
    fileset_id: str,
    file_name: str = '',
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| fileset_id | str | - | Fileset id |
| file_name | str | '' | File name |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FlashService

service = FlashService(plugin)
result = await service.get_flash_file_url(fileset_id=..., file_name=...)
`

---

### get_share_link

获取文件分享链接。

对应 OneBot API: get_share_link

`python
async def get_share_link(
    self,
    fileset_id: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| fileset_id | str | - | Fileset id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FlashService

service = FlashService(plugin)
result = await service.get_share_link(fileset_id=...)
`

---

### download_fileset

下载文件集。

对应 OneBot API: download_fileset

`python
async def download_fileset(
    self,
    fileset_id: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| fileset_id | str | - | Fileset id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FlashService

service = FlashService(plugin)
result = await service.download_fileset(fileset_id=...)
`

---

### get_fileset_info

获取文件集信息。

对应 OneBot API: get_fileset_info

`python
async def get_fileset_info(
    self,
    fileset_id: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| fileset_id | str | - | Fileset id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FlashService

service = FlashService(plugin)
result = await service.get_fileset_info(fileset_id=...)
`

---

### get_fileset_id

从分享码获取fileset_id。

对应 OneBot API: get_fileset_id

`python
async def get_fileset_id(
    self,
    share_code: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| share_code | str | - | Share code |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FlashService

service = FlashService(plugin)
result = await service.get_fileset_id(share_code=...)
`

---

### list_filesets

列出所有闪传文件集（SnowLuma 扩展）。

对应 OneBot API: list_filesets

`python
async def list_filesets(
    self,
) -> dict[str, Any]:
`

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FlashService

service = FlashService(plugin)
result = await service.list_filesets()
`

---

### delete_flash_file

删除闪传文件（SnowLuma 扩展）。

对应 OneBot API: delete_flash_file

`python
async def delete_flash_file(
    self,
    fileset_id: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| fileset_id | str | - | Fileset id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FlashService

service = FlashService(plugin)
result = await service.delete_flash_file(fileset_id=...)
`

---

### rename_flash_file

重命名闪传文件（SnowLuma 扩展）。

对应 OneBot API: rename_flash_file

`python
async def rename_flash_file(
    self,
    fileset_id: str,
    new_name: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| fileset_id | str | - | Fileset id |
| new_name | str | - | New name |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FlashService

service = FlashService(plugin)
result = await service.rename_flash_file(fileset_id=..., new_name=...)
`

---

### get_flash_file_download_urls

获取闪传文件下载 URL 列表（LLBot 扩展）。

对应 OneBot API: get_flash_file_download_urls

`python
async def get_flash_file_download_urls(
    self,
    fileset_id: str,
    share_link: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| fileset_id | str | - | 文件集 ID（与 `share_link` 二选一） |
| share_link | str | - | 分享链接（与 `fileset_id` 二选一） |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FlashService

service = FlashService(plugin)
result = await service.get_flash_file_download_urls(fileset_id=..., share_link=...)
`

---

### upload_flash_file

上传闪传文件（LLBot 扩展）。

对应 OneBot API: upload_flash_file

`python
async def upload_flash_file(
    self,
    title: str,
    paths: list[str],
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| title | str | - | 文件集标题 |
| paths | list[str] | - | 本地文件路径列表 |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FlashService

service = FlashService(plugin)
result = await service.upload_flash_file(title=..., paths=...)
`

---

### reshare_flash_file

重新分享闪传文件（LLBot 扩展）。

对应 OneBot API: reshare_flash_file

`python
async def reshare_flash_file(
    self,
    fileset_id: str,
    share_link: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| fileset_id | str | - | 文件集 ID（与 `share_link` 二选一） |
| share_link | str | - | 分享链接（与 `fileset_id` 二选一） |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import FlashService

service = FlashService(plugin)
result = await service.reshare_flash_file(fileset_id=..., share_link=...)
`

---

## 相关 API

- [create_flash_task](../api/flash/create-flash-task) — create_flash_task API 文档
- [send_flash_msg](../api/flash/send-flash-msg) — send_flash_msg API 文档
- [get_flash_file_list](../api/flash/get-flash-file-list) — get_flash_file_list API 文档
- [get_flash_file_url](../api/flash/get-flash-file-url) — get_flash_file_url API 文档
- [get_share_link](../api/flash/get-share-link) — get_share_link API 文档
