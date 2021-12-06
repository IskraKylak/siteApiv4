import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/css/slick.css'
import './assets/css/slick-theme.css'
import './assets/css/aos.css'
import './assets/lc/css/table.css'

const app = createApp({})
app.config.globalProperties.$http = axios;
const token = localStorage.getItem('token')
if (token) {
  app.config.globalProperties.$http.defaults.headers.common['Authorization'] = token
}
createApp(App).use(store).use(router).use(VueAxios, axios).mount('#app')
