<script lang="ts">
import { defineComponent } from 'vue'
import DashboardViewComponent from '@/components/dashboard/DashboardViewComponent.vue'
import axios from '@/plugins/axios'

export default defineComponent({
  components: {
    DashboardViewComponent
  },
  methods: {
    async getDataAsync() {
      try {
        debugger;
        const resBuyerCount = await axios.get('api/common/buyer/posts/count')
        const resSellerCount = await axios.get('api/common/seller/post/count')
        const resStorageCount = await axios.get('api/common/storage/count')
        const resUserCount = await axios.get('api/admin/users/count')

        this.apiBuyerCount = resBuyerCount.data
        this.apiSellerCount = resSellerCount.data
        this.apiStorageCount = resStorageCount.data
         this.apiUserCount = resUserCount.data
        this.summa = this.apiBuyerCount + this.apiSellerCount + this.apiStorageCount;

      } catch (error) {
        console.log(error)
      }
    }
  },

  data() {
    return {
      apiBuyerCount: 0,
      apiSellerCount: 0,
      apiStorageCount: 0,
      summa: 0,
      apiUserCount: 0,
      series: [{
        name: 'Seller',
        type: 'area',        
        data: [0, 39, 54, 61, 12, 54, 32, 52, 44, 32, 31]
      }, {
        name: 'B qiymat',
        type: 'line',
        data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
        },
        stroke: {
          curve: 'smooth'
        },
        fill: {
          type: 'solid',
          opacity: [0.35, 1],
        },
        labels: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09 ', 'Dec 10', 'Dec 11'],
        markers: {
          size: 0
        },
        yaxis: [
          {
            title: {
              text: 'Qiymat 1',
            },
          },
          {
            opposite: true,
            title: {
              text: 'Qiymat 2',
            },
          },
        ],
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y: number) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;
            }
          }
        }
      }
    }
  },
  async mounted() {
    await this.getDataAsync()
  }
})
</script>

<template>
  <!--end:: Dashboard-->
  <div id="chart">
    <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>

  <ul>
    <DashboardViewComponent :apiData="apiBuyerCount" :countUser="apiUserCount" :countSeller="apiSellerCount"
      :countAgreed="apiStorageCount" :summaAnnouncemet="summa" :countBuyer="apiBuyerCount"/>
  </ul>
  <!--begin:: Dashboard-->
</template>