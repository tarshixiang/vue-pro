import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ErrorPage from '@/components/ErrorPage'


Vue.use(Router)

export default new Router({
   mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'*',
      component:ErrorPage
    }
  ]
})
