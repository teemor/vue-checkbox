import Vue from 'vue'
import Router from 'vue-router'
import DCheckBox from '@/components/DCheckBox'
import ECheckBox from '@/components/ECheckBox'
import Example from '@/components/Example'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'ECheckBox',
      component: ECheckBox
    },
    {
      path: '/',
      name: 'DCheckBox',
      component: DCheckBox
    },
    {
      path: '/',
      name: 'Example',
      component: Example
    },
  ]
})
