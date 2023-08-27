<script lang="ts">
import { UserViewModel } from '@/viewmodels/UserViewModels';
import UserViewComponent from "@/components/users/UserViewComponent.vue";
import axios from '@/plugins/axios'
import { useI18n } from 'vue-i18n';
import { getToken } from '@/helpers/TokenHelper';
import { defineComponent} from 'vue';
export default defineComponent({
  components:{
    UserViewComponent, 
  },
  methods:{
    async getDataAsync(){
      this.isLoaded = false;
      const token = getToken();
      debugger;
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


   <!--begin:: User-->
    
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                     firsName 
                    </th>
                    <th scope="col" class="px-6 py-3">
                      lastName
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Phone
                    </th>
                    <th scope="col" class="px-6 py-3">
                      address
                    </th>
                    <th scope="col" class="px-6 py-3">
                     More information
                    </th>
                </tr>
            </thead>
         </table>
    </div>
   <div class="flex w-100 justify-end">
   </div>
   <ul v-show="isLoaded==true">
     <template v-for="element in usersList">
       <UserViewComponent
         :id=element.id
         :firstName=element.firstName
         :lastName=element.lastName
         :phoneNumber=element.phoneNumber
         :phoneNumberConfirme=element.phoneNuberConfirme
         :region=element.region
         :district=element.district
         :address=element.address
         :createdAt=element.createdAt
         :updatedAt=element.updatedAt
         class="mt-2 mb-3">
       </UserViewComponent>
     </template>
   </ul>
   <!--end:: User-->
 </template>