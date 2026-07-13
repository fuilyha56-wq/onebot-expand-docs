# set_group_portrait

设置群头像。

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
| `group_id` | int | - | ✅ | 群号 |
| `file` | str | - | ✅ | 图片路径（支持本地路径或 URL） |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "set_group_portrait",
  "params": {
    "group_id": 123456789,
    "file": "https://example.com/avatar.png"
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

napcat 与 snowluma 实现一致，无差异。

## 相关 API

- [`set_group_remark`](./set-group-remark) — 设置群备注
- [`get_group_info_ex`](./get-group-info-ex) — 获取群扩展信息
