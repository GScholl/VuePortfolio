import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './i18n/index.js'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(i18n).mount('#app')
