
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layouts/index.vue'
import HomePage from '@/views/HomePage/index.vue'
import DetailPage from '@/views/DetailPage/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/',        // 不再跳 /homepage
      children: [
        {
          path: '/',
          name: 'homepage',
          component: HomePage,
          meta: { title: '首页' },
        },
        {
          path: '/detailpage',
          name: 'detailpage',
          component: DetailPage,
          meta: { title: '详情' },
        },
      ],
    },

    // 先移除 About / Privacy（等你有页面再加）
    // {
    //   path: '/about',
    //   component: () => import('@/views/AboutView/index.vue'),
    // },
    // {
    //   path: '/privacy',
    //   component: () => import('@/views/PrivacyView/index.vue'),
    // },

    // 兜底：未知路径跳回首页
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

export default router
