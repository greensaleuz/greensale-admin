<script lang="ts">
import IconLoudSpeaker from '@/components/icons/dashboard/iconLoudSpeaker.vue'
import IconUsers from '@/components/icons/dashboard/iconUsers.vue'
import IconAgreed from '@/components/icons/dashboard/iconAgreed.vue'
import IconNew from '@/components/icons/dashboard/iconNew.vue'
import { defineComponent } from 'vue'
import ApexCharts from 'apexcharts'
export default defineComponent({
  components: {
    IconUsers,
    IconAgreed,
    IconLoudSpeaker,
    IconNew
  },
  props: {
    apiData: Number,
    countUser: Number,
    countSeller: Number,
    countAgreed: Number,
    countBuyer: Number,
    summaAnnouncemet: Number
  },
  methods: {

  }
})

</script>

<template>
  <div class="grid grid-cols-2 gap-2">
    <div
      class="max-w-sm p-6 text-gray-900 bg-gray-75 border border-gray-200 rounded-lg dark:text-white shadow dark:bg-gray-900 dark:border-gray-700 group">
      <div class="flex">
        <IconLoudSpeaker class="mt-1"></IconLoudSpeaker>
        <a href="#">
          <h5 class="mb-2 mx-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {{ $t('announcemment')}}
          </h5>
        </a>
      </div>
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {{ $t('a')}}: {{ summaAnnouncemet }}
      </p>
      <div class="my-5 w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div class="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300" style="width: 45%"></div>
      </div>
    </div>

    <div
      class="max-w-sm p-6 text-gray-900 bg-gray-75 border border-gray-200 rounded-lg dark:text-white shadow dark:bg-gray-900 dark:border-gray-700 group">
      <div class="flex">
        <IconAgreed class="mt-1"></IconAgreed>
        <a href="#">
          <h5 class="mb-2 mx-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {{ $t('kelishilganlar')}}
          </h5>
        </a>
      </div>
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {{ $t('b')}}: {{ countBuyer  }}
      </p>
      <div class="my-5 w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div class="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300" style="width: 45%"></div>
      </div>
    </div>

    <div
      class="max-w-sm p-6 text-gray-900 bg-gray-75 border border-gray-200 rounded-lg dark:text-white shadow dark:bg-gray-900 dark:border-gray-700 group">
      <div class="flex">
        <IconNew class="mt-1"></IconNew>
        <a href="#">
          <h5 class="mb-2 mx-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {{ $t('newannouncements')}}
          </h5>
        </a>
      </div>
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {{ $t('c')}}: {{ countSeller }}
      </p>
      <div class="my-5 w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div class="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300" style="width: 45%"></div>
      </div>
    </div>
    

    <div
      class="max-w-sm p-6 text-gray-900 bg-gray-75 border border-gray-200 rounded-lg dark:text-white shadow dark:bg-gray-900 dark:border-gray-700 group">
      <div class="flex">
        <IconUsers class="mt-1"></IconUsers>
        <a href="#">
          <h5 class="mb-2 mx-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {{ $t('users')}}
          </h5>
        </a>
      </div>
      <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {{ $t('d')}}: {{ countUser }}
      </p>
      <div class="my-5 w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div class="bg-gray-600 h-2.5 rounded-full dark:bg-gray-300" style="width: 45%"></div>
      </div>
    </div>
  </div>
  <apexchart width="500" type="bar" :options="chartOptions" :series="series" />
  <!-- <div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
    <div class="flex justify-between mb-5">
      <div>
        <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">$12,423</h5>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Sales this week</p>
      </div>
      <div class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
        23%
        <svg class="w-3 h-3 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M5 13V1m0 0L1 5m4-4 4 4" />
        </svg>
      </div>
    </div>
    <div id="grid-chart"></div>
    <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between mt-5">
      <div class="flex justify-between items-center pt-5"> -->
        <!-- Button -->
  <button id="dropdownDefaultButton" data-dropdown-toggle="lastDaysdropdown" data-dropdown-placement="bottom"
    class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
    type="button">
    Last 7 days
    <svg class="w-2.5 m-2.5 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
    </svg>
  </button>
  <!-- Dropdown menu -->
  <div id="lastDaysdropdown"
    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 7
          days</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 30
          days</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 90
          days</a>
      </li>
    </ul>
  </div>
  <a href="#"
    class="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
    Sales Report
    <svg class="w-2.5 h-2.5 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
    </svg>
  </a>
 
</template>