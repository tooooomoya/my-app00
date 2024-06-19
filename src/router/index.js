import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContentsSearch from '../views/ContentsSearch.vue'
import ContentsForm from '../views/ContentsForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: ContentsSearch
  },
  {
    path: '/form',
    name: 'Form',
    component: ContentsForm
  },
  {
    path: '/:paths(.*)*',
    name: 'Fallback',
    redirect:'/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
