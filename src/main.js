import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import breakpointsPlugin from './plugins/breakpoints'
import App from './App.vue'
import router from './router'
import 'beercss'
import 'material-dynamic-colors'

const app = createApp(App)
app.use(createPinia())
app.use(breakpointsPlugin)
app.use(router)

app.mount('#app')
