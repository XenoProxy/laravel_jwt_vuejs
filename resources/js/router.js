import { createRouter, createWebHashHistory } from 'vue-router'

// Pages
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Register from './pages/Register.vue'
import Login from './pages/Login.vue'
import Dashboard from './pages/user/Dashboard.vue'

// Routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      auth: undefined
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      auth: undefined
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      auth: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      auth: false
    }
  },
  // USER ROUTES
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      auth: true
    }
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router