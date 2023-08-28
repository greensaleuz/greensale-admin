<script lang="ts">
import { defineComponent } from 'vue'
import Cookies from 'js-cookie'
import { formatDate } from '../../helpers/DateHelper'
import axios from '@/plugins/axios'
import { getToken } from '../../helpers/TokenHelper'
import { UserViewModel } from '../../viewmodels/UserViewModels'
import userDeleteComponent from '../../components/users/UserDeleteComponent.vue'
export default defineComponent({
  components: {
    userDeleteComponent
  }, 
  props: {
    createdAt: Date,
    updatedAt: Date
  },
  data() {
    return {
      userList: [] as UserViewModel[],
      id: null,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      region: "",
      district: "",
      address: "",
      createdAt: '' as String,
      updatedAt: '' as String
    }
  },
  methods: {
    async getDataAsync() {
      var token = getToken()
      if( token === undefined) {
      this.$router.push("auth/login");

      var response = await axios.get<UserViewModel[]>(`http://95.130.227.68:8080/api/admin/users/${userId}`)
      this.userList = response.data
      console.log(this.userList)
      this.createdAt = formatDate(this.createdAt!)
      this.updatedAt = formatDate(this.updatedAt!)
    },
    created() {

    }
  },
  setup() { },
  async mounted() {
    await this.getDataAsync(),
      this.created()
  }
})

</script>
<template>
  {{ userList }}
  <h1 class="text-2xl m-1 text-gray-900 dark:text-gray-100">{{ $t('User information') }}</h1>
  <div class="flex" style="gap:30px; width: 385px; ">
    <div class="w-full pt-1 flex" style="flex-direction: column;">
      <label
        class="px-2 py-1 mb-1 text-sm text-gray-700 border border-gray-200 rounded-lg  bg-gray-50 dark:text-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">{{
          $t('firstname') }}: {{ userList.firstName }}</label>
      <label
        class="px-2 py-1 my-1 text-sm text-gray-700 border border-gray-200 rounded-lg  bg-gray-50 dark:text-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">{{ $t('lastname') }}:
        {{ userList.lastName }}</label>
      <label
        class="px-2 py-1 my-1  text-sm text-gray-900 border border-gray-200 rounded-lg  bg-gray-50 dark:text-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">{{
          $t('phoneNumber') }}: {{ userList.phoneNumber }}</label>
      <label
        class="px-2 py-1 my-1  text-sm text-gray-900 border border-gray-200 rounded-lg  bg-gray-50 dark:text-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">{{
          $t('region') }}: {{ userList.region }}</label>
      <label
        class="px-2 py-1 my-1  text-sm text-gray-900 border border-gray-200 rounded-lg  bg-gray-50 dark:text-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">{{
          $t('district') }}: {{ userList.district }}</label>
      <label
        class="px-2 py-1 my-1  text-sm text-gray-900 border border-gray-200 rounded-lg  bg-gray-50 dark:text-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">{{
          $t('address') }}: {{ userList.address }}</label>
      <label
        class="px-2 py-1 my-1  text-sm text-gray-900 border border-gray-200 rounded-lg  bg-gray-50 dark:text-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">{{
          $t('createdAt') }}: {{ userList.createdAt }}</label>
      <label
        class="px-2 py-1 my-1  text-sm text-gray-900 border border-gray-200 rounded-lg  bg-gray-50 dark:text-gray-300  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">{{
        $t('updatedAt') }}: {{ userList.updatedAt }}</label>

  </div>
</div>
<!--begin:: buttons-->
<div class="w-96 flex " style="gap: 10px;">

  <div class="flex-none pt-8 justify-center mb-1" v-if="userList.id">
    <userDeleteComponent :UserId="userList.id" />

  </div>
  <!--end:: buttons-->
</div></template>
