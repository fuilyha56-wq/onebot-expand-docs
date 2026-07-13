# set_custom_face_desc

设置收藏表情描述。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="exclusive" />
<ApiBadge platform="snowluma" status="unsupported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
插件扩展（onebot_expand）
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `emoji_id` | int | - | ✅ | 收藏表情 ID |
| `res_id` | str | - | ✅ | 表情资源 ID |
| `md5` | str | - | ✅ | 表情文件 MD5 |
| `desc` | str | - | ✅ | 描述文案 |

## 响应

无

## 示例

**请求：**

```json
{
  "action": "set_custom_face_desc",
  "params": {
    "emoji_id": 1,
    "res_id": "res_abc123",
    "md5": "d41d8cd98f00b204e9800998ecf8427e",
    "desc": "可爱表情包"
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": null,
  "echo": "1"
}
```

## 四方差异

此 API 为 NapCat 专属，SnowLuma 不支持。OneBot v11 标准未定义此 API。

## 相关 API

- [`fetch_custom_face_detail`](./fetch-custom-face-detail) — 获取收藏表情详情
- [`modify_custom_face`](./modify-custom-face) — 修改收藏表情
- [`move_custom_face_to_front`](./move-custom-face-to-front) — 置顶收藏表情
