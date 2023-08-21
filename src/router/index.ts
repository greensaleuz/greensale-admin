import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import("../layouts/Layout.vue"),
      children: [
        {
          path: "dashboard",
          component: ()=> import("../views/dashboard/DashboardView.vue")
        },
        {
          path: 'categories',
          component: () => import('../views/categories/CategoriesView.vue'),
        },
        {
          path: "info",
          component: ()=> import("../views/info/InfoView.vue")
        },
        {
          path: 'settings',
          component: () => import('../views/settings/SettingsView.vue'),
        },
        {
          path: "users",
          component: ()=> import("../views/users/UserView.vue")
        },
        {
          path: 'announcement',
          component: () => import('../views/announcements/AnnouncementView.vue'),
        },
        {
          path: 'admins',
          component: () => import('../views/admins/AdminsView.vue'),
        }
      ]
    },
    {
      path: "/auth",
      component: ()=>import("../layouts/AuthLayout.vue"),
      redirect: "/auth/login",
      children: [
        {
          path: "login",
          component: ()=>import("../views/auth/LoginView.vue")
        }
      ]
    }
  ]
})

export default router