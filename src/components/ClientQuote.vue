<script setup>
import Stars from './Stars.vue';

defineProps({
    starCount: Number,
    author: String,
    quote: String,
    imgSrc: String,
    imgAlt: String,
});
</script>

<template>
    <div class="p-8">
        <div>
            <Stars :count="starCount" />
        </div>
        <p class="pt-4 font-semibold" v-if="author">{{ author }}</p>
        <p class="pt-2">{{ quote }}</p>
        <!-- <div class="flex gap-2" v-if="imgSrc || author">
            <img class="w-16 rounded-full" :src="imgSrc" :alt="imgAlt" v-if="imgSrc" />
            <div class="font-semibold" v-if="author">{{ author }}</div>
        </div> -->
    </div>
</template>
