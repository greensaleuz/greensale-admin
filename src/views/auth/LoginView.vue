<script lang="ts">
import { defineComponent } from 'vue'
import axios from "@/plugins/axios"
import { Logindto } from '@/dtos/AuthDtos'
export default defineComponent({
  data(){
    return{
      phone: "" as String,
      pasword: "" as String
    }
  },
  methods:{
    async loginAsync(){
       var loginDto = new Logindto();
       logindto.phoneNumber=this.phone;
       loginDto.password=this.password;
      
       var jsonContent:string=JSON.stringify(loginDto);
       var response=await axios.post("/api/auth/login",jsonContent,{
        headers:{
          'Content-Type':'application/json'
        }
       });
       var token:string=response.data.token;
       document.cookie="access_token="+token+"; expires: Session;path=/" ;
    }
  },
  setup() {
    
  },
})
</script>



<template>
  <section class="bg-gray-50 dark:bg-gray-900 for-width">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 for-form-width"
      style="width: 400px"
    >
      <a
        href="#"
        class="flex items-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img class="w-8 h-8 mr-2" src="../../assets/logo.svg" alt="logo" />
        Green Sale
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 w-400"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          ></h1>
          <div class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Telefon raqam</label
              >
              <input
                type="tel"
                v-model="phone"
                class="bg-gray-50 w-400 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="+998 ** *** ** **"
              />
            </div>
            <div>
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Parol</label
              >
              <input
                type="password"
                v-model="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300"
                    >Eslab qolinsin</label
                  >
                </div>
              </div>
              <a
                href="#"
                class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >Parolni unutdingizmi?</a
              >
            </div>
            <button
              @click="loginAsync"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Kirish
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">


</script>



<style scoped>
.for-width .section {
  width: 100%;
}

.for-form-width .div {
  width: 400px;
}
</style>