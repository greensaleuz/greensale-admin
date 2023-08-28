<script lang="ts">
import axios from '@/plugins/axios'
import { defineComponent } from "vue";

export default defineComponent({
    components: {},
    props: {
        user: Object,
    },
    data() {
        return {
            userData: [],
        }
    },
    methods: {
        async load() {
            // const res = await axios.get(`/api/admin/users${this.user.id}`)
            // this.userData = res
        },

    },
    mounted() {
        this.load();
    }
});
</script>
<template>
    <div class="flex-wrap">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text align-middle text-gray-500 dark:text-gray-400">
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="w-32 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ user.firstName }}
                        </th>
                        <td class="w-32 px-6 py-4">
                            {{ user.lastName }}
                        </td>
                        <td class="w-32 px-6 py-4">
                            {{ user.phoneNumber }}
                        </td>
                        <td class="w-32 px-6 py-4">
                            {{ user.region }}
                        </td>
                        <td class="w-32 px-6 py-4">
                            <router-link :to="`users/${user.id}`"
                                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center mx-2 mt-2 mb-3">{{
                                    $t('koproq malumot') }}
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>