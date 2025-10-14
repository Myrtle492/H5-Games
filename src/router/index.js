import { createRouter, createWebHistory } from 'vue-router'

// 页面组件导入（如果路径不同，请根据你项目实际情况调整）
import Layout from '@/layouts/index.vue'
import AboutView from '@/views/AboutView/index.vue'
import PrivacyView from '@/views/PrivacyView/index.vue'
import DetailPage from '@/views/DetailPage/index.vue'
import HomePage from '@/views/HomePage/index.vue'

// 创建路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/',  // ✅ 主页跳转修正
      children: [
        {
          path: '/',
          name: 'homepage',
          component: HomePage,
          meta: {
            title: '首页',
          },
        },
        {
          path: '/detailpage',
          name: 'detailpage',
          component: DetailPage,
          meta: {
            title: '详情',
          },
        },
      ],
    },
    {
      path: '/about',
      component: AboutView,
    },
    {
      path: '/privacy',
      component: PrivacyView,
    },
    // ✅ 404 自动跳回首页
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router
