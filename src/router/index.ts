import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import ("../layouts/Layout.vue"),
      children:[
        {
          path:'dashboard',
          component:()=> import ("../views/dashboard/DashboardView.vue")
        },
        {
          path : 'admins',
          component : () => import ("../views/admins/AdminView.vue")
        },
        {
          path:'users',
          component : () => import ("../views/users/UserView.vue")
        },
        {
          path:'buyerannnouncements',
          component:()=>import ("../views/announcements/BuyerAnnouncementView.vue")
        },
        {
          path:'sellerannouncements',
          component:()=> import ("../views/announcements/SellerAnnouncementView.vue")
        },
        {
          path:'storagsannouncements',
          component:()=> import ("../views/announcements/StoragesAnnouncement.vue")
        },
        {
          path:'categories',
          component: () => import ("../views/categories/CategoryView.vue")
        },
        {
          path:'informations',
          component: () => import ("../views/informations/InformationView.vue")
        }
      ]
    },
    {
      path : '/auth',
      component : () => import ("../layouts/AuthLayout.vue"),
      redirect:"../auth/login",
      children:
      [
        {
          path:'login',
          component: ()=> import ("../views/auth/LoginView.vue")
        }
      ]
    }
  ]
})

export default router
