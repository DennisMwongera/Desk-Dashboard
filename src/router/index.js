import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

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
    meta: { title: 'Tickets', icon: 'example' },
    children: [
      {
        path: 'New Ticket',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'New Ticket', icon: 'table' }
      },
      {
        path: 'List',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'List', icon: 'tree' }
      },
      {
        path: 'Categories',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Castegories', icon: 'tree' }
      },
      {
        path: 'sub-Categories',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Sub-Categories', icon: 'tree' }
      },
      {
        path: 'priorities',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Priority', icon: 'tree' }
      },
      {
        path: 'severities',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Severity', icon: 'tree' }
      },
      {
        path: 'status',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Status', icon: 'tree' }
      },
      {
        path: 'sources',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Sources', icon: 'tree' }
      }
    ]
  },
  {
    path: '/User',
    component: Layout,
    redirect: '/User/user',
    name: 'User',
    meta: { title: 'User', icon: 'tree' },
    children: [
      {
        path: 'Create Contact',
        name: 'Create_Contact',
        component: () => import('@/views/table/index'),
        meta: { title: 'Create Contact', icon: 'tree' }
      },
      {
        path: 'assign',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Assign', icon: 'tree' }
      },
      {
        path: 'departments',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Departments', icon: 'tree' }
      },
      {
        path: 'roles',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Roles', icon: 'tree' }
      },
      {
        path: 'permissions',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Permissions', icon: 'tree' }
      } 
      ]
  },
  {
    path: '/Contacts',
    component: Layout,
    redirect: '/Contacts/contacts',
    name: 'User',
    meta: { title: 'Contacts', icon: 'tree' },
    children: [
      {
        path: 'Create Contact',
        name: 'Create_Contact',
        component: () => import('@/views/table/index'),
        meta: { title: 'Create Contact', icon: 'tree' }
      },
      {
        path: 'List',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'List', icon: 'tree' }
      }
    ]
  },
  {
    path: '/SMS',
    component: Layout,
    redirect: '/sms/sms',
    name: 'SMS',
    meta: { title: 'SMS', icon: 'tree' },
    children: [
      {
        path: 'Reports',
        name: 'Reports',
        component: () => import('@/views/table/index'),
        meta: { title: 'Reports', icon: 'tree' }
      },
      {
        path: 'Received',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Received', icon: 'tree' }
      },
      {
        path: 'Scheduled',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Scheduled', icon: 'tree' }
      },
      {
        path: 'Bulk SMS',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Bulk SMS', icon: 'tree' }
      },
      {
        path: 'Templates',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Templates', icon: 'tree' }
      }
    ]
  },
  {
    path: '/Mails',
    component: Layout,
    redirect: '/mails/mails',
    name: 'Mails',
    meta: { title: 'Mails', icon: 'tree' },
    children: [
      {
        path: 'Reports',
        name: 'Reports',
        component: () => import('@/views/table/index'),
        meta: { title: 'Reports', icon: 'tree' }
      },
      {
        path: 'Scheduled',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Scheduled', icon: 'tree' }
      },
      {
        path: 'Bulk SMS',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Bulk SMS', icon: 'tree' }
      },
      {
        path: 'Templates',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Templates', icon: 'tree' }
      }
    ]
  },
  {
    path: '/FAQs',
    component: Layout,
    redirect: '/faqs/faqs',
    name: 'FAQs',
    meta: { title: 'FAQs', icon: 'tree' },
    children: [
      {
        path: 'List',
        name: 'List',
        component: () => import('@/views/table/index'),
        meta: { title: 'List', icon: 'tree' }
      },
      {
        path: 'Create FAQs',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Create', icon: 'tree' }
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
