import { createRouter, createWebHistory } from 'vue-router'

// import HomeView from '@/views/HomeView/HomeView.vue'
import AboutView from '@/views/AboutView/AboutView.vue'
import PrivacyView from '@/views/PrivacyView/PrivacyView.vue'
// import DetailView from '@/views/DetailView/DetailView.vue'

import Layout from '@/layouts/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: "/homepage",
      children: [
        {
          path: "/homepage",
          name: "homepage",
          component: () => import("@/views/HomePage/index.vue"),
          meta: {
            title: "首页",
          },
        },
        {
          path: '/detailpage',
          name: "detailpage",
          component: () => import("@/views/DetailPage/index.vue"),
          meta: {
            title: "详情",
          },
        },
      ]
    },
    // {
    //   path: '/',
    //   component: HomeView
    // },
    {
      path: '/about',
      component: AboutView
    },
    {
      path: '/privacy',
      component: PrivacyView
    },
    // {
    //   path: '/:name',
    //   component: DetailView
    // }
  ]
})

export default router
