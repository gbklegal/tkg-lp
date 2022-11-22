<script setup>
import TheFooter from '@/components/TheFooter.vue';
import TheNav from '@/components/TheNav.vue';

document.addEventListener('DOMContentLoaded', function () {
    cookieconsent.run({
        notice_banner_type: 'simple',
        consent_type: 'express',
        palette: 'light',
        language: 'de',
        page_load_consent_levels: ['strictly-necessary'],
        notice_banner_reject_button_hide: true,
        preferences_center_close_button_hide: false,
        page_refresh_confirmation_buttons: false,
        website_name: 'TKG Verwaltungsgesellschaft GmbH',
        website_privacy_policy_url: location.origin + '/datenschutz#cookies',
    });
});
</script>

<template>
    <div class="pt-10 lg:max-w-6xl lg:mx-auto lg:pt-28 flex flex-col h-full">
        <TheNav />
        <div class="flex-1">
            <RouterView />
        </div>
        <TheFooter />
    </div>
</template>

<style>
@font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(./fonts/Inter-Regular.ttf) format('truetype');
}
@font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(./fonts/Inter-SemiBold.ttf) format('truetype');
}
@font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(./fonts/Inter-Bold.ttf) format('truetype');
}
@font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url(./fonts/Inter-ExtraBold.ttf) format('truetype');
}
</style>
