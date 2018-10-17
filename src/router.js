import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:slide(\\d+)/:step(\\d+)',
      name: 'permalink',
      component: App,
    },
    {
      path: '/:slide(\\d+)',
      redirect: to => `/${to.params.slide}/1`,
    },
    {
      path: '*',
      redirect: '/1/1',
    },
  ]
})
