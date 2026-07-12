# set_qzone_msg_right

修改一条已发说说的查看权限。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="unsupported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
插件扩展（onebot_expand，SnowLuma 扩展）
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `tid` | str | - | ✅ | 说说 ID |
| `ugc_right` | int | - | ✅ | 查看权限值（如：1=所有人可见、2=仅好友可见、3=仅自己可见、4=指定人可见） |
| `target_uins` | list[int] | - | ❌ | 指定可见的用户 QQ 列表（仅 `ugc_right=4` 时有效） |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "set_qzone_msg_right",
  "params": {
    "tid": "abc123",
    "ugc_right": 4,
    "target_uins": [100012345, 100023456]
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

## 三方差异

此 API 为 SnowLuma 扩展，NapCat 不支持。OneBot v11 标准未定义此 API。

## 相关 API

- [`set_qzone_ban`](./set-qzone-ban) — 拉黑或解除拉黑某人
- [`send_qzone_msg`](./send-qzone-msg) — 发表说说
- [`delete_qzone_msg`](./delete-qzone-msg) — 删除说说
