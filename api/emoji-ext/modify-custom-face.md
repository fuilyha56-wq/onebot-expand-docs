# modify_custom_face

修改收藏表情。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />
<ApiBadge platform="llbot" status="supported" />

::: tip 来源
插件扩展（onebot_expand）
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `emoji_id` | str | - | ✅ | 收藏表情 ID |
| `desc` | str | - | ✅ | 描述文案 |

## 响应

无

## 示例

**请求：**

```json
{
  "action": "modify_custom_face",
  "params": {
    "emoji_id": "abc123",
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

NapCat 与 SnowLuma 实现一致，无差异。OneBot v11 标准未定义此 API。

## 相关 API

- [`set_custom_face_desc`](./set-custom-face-desc) — 设置收藏表情描述（NapCat 专属）
- [`delete_custom_face`](./delete-custom-face) — 删除收藏表情
- [`move_custom_face_to_front`](./move-custom-face-to-front) — 置顶收藏表情
