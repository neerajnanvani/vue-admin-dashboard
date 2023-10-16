<template>
    <div>
        <nav class="p-3 border-b-2 border-green-400 flex">
            <h2 class="font-bold text-xl grow"> Home </h2>
            <div>
                <p class="text-md">{{userName}}</p>
                <span class="text-sm font-thin">{{userEmail}}</span>
            </div>
            <button @click="logout" class="ml-5  px-5 py-2 border border-green-200 rounded-2xl hover:border-green-500">
                Log out
            </button>
        </nav>

        <div>
            <Card title="This is title"
            sub-text="this is subtext"
            title-position="end" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/store/userStore';
import { useRouter } from 'vue-router';
import {onMounted, ref} from "vue"
import Card from '@/components/Card.vue';

const store = useUserStore();
const router = useRouter();

const userName = ref<string |null>(null);
const userEmail = ref<string|null>(null);


async function logout() {

    try {
        await store.signOutUser();
        router.push("/login")
    }
    catch(err) {
        alert(err);
    }
}

onMounted(async () => {
    const user = store.getUser;

    if(user.value === null) {
        router.push("/login");
    } else {
        userName.value = user.value.displayName;
        userEmail.value = user.value.email;
    }

})

</script>
<style lang="scss" scoped>
</style>