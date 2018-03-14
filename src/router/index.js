import Vue from 'vue'
import Router from 'vue-router'
import todoApp from '@/components/todo/todo'
import todoHeader from '@/components/header/header'
import todoFooter from '@/components/footer/footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todoApp',
      component: todoApp
    },
    {
      path: '/header',
      name: 'todoHeader',
      component: todoHeader
    },
    {
      path: '/footer',
      name: 'todoFooter',
      component: todoFooter
    }
  ]
})
