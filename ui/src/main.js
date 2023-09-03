import './assets/base.css'
import { createApp } from 'vue'
import TDesign from 'tdesign-vue-next';
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

import 'tdesign-vue-next/es/style/index.css';

import MyMessage from '@/components/MyMessage/index.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(TDesign)
app.mount('#app')

app.component('MyMessage', MyMessage)
