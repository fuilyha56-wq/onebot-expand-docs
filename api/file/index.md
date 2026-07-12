# 文件操作 API

本分类包含 16 个文件操作 API，涵盖群/私聊文件上传、图片/语音获取、在线文件、流式传输等功能。

## API 列表

| action | 说明 | 来源 | NapCat | SnowLuma |
|---|---|---|---|---|
| [`upload_group_file`](./upload-group-file) | 上传群文件 | OB11 | ✓ | ✓ |
| [`upload_private_file`](./upload-private-file) | 上传私聊文件 | OB11 | ✓ | ✓ |
| [`get_file`](./get-file) | 获取文件信息 | NapCat | ✓ | ✓ |
| [`get_image`](./get-image) | 获取图片 | OB11 | ✓ | ✓ |
| [`get_record`](./get-record) | 获取语音 | OB11 | ✓ | ✓ |
| [`send_online_file`](./send-online-file) | 发送在线文件 | NapCat | ✓ | ✗ |
| [`send_online_folder`](./send-online-folder) | 发送在线文件夹 | NapCat | ✓ | ✗ |
| [`get_online_file_msg`](./get-online-file-msg) | 获取在线文件消息 | NapCat | ✓ | ✗ |
| [`receive_online_file`](./receive-online-file) | 接收在线文件 | NapCat | ✓ | ✗ |
| [`refuse_online_file`](./refuse-online-file) | 拒绝在线文件 | NapCat | ✓ | ✗ |
| [`cancel_online_file`](./cancel-online-file) | 取消在线文件 | NapCat | ✓ | ✗ |
| [`clean_stream_temp_file`](./clean-stream-temp-file) | 清理流式临时文件 | Expand | ✓ | ✓ |
| [`upload_file_stream`](./upload-file-stream) | 流式上传文件 | Expand | ✓ | ✓ |
| [`download_file_stream`](./download-file-stream) | 流式下载文件 | Expand | ✓ | ✓ |
| [`download_file_record_stream`](./download-file-record-stream) | 流式下载语音 | Expand | ✓ | ✓ |
| [`download_file_image_stream`](./download-file-image-stream) | 流式下载图片 | Expand | ✓ | ✓ |
