import { defineStore } from 'pinia'
import {ref, computed} from "vue"

export const useUserStore = defineStore('user', () => {
    const user = ref(null);

    const getUser = computed(() => user);
    return {getUser};
})