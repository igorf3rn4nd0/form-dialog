<template>
  <nav class="right-align no-space">
    <span>Registros:</span>
    <button class="small small-padding horizontal-padding transparent" style="position: relative">
      <span>{{ rowsPerPage }}</span>
      <i>arrow_drop_down</i>
      <menu id="menu-rows-per-page" style="position: absolute; top: -450px; height: 240px">
        <a
          v-for="option in rowsPerPageOptions"
          :key="option"
          :value="option"
          @click="updatePagination(option)"
          >{{ option }}</a
        >
      </menu>
    </button>
    <div class="space max"></div>
    <div>{{ startIndex + 1 }} - {{ endIndex }} de {{ totalRows }}</div>
    <button class="transparent circle small" @click="prevPage" :disabled="currentPage === 1">
      <i>chevron_left</i>
    </button>
    <button
      class="transparent circle small"
      @click="nextPage"
      :disabled="currentPage === totalPages"
    >
      <i>chevron_right</i>
    </button>
  </nav>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

const modelValue = defineModel()
const props = defineProps({
  rows: {
    type: Array,
    required: true
  },
  rowsPerPageDefault: {
    type: Number,
    default: 10
  }
})

defineExpose({ paginate })

const rowsPerPage = ref(props.rowsPerPageDefault)
const currentPage = ref(1)
const rowsPerPageOptions = [5, 10, 20, 50, 100]

const totalRows = computed(() => props.rows.length)
const totalPages = computed(() => Math.ceil(totalRows.value / rowsPerPage.value))
const startIndex = computed(() => (currentPage.value - 1) * rowsPerPage.value)
const endIndex = computed(() => Math.min(startIndex.value + rowsPerPage.value, totalRows.value))

function updatePagination(option) {
  rowsPerPage.value = option
  currentPage.value = 1
  ui('#menu-rows-per-page')
  paginate()
}
function paginate() {
  const start = (currentPage.value - 1) * rowsPerPage.value
  const end = start + rowsPerPage.value
  modelValue.value = props.rows.slice(start, end)
}
function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--
    paginate()
  }
}
function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    paginate()
  }
}

watch([() => rowsPerPage, currentPage], () => {
  paginate()
})
</script>
<style scoped>
.select-button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: var(--surface);
  border: transparent;
  outline: none;
  text-align: center;
  font-size: medium;
}
</style>
