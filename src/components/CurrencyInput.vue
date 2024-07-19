<template>
  <div class="field">
    <slot name="prefix"></slot>
    <input ref="inputRef" v-model="formattedValue" />
    <slot></slot>
    <slot name="suffix"></slot>
  </div>
</template>

<script setup>
import { useCurrencyInput } from 'vue-currency-input'
import { watch } from 'vue'

const props = defineProps({
  modelValue: Number,
  currency: {
    type: String,
    default: 'BRL'
  }
})
const { inputRef, formattedValue, setValue, setOptions } = useCurrencyInput({
  currency: props.currency
})

watch(
  () => props.modelValue,
  (value) => {
    setValue(value)
  }
)
watch(
  () => props.currency,
  (currency) => {
    setOptions({ currency })
  }
)
</script>
