<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import axios from 'axios';
import { getToken } from '../../helpers/TokenHelper';
const route = useRoute()
const router = useRouter()
const userId = (route.params.id)
const userData = ref<any>([])
const token = getToken();

// hooks
onMounted(async () => {
    await fetchUser()
})

// functions
async function fetchUser() {
    try {
        const res = await axios.get(`http://95.130.227.68:8080/api/admin/users/${userId}`, {
            headers: {
                "Authorization": "Bearer " + token
            }
        })
        userData.value = res.data
    } catch (error) {
        console.log(error);
    }
}

async function deleteUser(id: number) {
    try {
        const response = await axios.delete(`http://95.130.227.68:8080/api/admin/users/${id}`, {
            headers: {
                "Authorization": "Bearer " + token
            }
        });
        router.push('/users')
    } catch (error) {
        console.log(error);

    }

}
</script>
<template>
    <div class="flex-wrap">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text align-middle text-gray-500 dark:text-gray-400">
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td v-for="info in userData" :key="info.id" class="w-32 px-6 py-4">
                            {{ info }}
                        </td>
                        <td class="w-32 px-6 py-4">
                            <button type="button" @click="deleteUser(userData.id)"
                                class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center mx-2 mt-2 mb-3">
                                delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>