<script lang="ts">
import {formatDate} from "@/helpers/DateHelper";
import axios from '@/plugins/axios';

import { defineComponent } from 'vue';

export default defineComponent({
    components:{
          
    },
    props: {
        id: Number,
        name: String,
        description: String,
        createdAt: Date,
        updatedAt: Date
    },
    data() {
      return{
        baseURL: "" as String,
        createdAtString: "" as String,
        updatedAtString: "" as String
      }
    },
    methods: {
      load(){
        this.baseURL = axios.defaults.baseURL!;
        this.createdAtString = formatDate(this.createdAt!);
        this.updatedAtString = formatDate(this.updatedAt!);
      },
    },
    mounted() {
        this.load();
    }
});
</script>

<template>
    <div class="flex w-full px-5 ">
        <div class="flex-auto">
        <a href="#" class="p-1">
            <h3 class="text-3xl pb-1 font-semibold tracking-tight text-gray-900 dark:text-white">{{ name }}</h3>
            <h4 class="text-xl">{{description}}</h4>
        </a>
        <p class="p-1 text-sm">{{ createdAt }} </p>
        <p class="p-1 text-sm">{{ updatedAt }}</p>
        </div>
      <div class="flex-none w-20 pt-16 justify-center mb-1">
        <button
          type="button"
          class="text-white w-20 py-2 my-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm  text-center "
        >
          Edit
          </button>
          <button
          type="button"
          class="text-white w-20 py-2 my-1 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm  text-center "
        >
          Delete
        </button>

        </div>
      </div>
   
</template>