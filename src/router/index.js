

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Pedidos from '../views/Pedidos'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Pedidos',
    name: 'Pedidos',
    component: Pedidos
  },
  
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
