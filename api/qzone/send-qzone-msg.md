# send_qzone_msg

发表说说。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="supported" />
<ApiBadge platform="snowluma" status="supported" />

::: tip 来源
插件扩展（onebot_expand）
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `content` | str | - | ✅ | 说说内容 |

## 响应

| 字段 | 类型 | 说明 |
|---|---|---|
| `tid` | str | 新说说的 ID |

## 示例

**请求：**

```json
{
  "action": "send_qzone_msg",
  "params": {
    "content": "今天天气真好！"
  }
}
```

**响应：**

```json
{
  "status": "ok",
  "retcode": 0,
  "data": {
    "tid": "abc123"
  },
  "echo": "1"
}
```

## 三方差异

NapCat 与 SnowLuma 实现一致，无差异。OneBot v11 标准未定义此 API。

## 相关 API

- [`get_qzone_msg_list`](./get-qzone-msg-list) — 获取QQ空间说说列表
- [`delete_qzone_msg`](./delete-qzone-msg) — 删除说说
- [`set_qzone_msg_right`](./set-qzone-msg-right) — 修改说说查看权限
