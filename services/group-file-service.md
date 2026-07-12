# GroupFileService

群文件管理服务。

## 基本信息

| 属性 | 值 |
|---|---|
| Service 名称 | GroupFileService |
| 说明 | 群文件管理服务 |
| 版本 | 1.0.0 |
| 始终可用 | ✅ 是（不受 Tool 开关影响） |

## 方法列表

### get_group_file_url

获取群文件下载链接。

对应 OneBot API: get_group_file_url

`python
async def get_group_file_url(
    self,
    group_id: int,
    file_id: str,
    busid: int,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| file_id | str | - | File id |
| busid | int | - | Busid |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupFileService

service = GroupFileService(plugin)
result = await service.get_group_file_url(group_id=..., file_id=..., busid=...)
`

---

### get_group_root_files

获取群根目录文件。

对应 OneBot API: get_group_root_files

`python
async def get_group_root_files(
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
from onebot_expand.services import GroupFileService

service = GroupFileService(plugin)
result = await service.get_group_root_files(group_id=...)
`

---

### get_group_files_by_folder

获取群子目录文件。

对应 OneBot API: get_group_files_by_folder

`python
async def get_group_files_by_folder(
    self,
    group_id: int,
    folder_id: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| folder_id | str | - | Folder id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupFileService

service = GroupFileService(plugin)
result = await service.get_group_files_by_folder(group_id=..., folder_id=...)
`

---

### delete_group_file

删除群文件。

对应 OneBot API: delete_group_file

`python
async def delete_group_file(
    self,
    group_id: int,
    file_id: str,
    busid: int,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| file_id | str | - | File id |
| busid | int | - | Busid |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupFileService

service = GroupFileService(plugin)
result = await service.delete_group_file(group_id=..., file_id=..., busid=...)
`

---

### create_group_file_folder

创建群文件夹。

对应 OneBot API: create_group_file_folder

`python
async def create_group_file_folder(
    self,
    group_id: int,
    name: str,
    parent_id: str = '',
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| name | str | - | Name |
| parent_id | str | '' | Parent id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupFileService

service = GroupFileService(plugin)
result = await service.create_group_file_folder(group_id=..., name=..., parent_id=...)
`

---

### delete_group_folder

删除群文件夹。

对应 OneBot API: delete_group_folder

`python
async def delete_group_folder(
    self,
    group_id: int,
    folder_id: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| folder_id | str | - | Folder id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupFileService

service = GroupFileService(plugin)
result = await service.delete_group_folder(group_id=..., folder_id=...)
`

---

### get_group_file_system_info

获取群文件系统信息。

对应 OneBot API: get_group_file_system_info

`python
async def get_group_file_system_info(
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
from onebot_expand.services import GroupFileService

service = GroupFileService(plugin)
result = await service.get_group_file_system_info(group_id=...)
`

---

### move_group_file

移动群文件。

对应 OneBot API: move_group_file

`python
async def move_group_file(
    self,
    group_id: int,
    file_id: str,
    current_parent_directory: str,
    target_directory: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| file_id | str | - | File id |
| current_parent_directory | str | - | Current parent directory |
| target_directory | str | - | Target directory |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupFileService

service = GroupFileService(plugin)
result = await service.move_group_file(group_id=..., file_id=..., current_parent_directory=...)
`

---

### rename_group_file

重命名群文件。

对应 OneBot API: rename_group_file

`python
async def rename_group_file(
    self,
    group_id: int,
    file_id: str,
    current_parent_directory: str,
    new_name: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| file_id | str | - | File id |
| current_parent_directory | str | - | Current parent directory |
| new_name | str | - | New name |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupFileService

service = GroupFileService(plugin)
result = await service.rename_group_file(group_id=..., file_id=..., current_parent_directory=...)
`

---

### rename_group_file_folder

重命名群文件夹（SnowLuma 扩展）。

对应 OneBot API: rename_group_file_folder

`python
async def rename_group_file_folder(
    self,
    group_id: int,
    folder_id: str,
    new_folder_name: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| folder_id | str | - | Folder id |
| new_folder_name | str | - | New folder name |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupFileService

service = GroupFileService(plugin)
result = await service.rename_group_file_folder(group_id=..., folder_id=..., new_folder_name=...)
`

---

### trans_group_file

转存群文件。

对应 OneBot API: trans_group_file

`python
async def trans_group_file(
    self,
    group_id: int,
    file_id: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | Group id |
| file_id | str | - | File id |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupFileService

service = GroupFileService(plugin)
result = await service.trans_group_file(group_id=..., file_id=...)
`

---

### get_private_file_url

获取私聊文件下载链接。

对应 OneBot API: get_private_file_url

`python
async def get_private_file_url(
    self,
    user_id: int,
    file_id: str,
    file_hash: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| user_id | int | - | User id |
| file_id | str | - | File id |
| file_hash | str | - | File hash |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupFileService

service = GroupFileService(plugin)
result = await service.get_private_file_url(user_id=..., file_id=..., file_hash=...)
`

---

### set_group_file_forever

设置群文件为永久文件（LLBot 扩展）。

对应 OneBot API: set_group_file_forever

`python
async def set_group_file_forever(
    self,
    group_id: int,
    file_id: str,
) -> dict[str, Any]:
`

**参数：**

| 参数名 | 类型 | 默认值 | 说明 |
|---|---|---|---|
| group_id | int | - | 群号 |
| file_id | str | - | 群文件 ID |

**返回值：** dict[str, Any] — 适配器返回的响应字典。

**示例：**

`python
from onebot_expand.services import GroupFileService

service = GroupFileService(plugin)
result = await service.set_group_file_forever(group_id=..., file_id=...)
`

---

## 相关 API

- [get_group_file_url](../api/group-file/get-group-file-url) — get_group_file_url API 文档
- [get_group_root_files](../api/group-file/get-group-root-files) — get_group_root_files API 文档
- [get_group_files_by_folder](../api/group-file/get-group-files-by-folder) — get_group_files_by_folder API 文档
- [delete_group_file](../api/group-file/delete-group-file) — delete_group_file API 文档
- [create_group_file_folder](../api/group-file/create-group-file-folder) — create_group_file_folder API 文档
