<script lang="ts">
import axios from '@/plugins/axios'
import IconLocation from '@/components/icons/IconLokation.vue'
import { defineComponent } from 'vue'
import { initFlowbite } from 'flowbite'
import { formatDate } from '../../../helpers/DateHelper'

export default defineComponent({
  components: {
    IconLocation
  },
  data() {
    return {
      baseURL: '' as String,
      createdAtString: '' as String,
      updatedAtString: '' as String,
      imageFullPath: '' as String
    }
  },
  props: {
    id: Number,
    fullName: String,
    userPhoneNumber: String,
    postPhoneNumber: String,
    categoryName: String,
    title: String,
    description: String,
    price: Number,
    capacity: Number,
    capacityMeasure: String,
    type: String,
    region: String,
    district: String,
    address: String,
    status: Number,
    createdAt: Date,
    updatedAt: Date,
    mainImage: String
  },
  methods: {
    load() {
      this.baseURL = axios.defaults.baseURL!
      this.imageFullPath = this.baseURL + '//' + this.mainImage
      console.log(this.imageFullPath)
      this.createdAtString = formatDate(this.createdAt!)
      this.updatedAtString = formatDate(this.updatedAt!)
    },
    exit(){
      localStorage.setItem("buyerById",this.id);
      this.$router.push('buyerinformation')
    }
  },
  mounted() {
    this.load()
  }
})
</script>

<template>
  <div
    class="flex-none pb-2 max-w-sm bg-gray-50 border my-1 border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 mx-1"
  >
    <a href="#">
      <img
        class="rounded-t-lg"
        :src="imageFullPath"
        style="width: 290px; height: 200px"
      />
    </a>

    <div class="">
      <div class="flex">
        <IconLocation class="pt-1"></IconLocation>
        <div class="flex pt-1">
          <h5 class="mb-2 text-sm  tracking-tight text-gray-600 dark:text-gray-200">
            {{ district }}
          </h5>
          <h5 class="mb-2 pt-1 text-xs mx-3 tracking-tight text-gray-600 dark:text-gray-200" style="margin-left:auto;">
            {{ updatedAtString }}
          </h5>
        </div>
      </div>
      
      <div class="line"></div>
        <div>
      <h4 class=" text-2xl tracking-tight text-black dark:text-white px-2">{{ title }}</h4>
      <h4 class=" text-xl tracking-tight black dark:text-white px-2">{{ price }} so'm dan {{ capacity }}{{ capacityMeasure }}</h4>
      <p class=" font-normal text-gray-700 dark:text-gray-400 px-2"   style="width: 290px;">{{ description }}</p>
      </div>
      <button 
      @click="exit"
      type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center mx-2 mt-2 mb-3">{{ $t('koproq_malumot') }}
    </button>

    </div>
  </div>
</template>
<style scoped>
.line {
  width: 100%;
  height: 1px;
  background: gray;
}
.sss{
  margin-top:40px;
  margin-right: 0px;
  justify-content: end;
}
.gapp {
  gap: 95px;
}
</style>