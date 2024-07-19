<template>
  <div class="active">
    <header class="s fixed top surface" style="z-index: 20">
      <nav>
        <button class="large circle transparent" @click="toggleDialogNavigationDrawer">
          <i>menu</i>
        </button>
        <h5 class="s max">Clientes</h5>
      </nav>
    </header>
    <main class="responsive">
      <table-list
        :flat="!$breakpoints.greater('s').value"
        selection="multiple"
        :columns="columns"
        v-model:rows="rowsPaginated"
        v-model:selected-rows="selectedRows"
        @sort="sortChenged"
      >
        <template #header>
          <nav class="vertical-padding">
            <div class="m l row max">
              <h5>Clientes</h5>
            </div>
            <search-input class="m l surface-container" />
            <search-input class="s surface-container max" />
          </nav>
        </template>
        <template #footer>
          <pagination-footer ref="PaginationFooterRef" v-model="rowsPaginated" :rows="rows" />
        </template>
      </table-list>
      <nav class="right-align">
        <button
          class="extend square round small-elevate primary-container"
          @click="$router.push('/ClienteForm')"
        >
          <i>add</i>
          <span>Novo</span>
        </button>
      </nav>
    </main>
  </div>
</template>
<script setup>
import TableList from '../components/TableList.vue'
import SearchInput from '../components/SearchInput.vue'
import PaginationFooter from '../components/PaginationFooter.vue'
import { onMounted, ref } from 'vue'

const rowsPaginated = ref([])
const rows = ref([
  { nome: 'João', idade: 18, id: 1 },
  { nome: 'Cleber', idade: 18, id: 2 },
  { nome: 'Maria', idade: 18, id: 3 },
  { nome: 'Joaquina', idade: 18, id: 4 },
  { nome: 'Fabio', idade: 18, id: 5 },
  { nome: 'Ícaro', idade: 18, id: 6 },
  { nome: 'Igor', idade: 18, id: 7 },
  { nome: 'Sylvia', idade: 18, id: 8 },
  { nome: 'Julia', idade: 18, id: 9 },
  { nome: 'Marina', idade: 18, id: 10 },
  { nome: 'Marcelo', idade: 18, id: 11 },
  { nome: 'William', idade: 18, id: 12 },
  { nome: 'David', idade: 18, id: 13 }
])
const columns = ref([
  {
    name: 'nome',
    class: 'left-align',
    headerClass: 'left-align',
    label: 'Nome',
    field: 'nome',
    sortable: true
  },
  {
    name: 'idade',
    class: 'center-align',
    headerClass: 'center-align',
    footerClass: 'center-align',
    label: 'Idade',
    field: 'idade',
    sortable: false
  }
])
const selectedRows = ref([])
const PaginationFooterRef = ref(null)

onMounted(() => {
  PaginationFooterRef.value.paginate()
})

function toggleDialogNavigationDrawer() {
  ui('#dialog-navigation-drawer')
}
function sortChenged(column) {
  if (!column.direction) {
    column.direction = 'asc'
  } else if (column.direction === 'asc') {
    column.direction = 'desc'
  } else {
    delete column.direction
  }
  console.log('sort: ', column.direction)
}
</script>
