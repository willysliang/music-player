import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import { setupI18n } from './locales'

import './styles/index.scss'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

async function setupApp () {
  app.use(store)
  app.use(ElementPlus)

  await setupI18n(app)

  app.use(router)

  app.mount('#app')
}

setupApp()
