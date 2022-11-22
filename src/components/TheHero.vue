<script setup>
defineProps({
    title: String,
});
</script>

<template>
    <div class="my-16 hero">
        <div class="flex-col hero-content lg:flex-row-reverse" v-if="!title">
            <picture>
                <source srcset="@/images/image-hero.webp" type="image/webp" />
                <source srcset="@/images/image-hero.avif" type="image/avif" />
                <img src="@/images/image-hero.jpg" class="max-w-full shadow-2xl rounded-2xl" alt="Mann mit Anzug" width="1099" height="785" />
            </picture>
            <div>
                <h1 class="text-6xl font-extrabold">Think Bold, <span class="text-primary">Change Position</span></h1>
                <p class="py-6 text-2xl">Von der Strategie bis zum Erfolg. TKG verbessert Ihren Webauftritt und Ihre Performance.</p>
                <a href="#kontakt" class="px-16 py-5 btn btn-primary h-14">Jetzt Kontakt aufnehmen</a>
            </div>
        </div>
        <div class="hero-content" v-if="title">
            <h1 class="text-5xl font-extrabold">{{ title }}</h1>
        </div>
    </div>
</template>
