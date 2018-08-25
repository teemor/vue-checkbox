import Vue from 'vue'
import Router from 'vue-router'
import ECheckBox from '@/components/checkbox/ECheckBox'
import MobileIndex from '@/components/mint_ui/MobileIndex'
import Hello from '@/components/Hello'
import Tab from '@/components/tab/SelectTab'
import Table from '@/components/table/Table'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello,
      children: [
        {
          path: 'Mint-UI',
          component: MobileIndex,
        },
        {
          path: '/Hello',
          component: Hello,
          children: [
            {
              path: '/Hello/Table',
              component: Table
            },
            {
              path: '/Hello/ECheckBox',
              component: ECheckBox
            }
          ]
        },
        {
          path: 'Tab',
          component: Tab
        }
      ]
    },
  ]
})
