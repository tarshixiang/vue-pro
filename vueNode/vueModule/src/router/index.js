import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Na from '@/components/All'
import Vuex from '@/components/Vuex'
import Todolist from '@/components/Todo'
import Shopcar from '@/components/Shopcar'
import Pro from '@/components/Pro'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/nn',
      name: 'Na',
      component: Na
    },
      {
      path: '/vuex',
      name: 'vuex',
      component: Vuex
    },
     {
      path: '/todolist',
      component: Todolist
    },
    {
      path: '/shopcar',
      component: Shopcar
    },
    {
      path: '/pro',
      component: Pro
    },
    
    {
      path: '/', redirect: '/login'
    }
  ]
})
