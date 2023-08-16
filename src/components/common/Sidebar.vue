<script setup lang="ts">
import IconCategory from '../icons/IconCategories.vue'
import IconUser from '../icons/IconUsers.vue'
import IconHome from '../icons/IconHome.vue'
import IconAdmin from '../icons/IconAdmin.vue'
import IconInfo from '../icons/IconInfo.vue' 
</script>
<template>
<aside id="logo-sidebar" class="fixed  top-0 left-0 z-0 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
   <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800 ">
      <ul class="space-y-2 font-medium ">
         <li>
            <a href="#" class=" flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <IconHome></IconHome>
               <span class="ml-3">Asosiy</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <IconAdmin></IconAdmin>
               <span class="flex-1 ml-3 whitespace-nowrap">Adminlar</span>
               </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <IconUser></IconUser>
               <span class="flex-1 ml-3 whitespace-nowrap">Foydalanuvchilar</span>
               </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <IconCategory></IconCategory>
               <span class="flex-1 ml-3 whitespace-nowrap">Toifalar</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z"/>
               </svg>
               <span class="flex-1 ml-3 whitespace-nowrap">E'lonlar</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <IconInfo></IconInfo>
               <span class="flex-1 ml-3 whitespace-nowrap">Ma'lumotlar</span>
            </a>
         </li>
        
      </ul>
   </div>
</aside>



</template>