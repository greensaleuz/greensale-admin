<script lang="ts">
import { defineComponent } from 'vue';
import { CategoryViewModel } from '@/viewmodels/CategoryViewModels';
import CategoryViewComponent from '@/components/categories/CategoryViewComponent.vue';
import axios from 'axios';

//export default defineComponent({
  //components:{
  //   CategoryViewComponent
  // },
  // methods:{
  //   async getDataAsync(){
  //     var response = await axios.get<CategoryViewModel[]>("/api/common/categories?page=1");
  //     this.categoriesList = response.data;
  //   }
  // },
  // data() {
  //   return {
  //     categoriesList: [] as CategoryViewModel[]
  //   }
  // },
  // setup(){
 
  // },
  // async mounted() {
  //     await this.getDataAsync();
  // },
//});
</script>

<template>
  <h1>Salom category view</h1>
  <ul>
    <template v-for="element in categoriesList" :key="element.id">
      <CategoryViewComponent
        :id=element.id
        :name=element.name
        :description=element.description
        :createdAt=element.createdAt
        :updatedAt=element.updatedAt
      ></CategoryViewComponent>
    </template>
  </ul>
</template>

