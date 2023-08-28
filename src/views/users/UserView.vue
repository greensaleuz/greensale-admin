<script lang="ts">
import { UserViewModel } from '../../viewmodels/UserViewModels';
import UserViewComponent from "../../components/users/UserViewComponent.vue";
import axios from '../../plugins/axios'
import { useI18n } from 'vue-i18n';
import { getToken } from '../../helpers/TokenHelper';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    UserViewComponent
  },
  methods: {
    async getDataAsync() {
      this.isLoaded = false;
      const token = getToken();
      var response = await axios.get<UserViewModel[]>("/api/admin/users?page=1", {
        headers: {
          accept: "*/*",
          "Authorization": `Bearer ${token}`
        }
      });
      this.isLoaded = true;
      this.userList = response.data;
    }
  },
  data() {
    return {
      userList: [] as UserViewModel[],
      defaultSkeletons: 3 as Number,
      isLoaded: false as Boolean
    }
  },
  setup() {
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
            {{ $t('firsName') }}
          </th>
          <th scope="col" class="px-6 py-3">
            {{ $t('lastname') }}
          </th>
          <th scope="col" class="px-6 py-3">
            {{ $t('phone') }}
          </th>
          <th scope="col" class="px-6 py-3">
            {{ $t('adress') }}
          </th>
          <th scope="col" class="px-6 py-3">
            {{ $t('koproq_malumot') }}
          </th>
        </tr>
      </thead>
    </table>
  </div>
  <div class="flex w-100 justify-end">
  </div>
  <ul v-if="isLoaded == true">
    <template v-for="element in userList">
      <table class="w-full text-sm text-left text align-middle text-gray-500 dark:text-gray-400">
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="w-32 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ element.firstName }}
            </th>
            <td class="w-32 px-6 py-4">
              {{ element.lastName }}
            </td>
            <td class="w-32 px-6 py-4">
              {{ element.phoneNumber }}
            </td>
            <td class="w-32 px-6 py-4">
              {{ element.region }}
            </td>
            <td class="w-32 px-6 py-4">
              <router-link :to="`users/${element.id}`"
                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center mx-2 mt-2 mb-3">{{
                  $t('koproq malumot') }}
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- <UserViewComponent :user="element" class="mt-2 mb-3" /> -->
    </template>
  </ul>
  <!--end:: User-->
</template>