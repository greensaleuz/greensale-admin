import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import ("../layouts/Layout.vue"),
      redirect:"/auth/login",
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
          name: "user",
          path:'users',
          component : () => import ("../views/users/UserView.vue")
        },
        {
          name: "userId",
          path:'users/:id',
          component : () => import ("../views/users/_id.vue")
        },
        {
          path:'buyerannnouncements',
          component : () => import ("../views/announcements/BuyerAnnouncementView.vue")
        },
        {
          path:'buyerinformation',
          component:()=>import ("../views/InformationAnnouncement/BuyerInfoView.vue")
        },
        {
          path:'sellerannouncements',
          component:()=> import ("../views/announcements/SellerAnnouncementView.vue")
        },
        {
          path:'sellerinformation',
          component:()=> import ("../views/InformationAnnouncement/SellerInfoView.vue")
        },
        {
          path:'storagsannouncements',
          component:()=> import ("../views/announcements/StoragesAnnouncement.vue")
        },
        {
          path:'storageinformation',
          component:()=> import ("../views/InformationAnnouncement/StorageInfoView.vue")
        },
        {
          path:'categories',
          component: () => import ("../views/categories/CategoriesView.vue")
        },
        // {
        //   path:'userinfo',
        //   component: () => import ("../views/users/UserInfoView.vue")
        // }
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

// router.beforeEach((to, from) => {
//   // ...
//   // explicitly return false to cancel the navigation
//   return false
// })
export default router