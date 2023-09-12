<script setup lang="ts">

  import { onMounted } from 'vue'
  import { initFlowbite } from 'flowbite'

  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();

  onMounted(() => {
    initFlowbite()
})
</script>
<template>
  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
        <li>
          <RouterLink to="/dashboard">
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
            <mainIcons name="home" class="text-gray-900 dark:text-white w-5 h-5 ">
            </mainIcons>
            <span class="ml-3">{{ $t("dashboard")}}</span>
            </a>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/admins">
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
          <mainIcons name="admins" class="text-gray-900 dark:text-white w-5 h-5"></mainIcons>
            <span class="flex-1 ml-3 whitespace-nowrap">{{ $t("admins")}}</span>
          </a>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/users">
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
          <mainIcons name="users" class="text-gray-900 dark:text-white w-5 h-5"></mainIcons>
            <span class="flex-1 ml-3 whitespace-nowrap">{{ $t("users")}}</span>
          </a>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/categories">
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
          <mainIcons name="categories" class="text-gray-900 dark:text-white w-5 h-5"></mainIcons>
            <span class="flex-1 ml-3 whitespace-nowrap">{{ $t("categories")}}</span>
          </a>
          </RouterLink>
        </li>

        <li>
          <button
            type="button"
            class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-example"
            data-collapse-toggle="dropdown-example"
          >
          <mainIcons name="announcement" class="text-gray-900 dark:text-white w-5 h-5"></mainIcons>
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
              <RouterLink to="sellerannouncements">
              <a
                href="#"
                class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >{{ $t("sellerannnouncements")}}</a
              >
              </RouterLink>
            </li>
            <li>
              <RouterLink to="buyerannnouncements">
              <a
                href="#"
                class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >{{ $t("buyerannouncements")}}</a
              >
              </RouterLink>
            </li>
            <li>
              <RouterLink to="storagsannouncements">
              <a
                href="#"
                class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >{{ $t("storagsannouncements")}}</a
              >
              </RouterLink>
            </li>
          </ul>
        </li>
        <li>
          <RouterLink to="informations">
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <mainIcons name="info" class="text-gray-900 dark:text-white w-5 h-5"></mainIcons>
          <span class="flex-1 ml-3 whitespace-nowrap">{{  $t ("informations") }}</span>
          </a>
          </RouterLink>
        </li>
      </ul>
    </div>
  </aside>
</template>
