<script lang="ts">
import { defineComponent } from 'vue'
import Cookies from 'js-cookie'
import { CategoryViewModel } from '@/viewmodels/CategoryViewModels'
import CategoryCreateComponent from '@/components/categories/CategoryCreateComponent.vue'
import CategoryViewComponent from '@/components/categories/CategoryViewComponent.vue'
import axios from '@/plugins/axios'

export default defineComponent({
  components: {
    CategoryViewComponent,
    CategoryCreateComponent
  },
  data() {
    return {
      categoriesList: [] as CategoryViewModel[],
      name: '' as String,
      createError: false as boolean
    }
  },
  methods: {
    async getDataAsync() {
      var response = await axios.get<CategoryViewModel[]>('/api/common/categories?page=1')
      this.categoriesList = response.data
      console.log(this.categoriesList)
    }
  },
  setup() {},
  async mounted() {
    await this.getDataAsync()
  }
})
</script>

<template>
  <CategoryCreateComponent></CategoryCreateComponent>

  <ul>
    <template v-for="element in categoriesList">
      <CategoryViewComponent
        :id="element.id"
        :name="element.name"
        :createdAt="element.createdAt"
        :updatedAt="element.updatedAt"
      ></CategoryViewComponent>
    </template>
  </ul>
</template>

