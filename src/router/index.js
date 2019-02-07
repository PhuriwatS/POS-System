import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main'
import NotFound from '../components/NotFound'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'MainPage', component: Main },
  { path: '*', name: 'NotFoundPage', component: NotFound }
]

export default new VueRouter({
  mode: 'history',
  routes
})
