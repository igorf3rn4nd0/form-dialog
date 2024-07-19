<template>
  <currency-input
    v-if="props.type === 'currency'"
    :class="'label ' + props.class"
    v-model="modelValue"
  >
    <template #prefix>
      <slot name="prefix"></slot>
    </template>
    <label>{{ props.label }}</label>
    <template v-if="!props.loading" #suffix>
      <slot name="suffix"></slot>
    </template>
    <progress v-if="props.loading" class="circle"></progress>
  </currency-input>
  <div v-if="props.type !== 'currency'" :class="fieldClass + props.class">
    <slot name="prefix"></slot>
    <input v-if="props.type !== 'select'" :type="props.type" v-model="modelValue" />
    <select v-else v-model="modelValue">
      <option
        v-for="(option, index) in props.options"
        :key="index"
        :value="props.emitValue ? option.value : option"
        class="row wave"
      >
        {{ option[props.optionLabel] }}
      </option>
    </select>
    <label>{{ props.label }}</label>
    <i v-if="props.type === 'select' && !props.loading && !props.hideDropDown">arrow_drop_down</i>
    <i v-if="props.type === 'date'">calendar_today </i>
    <i v-if="props.type === 'time'">schedule </i>
    <slot v-if="!props.loading" name="suffix"></slot>
    <progress v-else class="circle"></progress>
    <slot></slot>
  </div>
</template>
<script setup>
import CurrencyInput from '../CurrencyInput.vue'
import { computed } from 'vue'

const modelValue = defineModel()
const props = defineProps({
  label: String,
  type: String,
  class: String,
  optionLabel: {
    type: String,
    default: 'label'
  },
  optionValue: {
    type: String,
    default: 'value'
  },
  loading: Boolean,
  hideDropDown: Boolean,
  emitValue: {
    type: Boolean,
    default: true
  },
  options: Array
})

const fieldClass = computed(() => {
  let defaultClass = 'field label '
  if (props.type === 'date' || props.type === 'time') {
    defaultClass += 'suffix '
  }
  return defaultClass
})
</script>
