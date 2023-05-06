import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TaipeiView from '../views/TaipeiView.vue'
import TaichungView from '../views/TaichungView.vue'
import TainanView from '../views/TainanView.vue'
import KaohsiungView from '../views/KaohsiungView.vue'
import AddView from '../views/AddView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Taipei',
      name: 'Taipei',
      component: TaipeiView
    },
    {
      path: '/Taichung',
      name: 'Taichung',
      component: TaichungView
    },
    {
      path: '/Tainan',
      name: 'Tainan',
      component: TainanView
    },
    {
      path: '/Kaohsiung',
      name: 'Kaohsiung',
      component: KaohsiungView
    },
    {
      path: '/Add',
      name: 'Add',
      component: AddView
    },
  ]
})

export default router
