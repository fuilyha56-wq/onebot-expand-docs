# set_friends_category

按分类 ID 或名称设置好友分类。

## 兼容性

<ApiBadge platform="onebot" status="unsupported" />
<ApiBadge platform="napcat" status="unsupported" />
<ApiBadge platform="snowluma" status="exclusive" />
<ApiBadge platform="llbot" status="unsupported" />

::: tip 来源
SnowLuma 扩展 API
:::

## 参数

| 参数名 | 类型 | 默认值 | 必填 | 说明 |
|---|---|---|---|---|
| `uin` | int | - | ✅ | 好友 QQ 号 |
| `categoryId` | int | - | 条件必填 | 分类 ID |
| `categoryName` | str | - | 条件必填 | 分类名称 |

::: warning 参数要求
`categoryId` 与 `categoryName` 必须恰好提供一个。该 action 与 LLBot 的 `set_friend_category` 参数不兼容，不是别名。
:::

## 响应

无响应数据。

## 示例

```json
{
  "action": "set_friends_category",
  "params": {
    "uin": 987654321,
    "categoryName": "同事"
  }
}
```

## 四方差异

仅 SnowLuma 支持。OneBot v11、NapCat 与 LLBot 未实现该 wire 参数版本。

## 相关 API

- [`set_friend_category`](./set-friend-category) — LLBot 参数版本
- [`get_friends_with_category`](./get-friends-with-category) — 获取分类好友列表