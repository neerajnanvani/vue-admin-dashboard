<template>
    <div class="rounded-xl border border-gray-100 shadow-xl p-1">
        <h4 
            :class="[titlePosition === 'center' ? 'text-center': 
            (titlePosition === 'end' ? 'text-right' : 'text-left'), 
            'text-xl font-semibold py-3' ]"
        > 
            {{ title }} 
        </h4>
        <p class="border-b border-gray-300 text-sm font-extralight"> {{ subText }} </p>
        <p class="text-center text-base font-medium py-5">
            {{ content }}
        </p>
        <div class="flex justify-around py-2 border-t border-gray-300">
            <button v-if="btn1Text" class="border border-green-200 p-2 rounded-xl">
                {{ btn1Text }}
            </button>
            <button v-if="btn2Text" class="border border-green-200 p-2 rounded-xl">
                {{ btn2Text }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">

type titlePositionType =  "center" | "start" | "end";

defineProps<{
    title: string,
    subText?: string,
    titlePosition?: titlePositionType,
    content?: string,
    btn1Text?:string,
    btn2Text?: string,
}>()

</script>

<style scoped>
</style>