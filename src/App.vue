<template>
 <RouterView 
    v-if="isAuthReady"
 />
</template>
<script setup lang="ts">
import { useUserStore } from './store/userStore';
import {computed} from "vue";

const store = useUserStore();

const isAuthReady = computed(() => store.isAuthReady.value);
</script>
