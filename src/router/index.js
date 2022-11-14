import { createRouter, createWebHistory } from 'vue-router'

import AerobicsView from "@/views/AerobicsView";
import AnaerobicsView from "@/views/AnaerobicsView";

const routes = [
  {
    path: '/aerobics',
    name: 'aerobics',
    component: AerobicsView
  },
  {
    path: '/anaerobics',
    name: 'anaerobics',
    component: AnaerobicsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
