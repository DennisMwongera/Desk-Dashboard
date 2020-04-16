import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* css*/
import '../assets/css/style.css'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/Tickets',
    component: Layout,
    redirect: '/Tickets/Tickets',
    name: 'Tickets',
    meta: { title: 'Tickets', icon: 'ticket' },
    children: [
      {
        path: 'NewTicket',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'New Ticket', icon: '' }
      },
      {
        path: 'List',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'List', icon: '' }
      },
      {
        path: 'Categories',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Categories', icon: '' }
      },
      {
        path: 'sub-Categories',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Sub-Categories', icon: '' }
      },
      {
        path: 'priorities',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Priority', icon: '' }
      },
      {
        path: 'severities',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Severity', icon: '' }
      },
      {
        path: 'status',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Status', icon: '' }
      },
      {
        path: 'sources',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Sources', icon: '' }
      }
    ]
  },
  {
    path: '/User',
    component: Layout,
    redirect: '/User/user',
    name: 'User',
    meta: { title: 'User', icon: 'user' },
    children: [
      {
        path: 'Create Contact',
        name: 'Create_Contact',
        component: () => import('@/views/table/index'),
        meta: { title: 'Create Contact', icon: '' }
      },
      {
        path: 'assign',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Assign', icon: '' }
      },
      {
        path: 'departments',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Departments', icon: '' }
      },
      {
        path: 'roles',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Roles', icon: '' }
      },
      {
        path: 'permissions',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Permissions', icon: '' }
      }
    ]
  },
  {
    path: '/Contacts',
    component: Layout,
    redirect: '/Contacts/contacts',
    name: 'User',
    meta: { title: 'Contacts', icon: 'phone-call' },
    children: [
      {
        path: 'Create Contact',
        name: 'Create_Contact',
        component: () => import('@/views/table/index'),
        meta: { title: 'Create Contact', icon: '' }
      },
      {
        path: 'List',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'List', icon: '' }
      }
    ]
  },
  {
    path: '/SMS',
    component: Layout,
    redirect: '/sms/sms',
    name: 'SMS',
    meta: { title: 'SMS', icon: 'message' },
    children: [
      {
        path: 'Reports',
        name: 'Reports',
        component: () => import('@/views/table/index'),
        meta: { title: 'Reports', icon: '' }
      },
      {
        path: 'Received',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Received', icon: '' }
      },
      {
        path: 'Scheduled',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Scheduled', icon: '' }
      },
      {
        path: 'Bulk SMS',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Bulk SMS', icon: '' }
      },
      {
        path: 'Templates',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Templates', icon: '' }
      }
    ]
  },
  {
    path: '/Mails',
    component: Layout,
    redirect: '/mails/mails',
    name: 'Mails',
    meta: { title: 'Mails', icon: 'email' },
    children: [
      {
        path: 'Reports',
        name: 'Reports',
        component: () => import('@/views/table/index'),
        meta: { title: 'Reports', icon: '' }
      },
      {
        path: 'Scheduled',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Scheduled', icon: '' }
      },
      {
        path: 'Bulk SMS',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Bulk SMS', icon: '' }
      },
      {
        path: 'Templates',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Templates', icon: '' }
      }
    ]
  },
  {
    path: '/FAQs',
    component: Layout,
    redirect: '/faqs/faqs',
    name: 'FAQs',
    meta: { title: 'FAQs', icon: 'faqs' },
    children: [
      {
        path: 'List',
        name: 'List',
        component: () => import('@/views/table/index'),
        meta: { title: 'List', icon: '' }
      },
      {
        path: 'Create FAQs',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Create', icon: '' }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
