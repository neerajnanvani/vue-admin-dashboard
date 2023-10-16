<template>
    <div class="h-[300px] w-[200px] rounded-xl border border-gray-400 bg-gray-200">
        <h4> {{ title }} </h4>
        <p> {{ subText }} </p>
    </div>
</template>

<script setup lang="ts">

defineProps({
    title: String,
    subText: String,
})

</script>

<style scoped>

div {
    height: 200px;
    width: 200px;
    border: 2px solid black;
}
</style>