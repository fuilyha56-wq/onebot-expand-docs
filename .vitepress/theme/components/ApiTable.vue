<script setup lang="ts">
/**
 * API 参数/响应表组件。
 *
 * 以 MD3 Data Table 风格展示 API 的参数或响应字段。
 * 支持嵌套对象展开（通过 type 字段前缀的缩进表示层级）。
 */

interface Field {
  /** 字段名 */
  name: string
  /** 类型 */
  type: string
  /** 默认值（可选） */
  default?: string
  /** 是否必填 */
  required?: boolean
  /** 说明 */
  description: string
  /** 嵌套层级（0=顶层，1=二级，...） */
  level?: number
}

interface Props {
  /** 表标题 */
  title?: string
  /** 字段列表 */
  fields: Field[]
  /** 是否显示默认值列 */
  showDefault?: boolean
  /** 是否显示必填列 */
  showRequired?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  showDefault: true,
  showRequired: true,
})
</script>

<template>
  <div class="md3-api-table">
    <div v-if="title" class="md3-api-table__title">{{ title }}</div>
    <div class="md3-api-table__container">
      <table>
        <thead>
          <tr>
            <th class="col-name">参数名</th>
            <th class="col-type">类型</th>
            <th v-if="showDefault" class="col-default">默认值</th>
            <th v-if="showRequired" class="col-required">必填</th>
            <th class="col-desc">说明</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="field in fields" :key="field.name + field.level">
            <td class="col-name" :style="{ paddingLeft: `${(field.level || 0) * 1.5 + 1}rem` }">
              <span class="field-name">{{ field.name }}</span>
            </td>
            <td class="col-type">
              <code>{{ field.type }}</code>
            </td>
            <td v-if="showDefault" class="col-default">
              <span v-if="field.default" class="field-default">{{ field.default }}</span>
              <span v-else class="field-default field-default--empty">—</span>
            </td>
            <td v-if="showRequired" class="col-required">
              <span v-if="field.required" class="field-required">必填</span>
              <span v-else class="field-optional">可选</span>
            </td>
            <td class="col-desc">{{ field.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.md3-api-table {
  margin: 1.5rem 0;
}

.md3-api-table__title {
  font-size: var(--md3-typescale-title-small-size);
  font-weight: var(--md3-typescale-title-small-weight);
  color: var(--md3-sys-color-on-surface-variant);
  margin-bottom: 0.5rem;
  padding-left: 0.25rem;
}

.md3-api-table__container {
  border-radius: var(--md3-shape-corner-medium);
  overflow: hidden;
  box-shadow: var(--md3-elevation-1);
  border: 1px solid var(--md3-sys-color-outline-variant);
  background-color: var(--md3-sys-color-surface-container-lowest);
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background-color: var(--md3-sys-color-surface-container-high);
}

th {
  font-size: var(--md3-typescale-label-medium-size);
  font-weight: var(--md3-typescale-label-medium-weight);
  color: var(--md3-sys-color-on-surface-variant);
  text-align: left;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--md3-sys-color-outline-variant);
  white-space: nowrap;
}

td {
  font-size: var(--md3-typescale-body-medium-size);
  line-height: var(--md3-typescale-body-medium-line-height);
  padding: 0.625rem 1rem;
  border-bottom: 1px solid var(--md3-sys-color-outline-variant);
  vertical-align: top;
}

tbody tr:last-child td {
  border-bottom: none;
}

tbody tr:hover {
  background-color: var(--md3-sys-color-surface-container-low);
}

.col-name {
  min-width: 120px;
}

.field-name {
  font-family: var(--md3-typescale-code-font-family);
  font-size: var(--md3-typescale-body-medium-size);
  color: var(--md3-sys-color-on-surface);
  font-weight: 500;
}

.col-type code {
  font-family: var(--md3-typescale-code-font-family);
  font-size: var(--md3-typescale-body-small-size);
  background-color: var(--md3-sys-color-surface-container-high);
  color: var(--md3-sys-color-primary);
  padding: 0.125rem 0.375rem;
  border-radius: var(--md3-shape-corner-extra-small);
  font-weight: 500;
}

.col-default {
  min-width: 80px;
}

.field-default {
  font-family: var(--md3-typescale-code-font-family);
  font-size: var(--md3-typescale-body-small-size);
  color: var(--md3-sys-color-on-surface-variant);
}

.field-default--empty {
  opacity: 0.5;
}

.col-required {
  min-width: 60px;
}

.field-required {
  font-size: var(--md3-typescale-label-small-size);
  font-weight: var(--md3-typescale-label-small-weight);
  color: var(--md3-sys-color-error);
  background-color: var(--md3-sys-color-error-container);
  padding: 0.125rem 0.375rem;
  border-radius: var(--md3-shape-corner-extra-small);
}

.field-optional {
  font-size: var(--md3-typescale-label-small-size);
  font-weight: var(--md3-typescale-label-small-weight);
  color: var(--md3-sys-color-on-surface-variant);
  opacity: 0.7;
}

.col-desc {
  color: var(--md3-sys-color-on-surface-variant);
}

@media (max-width: 768px) {
  .md3-api-table__container {
    overflow-x: auto;
  }

  table {
    min-width: 500px;
  }
}
</style>
