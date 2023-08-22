<script lang="ts">
import { defineComponent } from 'vue';
import  { StorageAnnouncementViewModel }  from '@/viewmodels/StorageAnnouncementViewModel';
import StorageAnnouncementViewComponent from '@/components/annoncements/storageannouncements/StorageAnnouncementViewComponent.vue';

import axios from '@/plugins/axios';

export default defineComponent({
  components:{
    StorageAnnouncementViewComponent
  },
  data() {
    return {
      postsList : [] as StorageAnnouncementViewModel[]
    }
  },
  methods:{
    async getDataAsync(){
        var response = await axios.get<StorageAnnouncementViewModel[]>("/api/common/seller/post?page=1"); 
        this.postsList = response.data;
        console.log(this.postsList);
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
  <ul> 
    <div class="cart_wrapper">
     <template v-for="element in postsList">
       
      <StorageAnnouncementViewComponent
        :id=element.id
        :fullName=element.fullName
        :userPhoneNumber=element.userPhoneNumber
        :postPhoneNumber = element.postPhoneNumber
        :categoryName=element.categoryName
        :title=element.title
        :description=element.description
        :price=element.price
        :capacity=element.capacity
        :capacityMeasure=element.capacityMeasure
        :type=element.type
        :region=element.region
        :district=element.district
        :address=element.address
        :status=element.status
        :createdAt=element.createdAt
        :updatedAt=element.updatedAt
        :buyerPostsImages=element.buyerPostsImages
      ></StorageAnnouncementViewComponent>
    
    </template>  
    </div> 
  </ul>
</template>
<style scoped>
.cart_wrapper{
    display: flex                                                                                    ;
    flex-wrap: wrap;
}

</style>