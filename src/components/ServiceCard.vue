<script setup>
import { ref, onBeforeMount } from 'vue';

const props = defineProps({
    title: String,
    content: String,
});

let toggleText = ref(true);
let previewText = ref('');
let fullText = ref('');

onBeforeMount(() => {
    fullText.value = props.content;
    const entries = fullText.value.split(' ');

    const previewEntries = entries.filter((entry, index) => {
        if (index >= 21) return;

        return (entry += ' ');
    }, '');

    previewText.value = previewEntries.join(' ') + '...';
});
</script>

<template>
    <div class="shadow-md card bg-base-100">
        <div class="card-body">
            <h2 class="card-title">{{ title }}</h2>
            <div>{{ toggleText ? previewText : fullText }}</div>
            <div class="mt-6">
                <span class="link link-hover text-primary" @click="toggleText = !toggleText">{{ toggleText ? 'mehr' : 'weniger' }} lesen <img class="w-5 h-5 inline" src="@/assets/arrow-right.svg" width="20" height="20" /></span>
            </div>
        </div>
    </div>
</template>
