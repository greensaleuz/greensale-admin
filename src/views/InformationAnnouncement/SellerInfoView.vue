<script lang="ts">
import { defineComponent } from 'vue'
import Cookies from 'js-cookie'
import { formatDate } from '../../helpers/DateHelper'
import { SellersPostByIdViewModel } from '@/viewmodels/SellerPostByIdViewModel'
import SellerInfoComponenta from '@/views/InformationAnnouncement/SellerInfoView.vue'
import axios from '@/plugins/axios'
import FlowbiteSetUp from '../../FlowbiteSetup.vue'
import InformationView from '../informations/InformationView.vue'
import { threadId } from 'worker_threads'
import deleteComponent from '@/components/annoncements/sellerannouncements/SellerDeleteComponent.vue'

export default defineComponent({
  components: {
    InformationView,
    FlowbiteSetUp,
    deleteComponent
  },
  props: {
    createdAtString: Date,
    updatedAtString: Date
  },
  data() {
    return {
      postList: [] as SellersPostByIdViewModel,
      fullName: '',
      id: 0,
      Id: null,
      userId: '',
      userPhoneNumber: '',
      postPhoneNumber: '',
      userRegion: '',
      categoryName: '',
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
      Idd: 26
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
    },
    deletedAsync() {}
  },
  setup() {},
  async mounted() {
    await this.getDataAsync(), this.deletedAsync()
  }
})
</script>

<template>
  <FlowbiteSetUp></FlowbiteSetUp>
  <div>
    <h1 class="text-2xl m-1 text-gray-900 dark:text-gray-100">{{ $t('sellerpostinformation') }}</h1>
    <div class="flex" style="gap: 30px">
      <div class="w-full pt-1 flex" style="flex-direction: column">
        <label
          class="px-2 py-1 mb-1 text-sm text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          >{{ $t('fullname') }}: {{ fullName }}</label
        >
        <label
          class="px-2 py-1 my-1 text-sm text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          >{{ $t('phonenumber') }}: {{ postList.userPhoneNumber }} ,
          {{ postList.postPhoneNumber }}</label
        >
        <label
          class="px-2 py-1 my-1 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          >{{ $t('price') }}: {{ postList.price }}</label
        >
        <label
          class="px-2 py-1 my-1 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          >{{ $t('title') }}: {{ postList.title }}</label
        >
        <label
          class="px-2 py-1 my-1 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          >{{ $t('capacity') }}: {{ postList.capacity }}</label
        >
        <label
          class="px-2 py-1 my-1 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          >{{ $t('capasitymeasure') }}: {{ postList.capacityMeasure }}</label
        >
        <label
          class="px-2 py-1 my-1 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          >{{ $t('region') }}: {{ postList.region }}</label
        >
        <label
          class="px-2 py-1 my-1 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          >{{ $t('district') }}: {{ postList.district }}</label
        >
        <label
          class="px-2 py-1 my-1 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          >{{ $t('createdAt') }}: {{ createdAtString }}</label
        >
        <label
          class="px-2 py-1 my-1 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          >{{ $t('updated') }}: {{ updatedAtString }}</label
        >
        <label
          class="px-2 py-1 my-1 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          >{{ $t('status') }}: {{ postList.status }}</label
        >
        <label
          class="px-2 py-1 my-1 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          >{{ $t('description') }}: {{ postList.description }}</label
        >

        <!--begin::carusel-->
      </div>
      <div class="flex" style="flex-direction: column">
        <div
          id="controls-carousel"
          class="relative w-96 h-104"
          h-80
          data-carousel="static"
          style="margin-left: auto"
        >
          <!-- Carousel wrapper -->
          <div class="relative h-56 overflow-hidden bg-white rounded-lg md:h-96">
            <!-- Item 1 -->
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <!-- Item 5 -->
            </div>
          </div>
          <!-- Slider controls -->
          <button
            type="button"
            class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            >
              <svg
                class="w-4 h-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            >
              <svg
                class="w-4 h-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
        <!--begin:: buttons-->
        <div class="w-96 flex" style="gap: 10px">
          <button
            type="button"
            class="my-5 w-full text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
          >
            {{ $t('edit') }}
          </button>
         <deleteComponent></deleteComponent>
         
        
          <!--end:: buttons-->
        </div>
      </div>
    </div>
    <!--begin::carusel-->
  </div>
</template>


<style scoped>
</style>