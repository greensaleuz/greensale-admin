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
  <div class="flex w-100 justify-end">
   
  <div class="flex-none pt-8 justify-center mb-1">
      <button
        type="button"
        class="text-white w-full py-2 px-5  my-1 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm text-center"
      >
        {{ $t('create') }}
      </button>

     
    </div>
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