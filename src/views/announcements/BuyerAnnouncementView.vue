<script lang="ts">
import { defineComponent } from 'vue'
import { BuyerAnnouncementViewModel } from '@/viewmodels/BuyerAnnouncementVieWModel'
import BuyerAnnouncementViewComponent from '@/components/annoncements/buyerannouncements/BuyerAnnouncemenViewComponent.vue'

import axios from '@/plugins/axios'

export default defineComponent({
  components: {
    BuyerAnnouncementViewComponent
  },
  data() {
    return {
      postsList: [] as BuyerAnnouncementViewModel[]
    }
  },
  methods: {
    async getDataAsync() {
     var token =  getToken()
     if( token === undefined){
        this.$router.push("/auth/login");
     }
      var response = await axios.get<BuyerAnnouncementViewModel[]>('/api/common/buyer/posts?page=1')
      this.postsList = response.data
      console.log(this.postsList)
    }
  },
  setup() {

  },
  async mounted() {
    await this.getDataAsync()
  }
})
</script>

<template>
  <ul>
    <div class="cart_wrapper">
      <template v-for="element in postsList">
        <BuyerAnnouncementViewComponent
          :id="element.id"
          :fullName="element.fullName"
          :userPhoneNumber="element.userPhoneNumber"
          :postPhoneNumber="element.postPhoneNumber"
          :categoryName="element.categoryName"
          :title="element.title"
          :description="element.description"
          :price="element.price"
          :capacity="element.capacity"
          :capacityMeasure="element.capacityMeasure"
          :type="element.type"
          :region="element.region"
          :district="element.district"
          :address="element.address"
          :status="element.status"
          :createdAt="element.createdAt"
          :updatedAt="element.updatedAt"
          :mainImage="element.mainImage"
        ></BuyerAnnouncementViewComponent>
      </template>
   </div>
  </ul>

  <nav aria-label="Page navigation example mx-80">
    <ul class="inline-flex -space-x-px text-sm justify-center mx-72 my-5">
      <li>
        <a
          href="#"
          class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >Previous</a
        >
      </li>
      <li>
        <a
          href="#"
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >1</a
        >
      </li>
      <li>
        <a
          href="#"
          class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >Next</a
        >
      </li>
    </ul>
  </nav>
</template>
<style scoped>
.cart_wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>