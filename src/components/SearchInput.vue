<template>
  <div class="field prefix round">
    <i class="front">search</i>
    <input v-model="modelValue" class="no-elevate" placeholder="Pesquisar"/>
    <i v-if="modelValue" class="front surface-container" @click="modelValue = ''">close</i>
  </div>
</template>
<script setup>
const modelValue = defineModel()
</script>
