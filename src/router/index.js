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
          path: 'MobileIndex',
          component: MobileIndex,
        },
        {
          path: 'ECheckBox',
          component: ECheckBox,
          children: [
            {
              path: 'Table',
              redirect: to => {
                'Table'
              },
              component: Table
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
