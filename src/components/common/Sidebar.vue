
<script setup lang = "ts">
   import IconDashboard from '../icons/IconDashboard.vue';   
   import IconAdmin from '../icons/IconAdmin.vue'
   import IconCategories from '../icons/IconCategories.vue'
   import IconUsers from '../icons/IconUsers.vue'
   import IconInfo from '../icons/IconInfo.vue'
   import IconAnnouncement from '../icons/IconAnnouncement.vue'        
   import IconSettings from '../icons/IconSettings.vue' 
   import { useI18n } from 'vue-i18n';
   const { t } = useI18n();      
   //import { RouterLink } from 'vue-router';
</script>
<template>

<aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
   <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
         <li>
            <RouterLink to="/dashboard">
               <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconDashboard></IconDashboard>
                  <span class="ml-3">{{ $t("dashboard") }}</span>
               </div>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/admins">
               <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconAdmin></IconAdmin>
                  <span class="flex-1 ml-3 whitespace-nowrap">{{ $t("admins") }}</span>
               </div>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/users">
               <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconUsers></IconUsers>
                  <span class="flex-1 ml-3 whitespace-nowrap">{{ $t("users") }}</span>
               </div>
            </RouterLink>
         </li>
         <li>
            <RouterLink to="/categories">
               <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconCategories></IconCategories>
                  <span class="flex-1 ml-3 whitespace-nowrap">{{ $t("categories") }}</span>
               </div>
            </RouterLink>
         </li>
         <li>
          <button
            type="button"
            class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-example"
            data-collapse-toggle="dropdown-example"
          >
            <IconAnnouncement></IconAnnouncement>
            <span class="flex-1 ml-3 text-left whitespace-nowrap">{{ $t("announcements")}}</span>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <ul id="dropdown-example" class="hidden py-2 space-y-2">
            <li>
              <RouterLink to="/sellerannnouncements">
              <a
                href="#"
                class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >{{ $t("sellerannnouncements")}}</a
              >
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/buyerannouncements">
              <a
                href="#"
                class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >{{ $t("buyerannouncements")}}</a
              >
              </RouterLink>
            </li>
            <li>
              <RouterLink to="storageannouncements">
              <a
                href="#"
                class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >{{ $t("storageannouncements")}}</a
              >
              </RouterLink>
            </li>
          </ul>
        </li>
         <li>
            <RouterLink to="/info">  
               <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconInfo></IconInfo>
                  <span class="flex-1 ml-3 whitespace-nowrap">{{ $t("informations") }}</span>
               </div>
            </RouterLink>
         </li>
         <li>  
            <RouterLink to="/settings">
               <div class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <IconSettings></IconSettings>
                  <span class="flex-1 ml-3 whitespace-nowrap">{{ $t("settings") }}</span>
               </div>
         </RouterLink>
         </li>
      </ul>
   </div>
</aside>

</template>

<style>

</style>
