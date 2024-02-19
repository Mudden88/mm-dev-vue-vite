import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Toast from 'vue-toastification'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'vue-toastification/dist/index.css'
import './style.css'
import App from './App.vue'
import About from './components/About.vue'
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/About', component: About },
    { path: '/Projects', component: Projects },
    { path: '/Contact', component: Contact }
  ]
})


app.use(router)
app.use(Toast)
app.mount('#app')
