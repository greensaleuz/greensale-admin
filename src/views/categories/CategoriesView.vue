<script lang="ts">
import { defineComponent} from 'vue';
import { CategoryViewModel } from '@/viewmodels/CategoryViewModels';
import IconCreate from '@/components/icons/interface/iconCreate.vue';
import CategorySkeletonComponent from "@/components/categories/CategorySkeletonComponent.vue";
import CategoryViewComponent from "@/components/categories/CategoryViewComponent.vue";
import CategoryCreateComponent from '../../components/categories/CategoryCreateComponent.vue'
import axios from '@/plugins/axios'
import { useI18n } from 'vue-i18n';

export default defineComponent({
  components:{
    CategoryViewComponent, CategorySkeletonComponent,
    CategoryCreateComponent
  },
  methods:{
    async getDataAsync(){
      this.isLoaded = false;
      var response = await axios.get<CategoryViewModel[]>("/api/common/categories?page=1"); 
      this.isLoaded=true;
      this.categoriesList = response.data;
    }
  },
  data() {
    return {
      categoriesList: [] as CategoryViewModel[],
      defaultSkeletons: 3 as Number,
      isLoaded: false as Boolean
    }
  },
  setup(){
    const { t } = useI18n();
  },
  async mounted() {
      await this.getDataAsync();
  },
});
</script>
<template>
  <!--begin:: Categories Skeletons-->
  <ul v-show="isLoaded==false">
    <template v-for="element in defaultSkeletons">
      <CategorySkeletonComponent
        class="mt-2 mb-3">
      </CategorySkeletonComponent>
    </template>
  </ul>
  <!--end:: Categories Skeletons-->
  
  <!--begin:: Categories-->
  <div class="flex w-100 justify-end">
  </div>
  <ul v-show="isLoaded==true">
    <CategoryCreateComponent></CategoryCreateComponent>
    <template v-for="element in categoriesList">
      <CategoryViewComponent
        :id=element.id
        :name=element.name
        :description=element.description
        :imagePath=element.imagePath
        :createdAt=element.createdAt
        :updatedAt=element.updatedAt
        class="mt-2 mb-3">
      </CategoryViewComponent>
    </template>
  </ul>
  <!--end:: Categories-->
</template>