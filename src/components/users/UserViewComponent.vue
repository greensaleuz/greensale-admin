<script lang="ts">
import axios from '@/plugins/axios'
import { defineComponent } from "vue";

export default defineComponent({
    components:{},
    props: {
        id: Number,
        firsName: String,
        lastName: String,
        phoneNumber: String,
        phoneNumberConfirme: Boolean,
        region: String,
        district: String,
        address: String,
        createdAt: Date,
        updatedAt: Date
    },
    data() {
      return{
        baseURL: "" as String
      }
    },
    methods: {
      load(){
        this.baseURL = axios.defaults.baseURL!;
      },
    },
    mounted() {
        this.load();
    }
});
</script>
<template>
    <div class="flex-wrap">
    
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        firsName 
                    </th>
                    <th scope="col" class="px-6 py-3">
                      lastName
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Phone
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Posts Count
                    </th>
                    <th scope="col" class="px-6 py-3">
                      more information
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                         {{ firsName }}
                    </th>
                    <td class="px-6 py-4">
                        {{ lastName }}
                    </td>
                    <td class="px-6 py-4">
                        {{ phoneNumber }}
                    </td>
                    <td class="px-6 py-4">
                        dfdf
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                </tr>
    
            </tbody>
        </table>
    </div>
    </div>
</template>