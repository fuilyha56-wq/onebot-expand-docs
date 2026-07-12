<script setup lang="ts">
/**
 * API 卡片容器组件。
 *
 * 以 MD3 Card 风格展示单个 API 的完整信息：
 * action 名、分类、来源、兼容性徽章、参数表、响应表、示例代码块。
 */

import ApiBadge from './ApiBadge.vue'
import ApiTable from './ApiTable.vue'

interface CompatInfo {
  onebot: 'supported' | 'exclusive' | 'unsupported'
  napcat: 'supported' | 'exclusive' | 'unsupported'
  snowluma: 'supported' | 'exclusive' | 'unsupported'
}

interface Field {
  name: string
  type: string
  default?: string
  required?: boolean
  description: string
  level?: number
}

interface Props {
  /** action 名称 */
  action: string
  /** 中文描述 */
  title: string
  /** 分类 */
  category: string
  /** 来源 */
  source: string
  /** 兼容性信息 */
  compat: CompatInfo
  /** 别名列表 */
  aliases?: string[]
  /** 参数字段列表 */
  params?: Field[]
  /** 响应字段列表 */
  response?: Field[]
  /** 响应说明（当无具体字段时） */
  responseNote?: string
  /** 请求示例 JSON */
  requestExample?: string
  /** 响应示例 JSON */
  responseExample?: string
  /** 三方差异说明 */
  differences?: string
}

const props = withDefaults(defineProps<Props>(), {
  aliases: () => [],
  params: () => [],
  response: () => [],
  responseNote: '',
  requestExample: '',
  responseExample: '',
  differences: '',
})

const sourceLabels: Record<string, string> = {
  onebot_v11: 'OneBot v11 标准',
  napcat_ext: 'NapCat 扩展',
  gocqhttp_compat: 'go-cqhttp 兼容',
  expand: '插件扩展',
}
</script>

<template>
  <div class="md3-api-card">
    <!-- 头部：action 名 + 描述 -->
    <div class="md3-api-card__header">
      <h1 class="md3-api-card__title">
        <code class="md3-api-card__action">{{ action }}</code>
        <span class="md3-api-card__desc">{{ title }}</span>
      </h1>
      <div class="md3-api-card__meta">
        <span class="md3-api-card__category">{{ category }}</span>
        <span class="md3-api-card__source">{{ sourceLabels[source] || source }}</span>
      </div>
    </div>

    <!-- 兼容性徽章 -->
    <div class="md3-api-card__badges">
      <ApiBadge platform="onebot" :status="compat.onebot" />
      <ApiBadge platform="napcat" :status="compat.napcat" />
      <ApiBadge platform="snowluma" :status="compat.snowluma" />
    </div>

    <!-- 别名提示 -->
    <div v-if="aliases.length > 0" class="md3-api-card__aliases">
      <span class="md3-api-card__aliases-label">别名：</span>
      <code v-for="alias in aliases" :key="alias" class="md3-api-card__alias">{{ alias }}</code>
    </div>

    <!-- 参数表 -->
    <ApiTable v-if="params.length > 0" title="参数" :fields="params" />

    <!-- 响应 -->
    <div v-if="response.length > 0">
      <ApiTable title="响应数据" :fields="response" :show-default="false" :show-required="false" />
    </div>
    <div v-else-if="responseNote" class="md3-api-card__response-note">
      <div class="md3-api-card__response-note-title">响应数据</div>
      <p>{{ responseNote }}</p>
    </div>

    <!-- 示例 -->
    <div v-if="requestExample || responseExample" class="md3-api-card__examples">
      <div v-if="requestExample" class="md3-api-card__example">
        <div class="md3-api-card__example-title">请求示例</div>
      </div>
      <div v-if="responseExample" class="md3-api-card__example">
        <div class="md3-api-card__example-title">响应示例</div>
      </div>
    </div>

    <!-- 三方差异 -->
    <div v-if="differences" class="md3-api-card__differences">
      <div class="md3-api-card__differences-title">三方差异</div>
      <p>{{ differences }}</p>
    </div>
  </div>
