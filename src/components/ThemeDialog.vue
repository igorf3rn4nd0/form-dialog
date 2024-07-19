<template>
  <dialog class="right">
    <nav>
      <h5 class="max">Tema</h5>
      <button class="large circle transparent" @click="close">
        <i>close</i>
      </button>
    </nav>
    <nav class="horizontal-padding">
      <button class="circle large" :style="'background: ' + baseColor">
        <input type="color" style="cursor: pointer;" v-model="baseColor" />
      </button>
      <button class="large circle border" @click="toggleDark">
        <i>{{ iconTheme }}</i>
      </button>
    </nav>

    <nav class="right-align">
      <button @click="aplyTheme">
        <i>check</i>
        <span>Aplicar</span>
      </button>
    </nav>
  </dialog>
</template>
<script setup>
import { ref } from 'vue'
const baseColor = ref('')
const iconTheme = ref('dark_mode')
const emit = defineEmits(['close'])
function toggleDark() {
  ui('mode', ui('mode') === 'dark' ? 'light' : 'dark')
  iconTheme.value = ui('mode') === 'dark' ? 'light_mode' : 'dark_mode'
}
function aplyTheme() {
  ui('theme', baseColor.value)
}
function close() {
  emit('close')
}
</script>
