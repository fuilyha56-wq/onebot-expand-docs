# like_qzone

给说说点赞。

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
| `tid` | str | - | ✅ | 说说 ID |
| `target_uin` | int | - | ✅ | 说说发布者 QQ |

## 响应

无响应数据。

## 示例

**请求：**

```json
{
  "action": "like_qzone",
  "params": {
    "tid": "abc123",
    "target_uin": 100012345
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

- [`unlike_qzone`](./unlike-qzone) — 取消点赞
- [`comment_qzone`](./comment-qzone) — 评论说说
- [`get_qzone_feeds`](./get-qzone-feeds) — 获取QQ空间好友动态
