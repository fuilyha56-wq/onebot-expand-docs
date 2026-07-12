# 群文件管理 API

本分类包含 13 个群文件管理 API，涵盖群文件 CRUD、文件夹、转存等功能。

## API 列表

| action | 说明 | 来源 | NapCat | SnowLuma |
|---|---|---|---|---|
| [`get_group_file_url`](./get-group-file-url) | 获取群文件资源链接 | go-cqhttp | ✓ | ✓ |
| [`get_group_root_files`](./get-group-root-files) | 获取群根目录文件列表 | go-cqhttp | ✓ | ✓ |
| [`get_group_files_by_folder`](./get-group-files-by-folder) | 获取群子目录文件列表 | go-cqhttp | ✓ | ✓ |
| [`delete_group_file`](./delete-group-file) | 删除群文件 | go-cqhttp | ✓ | ✓ |
| [`create_group_file_folder`](./create-group-file-folder) | 创建群文件文件夹 | go-cqhttp | ✓ | ✓ |
| [`delete_group_folder`](./delete-group-folder) | 删除群文件文件夹 | go-cqhttp | ✓ | ✓ |
| [`get_group_file_system_info`](./get-group-file-system-info) | 获取群文件系统信息 | go-cqhttp | ✓ | ✓ |
| [`move_group_file`](./move-group-file) | 移动群文件 | Expand | ✓ | ✓ |
| [`rename_group_file`](./rename-group-file) | 重命名群文件 | Expand | ✓ | ✓ |
| [`rename_group_file_folder`](./rename-group-file-folder) | 重命名群文件文件夹 | Expand | ✓ | ✓ |
| [`trans_group_file`](./trans-group-file) | 转存群文件 | Expand | ✓ | ✓ |
| [`get_private_file_url`](./get-private-file-url) | 获取私聊文件链接 | Expand | ✓ | ✓ |
| [`set_group_file_forever`](./set-group-file-forever) | 设置群文件永久保存 | LLBot | ✓ | ✗ |
