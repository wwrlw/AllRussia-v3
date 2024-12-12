import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { theme } from '@/stores/theme'

import App from './App.vue'
import router from './router'

const app = createApp(App)
document.documentElement.classList.toggle('dark-theme', theme.value === 'dark')

app.use(createPinia())
app.use(router)

app.mount('#app')
