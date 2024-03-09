import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import messages from '@intlify/unplugin-vue-i18n/messages'
import icon from '@/components/icons/icon.vue'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  availableLocales: ['en', 'nl'],
  messages: messages
})

const app = createApp(App)

// importing our new icon component globally
app.component('icon', icon)

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
