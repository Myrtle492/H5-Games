import '@/assets/style.css'

import VueLazyload from 'vue-lazyload'
import { createApp } from 'vue'
import 'element-plus/dist/index.css'

import router from '@/router'

import LinkWidget from '@/components/LinkWidget.vue'
import App from '@/App.vue'

createApp(App).use(VueLazyload).use(router).component('LinkWidget', LinkWidget).mount('#app')
