import Vue from 'vue'
import Router from 'vue-router'
import SelfSignUp from '@/components/SelfSignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SelfSignUp',
      component: SelfSignUp
    }
  ]
})
