<template>
  <navigation-drawer
    class="m left scroll no-padding"
    v-model="entrys"
    @activeteEntry="activeteEntry"
  >
    <template #bottom>
      <button class="large circle transparent" @click="toggleTheme">
        <i>palette</i>
      </button>
    </template>
  </navigation-drawer>
  <navigation-drawer class="l drawer left" v-model="entrys" @activeteEntry="activeteEntry">
    <template #bottom>
      <button class="large circle transparent" @click="toggleTheme">
        <i>palette</i>
      </button>
    </template>
  </navigation-drawer>
  <dialog id="dialog-navigation-drawer" class="s left no-padding right-round">
    <navigation-drawer class="drawer" v-model="entrys" @close="closeDialogNavigationDrawer" />
    <div class="fixed bottom horizontal-padding small-padding">
      <button class="large circle transparent" @click="toggleTheme">
        <i>palette</i>
      </button>
      <div class="tiny-space"></div>
    </div>
  </dialog>
  <dialog id="dialog-children" class="m left no-padding">
    <nav>
      <button class="large circle transparent" @click="toggleDialogChildren">
        <i>arrow_back</i>
      </button>
      <h6>{{ activeEntry.label }}</h6>
    </nav>
    <navigation-drawer class="drawer" v-model="activeEntry.entrys" @close="toggleDialogChildren" />
  </dialog>
  <theme-dialog id="theme-dialog" @close="toggleTheme" />
  <RouterView />
</template>
<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import NavigationDrawer from './components/navigation/NavigationDrawer.vue'
import ThemeDialog from './components/ThemeDialog.vue'

const activeEntry = ref({})
const entrys = ref([
  {
    icon: 'home',
    name: 'home',
    label: 'Home',
    path: '/'
  },
  {
    icon: 'widgets',
    name: 'Produtos',
    label: 'Produtos',
    path: '/Produtos'
  },
  {
    icon: 'forms_add_on',
    name: 'Cadastros',
    label: 'Cadastros',
    entrys: [
      {
        icon: 'id_card',
        name: 'ClienteList',
        label: 'Clientes',
        path: '/ClienteList'
      }
    ]
  }
])

function toggleTheme() {
  ui('#theme-dialog')
}
function closeDialogNavigationDrawer() {
  ui('#dialog-navigation-drawer')
}
function toggleDialogChildren() {
  ui('#dialog-children')
}
function activeteEntry(entry) {
  activeEntry.value = entry
  if (entry.entrys) {
    toggleDialogChildren()
  }
}
</script>
