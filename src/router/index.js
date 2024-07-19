import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Produtos',
      name: 'Produtos',
      component: () => import('../page/ProdutosPage.vue')
    },
    {
      path: '/ClienteList',
      name: 'ClienteList',
      component: () => import('../page/ClienteList.vue')
    },
    {
      path: '/ClienteForm',
      name: 'ClienteForm',
      component: () => import('../page/ClienteForm.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../page/HomePage.vue')
    }
  ]
})

export default router