</template>

<style scoped>
.md3-api-card {
  background-color: var(--md3-sys-color-surface-container-lowest);
  border-radius: var(--md3-shape-corner-large);
  box-shadow: var(--md3-elevation-1);
  border: 1px solid var(--md3-sys-color-outline-variant);
  padding: 1.5rem;
  margin: 1.5rem 0;
}

.md3-api-card__header {
  margin-bottom: 1rem;
}

.md3-api-card__title {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  flex-wrap: wrap;
  font-size: var(--md3-typescale-headline-small-size);
  line-height: var(--md3-typescale-headline-small-line-height);
  font-weight: var(--md3-typescale-headline-small-weight);
  margin: 0 0 0.5rem 0;
}

.md3-api-card__action {
  font-family: var(--md3-typescale-code-font-family);
  font-size: var(--md3-typescale-title-large-size);
  background-color: var(--md3-sys-color-primary-container);
  color: var(--md3-sys-color-on-primary-container);
  padding: 0.25rem 0.625rem;
  border-radius: var(--md3-shape-corner-small);
  font-weight: 500;
}

.md3-api-card__desc {
  color: var(--md3-sys-color-on-surface);
}

.md3-api-card__meta {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  font-size: var(--md3-typescale-label-medium-size);
  color: var(--md3-sys-color-on-surface-variant);
}

.md3-api-card__category,
.md3-api-card__source {
  padding: 0.125rem 0.5rem;
  border-radius: var(--md3-shape-corner-extra-small);
  background-color: var(--md3-sys-color-surface-container-high);
}

.md3-api-card__badges {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.md3-api-card__aliases {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  background-color: var(--md3-sys-color-surface-container-low);
  border-radius: var(--md3-shape-corner-medium);
  border-left: 4px solid var(--md3-sys-color-tertiary);
}

.md3-api-card__aliases-label {
  font-size: var(--md3-typescale-label-large-size);
  font-weight: var(--md3-typescale-label-large-weight);
  color: var(--md3-sys-color-on-surface-variant);
}

.md3-api-card__alias {
  font-family: var(--md3-typescale-code-font-family);
  font-size: var(--md3-typescale-body-small-size);
  background-color: var(--md3-sys-color-tertiary-container);
  color: var(--md3-sys-color-on-tertiary-container);
  padding: 0.125rem 0.375rem;
  border-radius: var(--md3-shape-corner-extra-small);
}

.md3-api-card__response-note {
  margin: 1.5rem 0;
  padding: 1rem 1.25rem;
  background-color: var(--md3-sys-color-surface-container-low);
  border-radius: var(--md3-shape-corner-medium);
  border-left: 4px solid var(--md3-sys-color-primary);
}

.md3-api-card__response-note-title,
.md3-api-card__differences-title,
.md3-api-card__example-title {
  font-size: var(--md3-typescale-title-small-size);
  font-weight: var(--md3-typescale-title-small-weight);
  color: var(--md3-sys-color-on-surface-variant);
  margin-bottom: 0.5rem;
}

.md3-api-card__examples {
  display: grid;
  gap: 1rem;
  margin: 1.5rem 0;
}

.md3-api-card__example {
  background-color: var(--md3-sys-color-surface-container);
  border-radius: var(--md3-shape-corner-medium);
  padding: 1rem;
  border: 1px solid var(--md3-sys-color-outline-variant);
}

.md3-api-card__differences {
  margin-top: 1.5rem;
  padding: 1rem 1.25rem;
  background-color: var(--md3-sys-color-warning-container);
  border-radius: var(--md3-shape-corner-medium);
  border-left: 4px solid var(--md3-sys-color-warning);
}

.md3-api-card__differences p {
  margin: 0;
  color: var(--md3-sys-color-on-warning-container);
  font-size: var(--md3-typescale-body-medium-size);
}

.md3-api-card__response-note p {
  margin: 0;
  color: var(--md3-sys-color-on-surface-variant);
}
</style>
