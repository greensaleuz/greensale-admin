<script setup lang="ts">
import Icon from '../icons/IconHelp.vue'
import IconSetting from '../icons/IconSetting.vue'
import IconLegOut from '../icons/IconLegOut.vue'
import ThemeSwitcher from '@/components/common/ThemeSwitcher.vue'
import LanguageSwitcher from "../common/LanguageSwitcher.vue"


import { ref } from 'vue';
    let currentThemeIsDark = ref(false);
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        currentThemeIsDark = ref(true);
    } 
    else {
        currentThemeIsDark = ref(false);
    }

    function changeTheme() {
        currentThemeIsDark.value = !currentThemeIsDark.value;
        if(currentThemeIsDark.value){
            // dark
            document.documentElement.classList.add('dark');
            localStorage.setItem("color-theme", "dark");
        }
        else{
            // light
            document.documentElement.classList.remove('dark');
            localStorage.setItem("color-theme", "light");
        }
    }


import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

</script>

<template>
 
 <div class="flex items-center">
          <div class="flex items-center ml-3">
            <div>
              <button type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span class="sr-only">Open user menu</span>
               <IconSetting></IconSetting>
              </button>
            </div>
            <div class="z-50 hidden my-4 mt-1  text-base list-none  divide-y rounded shadow bg-white dark:bg-gray-800 " id="dropdown-user">
              
              <ul class="py-1" role="none">
                <li>
                <ThemeSwitcher></ThemeSwitcher>
                </li>
               
                <li>
                 <LanguageSwitcher></LanguageSwitcher>
                </li>
                <li>
                  <IconLegOut></IconLegOut>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Chiqish</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
</template>