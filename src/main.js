import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'bootstrap'
import About from './components/About.vue'
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/About', component: About },
    { path: '/Projects', component: Projects },
    { path: '/Contact', component: Contact }
  ]
})

app.use(router)
app.mount('#app')
