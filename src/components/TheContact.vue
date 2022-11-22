<script setup>
import ClientQuote from './ClientQuote.vue';
import ContactForm from './ContactForm.vue';
</script>

<template>
    <div class="py-10 px-4 bg-primary full-bleed" id="kontakt">
        <h2 class="text-white mb-4 text-4xl font-semibold">Wir freuen uns darauf, von Ihnen zu hören / We are looking forward to hearing from you</h2>
        <div class="flex flex-col gap:10 lg:gap-24 lg:flex-row">
            <div class="lg:flex-1 mb-4 lg:mb-0">
                <div class="bg-white rounded-lg sm:w-96 lg:mt-20">
                    <ClientQuote :starCount="5" quote="Die Prozesssteuerung ist super. Ich freue mich darauf, mit der TKG weiterzuarbeiten und durchzustarten." />
                </div>
            </div>
            <ContactForm />
        </div>
    </div>
</template>

<style scoped>
/* #kontakt {
    position: relative;
}

#kontakt::before {
    z-index: -1;
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 520px;
    height: 514px;
    background-image: url('@/assets/ellipses.svg');
    background-repeat: no-repeat;
} */
</style>
