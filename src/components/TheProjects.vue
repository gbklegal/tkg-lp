<script setup>
import { ref, onMounted } from 'vue';

const swiperContainerRef = ref();
const swiperNavNextRef = ref();
const swiperNavPrevRef = ref();

let swiperMin = ref(0);
let swiperMax = ref(0);
let swiperI = ref(0);

/**
 * Simple Slider - Carousel main idea
 * I implemented the resposibility.
 * @source https://webdesign.tutsplus.com/tutorials/how-to-build-a-simple-carousel-with-vanilla-javascript--cms-41734
 */
onMounted(() => {
    const swiperContainer = swiperContainerRef.value;
    const swiperNavNext = swiperNavNextRef.value;
    const swiperNavPrev = swiperNavPrevRef.value;
    const slidesCount = swiperContainer.querySelectorAll('.slide').length - 1;
    const slide = swiperContainer.querySelector('.slide');

    swiperMax.value = slidesCount;
    swiperI.value = 0;
    let scrollDistance = 0;
    let coolDown = false;

    function setScrollDistance() {
        scrollDistance = (swiperContainer.scrollWidth - swiperContainer.clientWidth) / slidesCount;
    }

    window.addEventListener('resize', () => {
        setScrollDistance();

        swiperContainer.scrollLeft = scrollDistance * swiperI.value;
    });
    setScrollDistance();

    swiperNavNext.addEventListener('click', () => {
        // add cooldown to prevent double click
        if (coolDown) return;
        coolDown = true;
        setTimeout(() => (coolDown = false), 200);

        if (swiperI.value >= swiperMax.value) return;
        swiperI.value++;
        swiperContainer.scrollLeft += scrollDistance;
    });
    swiperNavPrev.addEventListener('click', () => {
        // add cooldown to prevent double click
        if (coolDown) return;
        coolDown = true;
        setTimeout(() => (coolDown = false), 200);

        if (swiperI.value <= swiperMin.value) return;
        swiperI.value--;
        swiperContainer.scrollLeft -= scrollDistance;
    });
});
</script>

<template>
    <div class="py-12 mb-14 overflow-x-hidden" id="projekte">
        <h2 class="mb-12 text-4xl font-semibold text-center underline underline-offset-8 decoration-1">Unsere Referenzprojekte</h2>
        <div class="flex items-center">
            <img class="h-10 cursor-pointer" :class="swiperMin === swiperI ? 'opacity-25 pointer-events-none' : ''" src="@/assets/angle-left.svg" alt="<" width="40" height="40" ref="swiperNavPrevRef" />
            <div class="swiper-container px-4 gap-8" ref="swiperContainerRef">
                <picture class="slide">
                    <source srcset="@/images/project-steuermachen.avif" type="image/avif" />
                    <source srcset="@/images/project-steuermachen.webp" type="image/webp" />
                    <img src="@/images/project-steuermachen.png" alt="steuermachen" width="576" height="260" loading="lazy" />
                </picture>
                <picture class="slide">
                    <source srcset="@/images/project-bussgeldpruefer.avif" type="image/avif" />
                    <source srcset="@/images/project-bussgeldpruefer.webp" type="image/webp" />
                    <img src="@/images/project-bussgeldpruefer.png" alt="BussgeldPrüfer" width="576" height="260" loading="lazy" />
                </picture>
                <picture class="slide">
                    <source srcset="@/images/project-curamun.avif" type="image/avif" />
                    <source srcset="@/images/project-curamun.webp" type="image/webp" />
                    <img src="@/images/project-curamun.png" alt="curamun" width="576" height="260" loading="lazy" />
                </picture>
            </div>
            <img class="h-10 cursor-pointer" :class="swiperMax === swiperI ? 'opacity-25 pointer-events-none' : ''" src="@/assets/angle-right.svg" alt=">" width="40" height="40" ref="swiperNavNextRef" />
        </div>
    </div>
</template>

<style scoped>
.swiper-container {
    --w: 50%;

    width: 100%;
    display: flex;
    overflow: scroll;
    scroll-behavior: smooth;
    list-style: none;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
}

.swiper-container::-webkit-scrollbar {
    background: transparent; /* Chrome/Safari/Webkit */
    width: 0px;
}

.swiper-container .slide {
    width: calc(var(--w) - 32px);
    height: 100%;
    flex: 1 0 calc(var(--w) - 32px);
}

@media (max-width: 768px) {
    .swiper-container {
        --w: 100%;
    }
}
</style>
