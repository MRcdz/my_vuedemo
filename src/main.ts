import { createApp } from 'vue'
import App from './App.vue'
import router from './rooter'
import store from './store'
// import axios from 'axios'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
