<template>
  <button class="large circle" @click="focusInput">
    <i>search</i>
    <menu class="no-wrap left min">
      <div class="field large prefix suffix no-margin fixed">
        <i class="front">arrow_back</i>
        <input ref="InputRef" class="no-elevate" placeholder="Pesquisar" v-model="modelValue" />
        <i v-if="modelValue" class="front" @click="clearInput">close</i>
      </div>
    </menu>
  </button>
</template>
<script setup>
import { ref } from 'vue'

const modelValue = defineModel()

const InputRef = ref(null)

function focusInput() {
  InputRef.value.focus()
}
function clearInput() {
  modelValue.value = ''
}
</script>
