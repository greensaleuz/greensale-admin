<script lang="ts">
import { defineComponent } from 'vue'
import DashboardViewComponent from '@/components/dashboard/DashboardViewComponent.vue'
import axios from '@/plugins/axios'

export default defineComponent({
  components: {
    DashboardViewComponent
  },
  methods: {
    async getDataAsync() {
      try {
        const resBuyerCount = await axios.get('api/common/buyer/posts/count')
        const resSellerCount = await axios.get('api/common/seller/post/count')
        const resStorageCount = await axios.get('api/common/storage/count')
        const resUserCount = await axios.get('api/admin/users/count')

        this.apiBuyerCount = resBuyerCount.data
        this.apiSellerCount = resSellerCount.data
        this.apiStorageCount = resStorageCount.data
        this.apiUserCount = resUserCount.data
        this.summa = this.apiBuyerCount + this.apiSellerCount + this.apiStorageCount;

      } catch (error) {
        console.log(error)
      }
    }
  },

  data() {
    return {
      apiBuyerCount: 0,
      apiSellerCount: 0,
      apiStorageCount: 0,
      summa: 0,
      apiUserCount: 0
    }
  },
  async mounted() {
    await this.getDataAsync()
  }
})
</script>

<template>
  <!--end:: Dashboard-->
  <ul>
    <DashboardViewComponent
      :apiData="apiBuyerCount"
      :countUser="apiUserCount"
      :countSeller="apiSellerCount"
      :countAgreed="apiStorageCount"
      :summaAnnouncemet="summa"
    />
  </ul>
  <!--begin:: Dashboard-->
</template>
