<script setup>
defineProps({
    count: {
        type: Number,
        default() {
            return 5;
        },
    },
});
</script>

<template>
    <!-- <span class="inline-block w-4 h-4 bg-yellow-500 mask mask-star"></span> -->
    <img src="@/assets/star.svg" alt="Stern" class="h-4 inline-block mr-1" width="16" height="16" v-for="i in count" />
</template>
