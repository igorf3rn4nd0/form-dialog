<template>
  <div class="page active">
    <header class="fixed surface">
      <nav class="small">
        <button class="s large circle transparent" @click="toggleDialogNavigationDrawer">
          <i>menu</i>
        </button>
        <h5 class="max">Produtos</h5>
        <search-input
          v-model="filters.filter"
          class="m l surface-container"
          @update:modelValue="callListar"
        />
        <search-button
          v-model="filters.filter"
          class="s surface-container"
          @update:modelValue="callListar"
        />
      </nav>
    </header>
    <main class="responsive">
      <div v-for="produto in produtos" :key="produto.name">
        <cartao-produto
          :image="produto.image"
          :name="produto.name"
          :price="produto.price"
          :description="produto.description"
        />
        <div class="space"></div>
      </div>
    </main>
  </div>
</template>
<script setup>
import CartaoProduto from '../components/CartaoProduto.vue'
import SearchInput from '../components/SearchInput.vue'
import SearchButton from '../components/SearchButton.vue'
import { listar } from '@/services/ProdutosService'
import { onBeforeMount, ref } from 'vue'

onBeforeMount(() => {
  callListar()
})

const produtos = ref([])
const filters = ref({})

function callListar() {
  listar().then((produtosApi) => {
    produtos.value = produtosApi
    if (filters.value.filter) {
      produtos.value = produtos.value.filter((p) => {
        return (
          (p.name || '').toLowerCase().includes(filters.value.filter.toLowerCase()) ||
          (p.description || '').toLowerCase().includes(filters.value.filter.toLowerCase())
        )
      })
    }
    if (filters.value.precoMin) {
      produtos.value = produtos.value.filter((p) => {
        return Number(p.price) >= filters.value.precoMin
      })
    }
    if (filters.value.precoMax) {
      produtos.value = produtos.value.filter((p) => {
        return Number(p.price) <= filters.value.precoMax
      })
    }
  })
}
function toggleDialogNavigationDrawer() {
  ui('#dialog-navigation-drawer')
}
</script>
<style></style>
