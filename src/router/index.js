import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Goals from '../views/Goals.vue'
import Food from '../views/Food.vue'

const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/Goals',
    name: 'Goals',
    component: Goals
  },
  {
    path: '/Food',
    name: 'Food',
    component: Food
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
