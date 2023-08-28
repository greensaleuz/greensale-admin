<script lang="ts">
import { defineComponent } from 'vue'
import Cookies from 'js-cookie'
import { formatDate } from '../../../helpers/DateHelper'
import { SellersPostByIdViewModel } from '../../../viewmodels/SellerPostByIdViewModel'
import axios from '@/plugins/axios'
import FlowbiteSetUp from '../../../FlowbiteSetup.vue'


export default defineComponent({
  components: {
    FlowbiteSetUp
  },
  props: {
    createdAtString: Date,
    updatedAtString: Date
  },
  data() {
    return {
      showModal: true,
      postList: [] as SellersPostByIdViewModel,
      fullName: '',
      id: 0,
      Id: null,
      userId: '',
      userPhoneNumber: '',
      postPhoneNumber: '',
      userRegion: '',
      categoryId: 0,
      title: '',
      description: '',
      price: 0,
      capacity: 0,
      capacityMeasure: '',
      type: '',
      region: '',
      district: '',
      updatedAt: Date,
      createdAt: Date,
      status: 0,
      postImages: [],
      test: false as boolean,
      Idd: 0,
      statusString:'' as String
    }
  },

  methods: {
    async getDataAsync() {
      this.Idd = localStorage.getItem('sellerById')
      var response = await axios.get<SellersPostByIdViewModel[]>(
        '/api/common/seller/post/' + this.Idd
      )
      this.postList = response.data
      console.log(this.postList)
      this.createdAtString = formatDate(this.createdAt!)
      this.updatedAtString = formatDate(this.updatedAt!)

      this.fullName = this.postList.fullName
    },
    openModal() {

        this.postPhoneNumber=this.postList.postPhoneNumber
        this.price=this.postList.price
        this.capacity=this.postList.capacity
        this.capasitymeasure=this.postList.capacityMeasure
        this.region=this.postList.region
        this.district=this.postList.district
        this.type=this.postList.type
        this.description=this.postList.description
        if(this.postList.status==0)
        {
            this.statusString="Yangi"
            this.status=this.statusString
        }
        this.showModal = true;
    },
    closeModal() {
        this.showModal = false;
    },
    async UpdateAsync(){

    }
  },
  setup() {},
  async mounted() {
    await this.getDataAsync(), this.deletedAsync()
  }
})
</script>

<template>
  <!-- Modal toggle -->
  <button
    @click="openModal"
    data-modal-target="authentication-modal"
    data-modal-toggle="authentication-modal"
    class="my-5 w-full text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
    type="button"
  >
    {{ $t('edit') }}
  </button>

  <!-- Main modal -->
  <div
    v-if="showModal"
    id="authentication-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div  class="relative w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button
          type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="authentication-modal"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">dfgs</span>
        </button>
        <div class="px-6 py-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            {{ $t('postinfoubdate') }}
          </h3>
          <form class="space-y-6" action="#">
            
            <div class="grid gap-6 mb-6 md:grid-cols-2">
               
              <div>
                <label
                  for="last_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >{{ $t('phonenumber') }}</label
                >
                <input
                  type="text"
                  id="last_name"
                  v-model="postPhoneNumber"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >{{ $t('price') }}</label
                >
                <input
                v-model="price"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  class=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >{{ $t('capacity') }}</label
                >
                <input
                v-model="capacity"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="website"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >{{ $t('capasitymeasure') }}</label
                >
                <input
                 v-model="capasitymeasure"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="visitors"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >{{ $t('region') }}</label
                >
                <input
                  
                  v-model="region"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label
                  for="website"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >{{ $t('district') }}</label
                >
                <input
                  v-model="district"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
             

          
            
             
            </div>
             <div>
                <label
                  for="visitors"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >{{ $t('type') }}</label
                >
                <input
                  v-model="type"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            <div>
                <label
                  for="visitors"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >{{ $t('description') }}</label
                >
                <input
                v-model="description"
                  class="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {{ $t('update') }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>