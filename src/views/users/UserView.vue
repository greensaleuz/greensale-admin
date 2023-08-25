<script lang="ts">
import { UserViewModel } from '@/viewmodels/UserViewModels';
import UserSkeletonComponent from '@/components/users/UserSkeletonComponent.vue'
import UserViewComponent from "@/components/users/UserViewComponent.vue";
import axios from '@/plugins/axios'
import { useI18n } from 'vue-i18n';
import { getToken } from '@/helpers/TokenHelper';
import { defineComponent} from 'vue';
export default defineComponent({
  components:{
    UserViewComponent, 
    UserSkeletonComponent
  },
  methods:{
    async getDataAsync(){
      this.isLoaded = false;
      const token = getToken();
      var response = await axios.get<UserViewModel[]>("/api/admin/users?page=1", {
         headers:{
          "Authorization": "Bearer "+token
         }
      });
      this.isLoaded=true;
      this.usersList = response.data;
    }
  },
  data() {
    return {
      usersList: [] as UserViewModel[],
      defaultSkeletons: 4 as Number,
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
   <!--begin:: Users Skeletons-->
  <ul v-show="isLoaded==false">
    <template v-for="element in defaultSkeletons">
      <UserSkeletonComponent
        class="mt-2 mb-3">
      </UserSkeletonComponent>
    </template>
  </ul>
  <!--end:: Users Skeletons-->

   <!--begin:: User-->
   <div class="flex w-100 justify-end">
   </div>
   <ul v-show="isLoaded==true">
     <template v-for="element in usersList">
       <UserViewComponent
         :id=element.id
         :firstName=element.firs_name
         :lastName=element.last_name
         :phoneNumber=element.phone_number
         :phoneNumberConfirme=element.phone_number_confirm
         :region=element.region
         :district=element.district
         :address=element.address
         :createdAt=element.created_at
         :updatedAt=element.updated_at
         class="mt-2 mb-3">
       </UserViewComponent>
     </template>
   </ul>
   <!--end:: User-->
 </template>