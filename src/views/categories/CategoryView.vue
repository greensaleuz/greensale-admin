<script lang="ts">
import { defineComponent } from 'vue';
import { CategoryViewModel } from '@/viewmodels/CategoryViewModels';
import CategoryViewComponent from '@/components/categories/CategoryViewComponent.vue';
import axios from '@/plugins/axios';

export default defineComponent({
  components:{
    CategoryViewComponent
  },
  data() {
    return {
      categoriesList: [] as CategoryViewModel[]
    }
  },
  methods:{
    async getDataAsync(){
        var response = await axios.get<CategoryViewModel[]>("/api/common/categories?page=1"); 
        this.categoriesList = response.data;
        console.log(this.categoriesList);
    }
  },
  setup(){
 
  },
  async mounted() {
      await this.getDataAsync();
  },
});
</script>

<template>
  <button type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Teal</button>
  <div class="flex w-100 justify-end">
    <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
    <div class="flex flex-wrap items-center">
      <IconCreate></IconCreate>
      <p class="mx-2">{{ $t("create") }}</p>
    </div>
  </button>
  </div>

  <ul>
   
    <template v-for="element in categoriesList">
      <CategoryViewComponent
        :id=element.id
        :name=element.name
        :createdAt=element.createdAt
        :updatedAt=element.updatedAt
      ></CategoryViewComponent>
    </template>
  </ul>
</template>

