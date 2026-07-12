<script setup lang="ts">
/**
 * API 兼容性徽章组件。
 *
 * 以 MD3 Chip 风格展示 API 在 OneBot v11 / NapCat / SnowLuma 三方的支持状态。
 * 三态：supported（支持）/ exclusive（专属）/ unsupported（不支持）。
 */

import { computed } from 'vue'

interface Props {
  /** 协议端名称 */
  platform: 'onebot' | 'napcat' | 'snowluma'
  /** 支持状态 */
  status: 'supported' | 'exclusive' | 'unsupported'
  /** 显示标签（可选，默认按 platform 取） */
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
})

const platformLabels: Record<Props['platform'], string> = {
  onebot: 'OneBot v11',
  napcat: 'NapCat',
  snowluma: 'SnowLuma',
}

const displayLabel = computed(() => props.label || platformLabels[props.platform])

const statusConfig = {
  supported: {
    icon: '✓',
    class: 'md3-badge--supported',
  },
  exclusive: {
    icon: '★',
    class: 'md3-badge--exclusive',
  },
  unsupported: {
    icon: '✗',
    class: 'md3-badge--unsupported',
  },
} as const

const config = computed(() => statusConfig[props.status])
</script>

<template>
  <span class="md3-badge" :class="config.class">
    <span class="md3-badge__icon">{{ config.icon }}</span>
    <span class="md3-badge__label">{{ displayLabel }}</span>
  </span>
</template>

<style scoped>
.md3-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.625rem;
  border-radius: var(--md3-shape-corner-small);
  font-size: var(--md3-typescale-label-medium-size);
  font-weight: var(--md3-typescale-label-medium-weight);
  line-height: var(--md3-typescale-label-medium-line-height);
  border: 1px solid transparent;
  white-space: nowrap;
  transition: all var(--md3-motion-duration-short-3) var(--md3-motion-easing-standard);
}

.md3-badge__icon {
  font-size: 0.75rem;
  line-height: 1;
}

.md3-badge__label {
  font-family: var(--md3-typescale-font-family);
}

/* 支持 - 绿色 */
.md3-badge--supported {
  background-color: var(--md3-sys-color-success-container);
  color: var(--md3-sys-color-on-success-container);
  border-color: var(--md3-sys-color-success);
}

/* 专属 - 紫色（tertiary） */
.md3-badge--exclusive {
  background-color: var(--md3-sys-color-tertiary-container);
  color: var(--md3-sys-color-on-tertiary-container);
  border-color: var(--md3-sys-color-tertiary);
}

/* 不支持 - 红色 */
.md3-badge--unsupported {
  background-color: var(--md3-sys-color-error-container);
  color: var(--md3-sys-color-on-error-container);
  border-color: var(--md3-sys-color-error);
  opacity: 0.7;
}
</style>
