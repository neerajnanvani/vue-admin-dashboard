<template>
 <RouterView 
    v-if="isAuthReady"
 />
 <!-- Simple loading screen -->
 <div v-else  class="bg-green-600 h-screen w-screen flex items-center justify-center">
     <h1 class="animate-pulse text-5xl font-bold text-white">Loading</h1>
 </div>
</template>
<script setup lang="ts">
import { useUserStore } from './store/userStore';
import {computed} from "vue";
const store = useUserStore();

// show pages when auth is completed
const isAuthReady = computed(() => store.isAuthReady.value);
</script>
