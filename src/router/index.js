import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHead from 'vue-head'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
Vue.use(VueHead)

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const Projects = () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
