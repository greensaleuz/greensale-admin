<script lang="ts">
import { defineComponent } from 'vue'
import axios from '@/plugins/axios'
import { LoginDto } from '@/dtos/AuthDtos'
import { disconnect } from 'process'

export default defineComponent({
  data() {
    return {
      phone: '' as String,
      password: '' as String,
      existsError: false as boolean
    }
  },
  methods: {
    async loginAsync() {
      var loginDto = new LoginDto()
      loginDto.phoneNumber = this.phone
      loginDto.password = this.password

      var jsonContent: string = JSON.stringify(loginDto)
      var response = await axios.post('/api/auth/login', jsonContent, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.status == 200) {
        var token: string = response.data.token
        document.cookie = 'access_token=' + token + '; expires: SESSION; path=/'
        this.$router.push('/dashboard')
      } else {
        this.existsError = true
      }
    },
    dismissErrors() {
      this.existsError = false
    }
  },
  setup() {}
})
</script>

<template>
  <section class="bg-white height_ dark:bg-gray-800 for-width pt-5 pb-2">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 for-form-width"
      style="width: 430px;">
    <a class="flex mx-20 md:mr-24 my-3 m">
          <img src="../../assets/logo/SVG/Artboard.svg" class="h-12 mr-3 " alt="" />
          <p class=" text-xl pt-2   font-bold sm:text-2xl whitespace-nowrap dark:text-white">Green Sale</p>
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 w-400"
        style=" box-shadow: 0px 5px 10px gray;"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          ></h1>
          <div class="space-y-4 md:space-y-6" action="#">
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                class="text-sm font-medium text-primary-600 hover:underline dark:text-gray-400 text-white"
                >Parolni unutdingizmi?</a
              >
            </div>
            <button
              @click="loginAsync"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 p-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Kirish
            </button>
          </div>
          </div>
      </div>
      <div v-show="existsError"
        class="mt-5 flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800"
        role="alert">
        <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
          viewBox="0 0 20 20">
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <div class="ml-3 text-sm font-medium">
          phone number or password are incorrect!
        </div>

    <!-- begin :: alert-->

    <div
      v-show="existsError"
      class="flex items-center mx-auto mt-5 w-96 p-4 mb-12 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-red-800 dark:text-red-400 dark:border-red-800"
      role="alert"
    >
      <span> Phone number or Password are incorrect!</span>
      <button
        @click="dismissErrors"
        type="button"
          class="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
        data-dismiss-target="#alert-border-1"
        aria-label="Close"
      >
          <span class="sr-only">Dismiss</span>
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
        </button>
      </div>
    </div>
    </div>

    <!-- begin :: end-->
  </section>
</template>

<script lang="ts">
</script>



<style scoped>
.for-width .section {
  width: 100%;
}
.height_ {
  height: 100%;
}
.for-form-width .div {
  width: 400px;
}
</style>