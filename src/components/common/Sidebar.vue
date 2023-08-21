<script setup lang = "ts">
    import IconDashboard from '../icons/IconDashboard.vue';   
    import IconAdmin from '../icons/IconAdmin.vue'
    import IconCategories from '../icons/IconCategories.vue'
    import IconUsers from '../icons/IconUsers.vue'
    import IconInfo from '../icons/IconInfo.vue'
    import IconAnnouncement from '../icons/IconAnnouncement.vue'        
    import IconSettings from '../icons/IconSettings.vue'        
import { RouterLink } from 'vue-router';
</script>
<template>

<aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
   <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
         <li>
            <RouterLink to="/dashboard">
               <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconDashboard></IconDashboard>
                  <span class="ml-3">Dashboard</span>
               </div>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/admins">
               <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconAdmin></IconAdmin>
                  <span class="flex-1 ml-3 whitespace-nowrap">Admins</span>
               </div>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/users">
               <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconUsers></IconUsers>
                  <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
               </div>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/categories">
               <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconCategories></IconCategories>
                  <span class="flex-1 ml-3 whitespace-nowrap">Categories</span>
               </div>
            </RouterLink>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <IconAnnouncement></IconAnnouncement>
               <span class="flex-1 ml-3 whitespace-nowrap">Announcement</span>
            </a>
         </li>
         <li>
            <RouterLink to="/info">  
               <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconInfo></IconInfo>
                  <span class="flex-1 ml-3 whitespace-nowrap">Informations</span>
               </div>
            </RouterLink>
         </li>
         <li>  
            <RouterLink to="/settings">
               <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconSettings></IconSettings>
                  <span class="flex-1 ml-3 whitespace-nowrap">Settings</span>
               </div>
         </RouterLink>
         </li>
      </ul>
   </div>
</aside>

</template>

<style>

</style>
