<script lang="ts">
import axios from '@/plugins/axios'
import { formatDate } from '@/helpers/DateHelper'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {

  },
  props: {
    id: Number,
    name: String,
    createdAt: Date,
    updatedAt: Date
  },
  data() {
    return {
      baseURL: '' as String,
      createdAtString: "" as String,
      updatedAtString: "" as String
    }
  },
  methods: {
    load() {
      this.baseURL = axios.defaults.baseURL!
      this.createdAtString = formatDate(this.createdAt!);
      this.updatedAtString = formatDate(this.updatedAt!);
    }
  },
  mounted() {
    this.load()
  }
})
</script>

<template>
  <div
    class="flex w-full px-5 bg-gray-50 my-5 divide-y divide-gray-100 rounded shadow dark:bg-gray-900 dark:divide-gray-600"
  >
    <div class="flex-auto">
      <a href="#" class="p-1">
        <h3 class="text-3xl pb-1 font-semibold tracking-tight text-gray-900 dark:text-white">
          {{ name }}
        </h3>
      </a>
      <p class="p-1 text-sm tracking-tight text-gray-900 dark:text-white">{{ createdAtString }}</p>
      <p class="p-1 mb-2 text-sm tracking-tight text-gray-900 dark:text-white">{{ updatedAtString }}</p>
    </div>
    <div class="flex-none pt-8 justify-center mb-1">
      <button
        type="button"
        class="text-white w-full py-2 px-1 my-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm text-center"
      >
        {{ $t('edit') }}
      </button>

      <button
        type="button"
        class="text-white w-full py-2 px-1 my-1 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm text-center"
      >
        {{ $t('delete') }}
      </button>
    </div>
  </div>
</template>