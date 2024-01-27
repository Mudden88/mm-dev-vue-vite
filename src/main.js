import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './style.css'
import 'bootstrap'
import App from './App.vue'
import About from './components/About.vue'
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, beforeEnter: captureRoute },
    { path: '/About', component: About, beforeEnter: captureRoute },
    { path: '/Projects', component: Projects, beforeEnter: captureRoute },
    { path: '/Contact', component: Contact, beforeEnter: captureRoute }
  ]
})

function captureRoute(to, from, next) {
  const newPath = to.path
  const oldPath = from.path

  next()

}
router.beforeEach(captureRoute)

app.use(router)
app.mount('#app')
