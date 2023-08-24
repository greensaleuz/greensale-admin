<script lang="ts">
import { defineComponent } from 'vue';
import DashboardViewComponent from '@/components/dashboard/DashboardViewComponent.vue';
import axios from '@/plugins/axios';

export default defineComponent({
   components: {
      DashboardViewComponent
   },
   methods: {
      async getDataAsync() {
         try {
            const resBuyerCount = await axios.get("api/common/buyer/posts/count");
            const resSellerCount = await axios.get("api/common/seller/post/count");
            const resStorageCount = await axios.get("api/common/storage/count");
            const resUserCount = await axios.get("api/admin/users/count");
            console.log({ resBuyerCount });
            console.log({ resSellerCount });
            console.log({ resStorageCount });
            console.log({ resUserCount });

            this.apiBuyerCount = resBuyerCount.data
            this.apiSellerCount = resSellerCount.data
            this.apiStorageCount = resStorageCount.data
            this.apiUserCount = resUserCount.data

         } catch (error) {
            console.log(error);
         }
      }
   },

   data() {
      return {
         apiBuyerCount: [],
         apiSellerCount: [],
         apiStorageCount: [],
         summa: [],
         apiUserCount: []
      }
   },
   computed: {
      getSumm() {
         return this.summa = this.apiBuyerCount + this.apiSellerCount + this.apiStorageCount
      }
   },
   async mounted() {
      await this.getDataAsync();
      const res = await fetch('http://95.130.227.68:8080/api/admin/users/count',
         {
            method: "GET",
            mode: "no-cors",
            credentials: "same-origin", 
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjEyIiwiRmlyc3ROYW1lIjoidGVzdCIsIkxhc3ROYW1lIjoidGVzdCIsIlBob25lTnVtYmVyIjoiKzk5ODk0MTA5MjEyMSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlVzZXIiLCJleHAiOjE2OTI5NDc1NjUsImlzcyI6Imh0dHA6Ly9HcmVlblNhbGUudXoiLCJhdWQiOiJHcmVlblNhbGUifQ.z7L9t5HBFsPxwl3LBE_ieJYqPV95dfPvBuUxvKrLop0`
            }
         }
      )
      console.log({res});
   }
});

</script>

<template>
   <!--end:: Dashboard-->
   <ul>
      <DashboardViewComponent :apiData="apiBuyerCount" :countUser="apiUserCount" :countSeller="apiSellerCount"
         :countAgreed="apiStorageCount" :summaAnnouncemet="summa">
      </DashboardViewComponent>
      {{ apiBuyerCount }}
      {{ apiSellerCount }}
      {{ apiStorageCount }}
      {{ summa }}
      {{ apiUserCount }}
      sum->{{ getSumm }}
   </ul>
   <!--begin:: Dashboard-->
</template>