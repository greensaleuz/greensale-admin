<script lang="ts">
import IconEdit from "../../components/icons/interface/iconEdit.vue"
import IconDelete from "../../components/icons/interface/iconDelete.vue"
import IconCalendar from "../../components/icons/interface/iconCalendar.vue";
import IconCalendarEdit from "../../components/icons/interface/iconCalendarEdit.vue";
import {formatDate} from "@/helpers/DateHelper";
import axios from '@/plugins/axios'
import { defineComponent } from 'vue'
import deleteComponent from './CategoryDeleteComponent.vue'
import editComponent from './CategoryEditComponenta.vue'

export default defineComponent({
  components: {
    deleteComponent, editComponent
    },
    props: {
        id: Number,
        name: String,
        imagePath: String,
        description: String,
        createdAt: Date,
        updatedAt: Date
    },
    data() {
    return {
      baseURL: '' as String,
      createdAtString: '' as String,
      updatedAtString: '' as String
      }
    },
    methods: {
    load() {
      this.baseURL = axios.defaults.baseURL!
      this.createdAtString = formatDate(this.createdAt!)
      this.updatedAtString = formatDate(this.updatedAt!)
      },
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
      <p class="p-1 mb-2 text-sm tracking-tight text-gray-900 dark:text-white">
        {{ updatedAtString }}
      </p>
        </div>
    <div class="flex-none pt-8 justify-center mb-1">
     <editComponent
     :nameProp=name
     :idProp=id>

     </editComponent>
      <deleteComponent 
      :idcategory=id
      >
      </deleteComponent>
     
        </div>
      </div>
</template>