import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Tables from '@/views/Tables'

import Components from '@/views/Components'
import Development from '@/views/Development'

// import Development from '@/components/Development'
import Contacts from '@/views/Contacts'

// Views - Pages
import Page404 from '@/views/pages/Page404'
import Page500 from '@/views/pages/Page500'
import Login from '@/views/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      href: '#googtrans(en|en)',
      path: '/',
      redirect: '/tables',
      name: 'Home',
      component: Full,
      children: [
        {
          href: '#googtrans(en|en)',
          path: '/tables',
          name: 'Tables',
          component: Tables
        },
        {
          path: '/contacts',
          name: 'Contacts',
          component: Contacts
        },
        {
          path: '/components',
          name: 'Components',
          component: Components
        },
        {
          path: '/development',
          name: 'Development',
          component: Development
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/p404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        }
      ]
    }
  ]
})
