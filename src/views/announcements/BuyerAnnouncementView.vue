<script lang="ts">
import { defineComponent } from 'vue';
import  {BuyerAnnouncementViewModel}  from '@/viewmodels/BuyerAnnouncementVieWModel';
import BuyerAnnouncementViewComponent from '@/components/annoncements/buyerannouncements/BuyerAnnouncemenViewComponent.vue';

import axios from '@/plugins/axios';

export default defineComponent({
  components:{
    BuyerAnnouncementViewComponent
  },
  data() {
    return {
      postsList : [] as BuyerAnnouncementViewModel[]
    }
  },
  methods:{
    async getDataAsync(){
        var response = await axios.get<BuyerAnnouncementViewModel[]>("/api/common/buyer/posts?page=1"); 
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
      <BuyerAnnouncementViewComponent
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
        :mainImage=element.mainImage
      ></BuyerAnnouncementViewComponent>
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