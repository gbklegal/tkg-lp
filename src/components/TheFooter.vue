<script setup>
const year = new Date().getFullYear();
</script>

<template>
    <footer class="p-10 bg-accent text-white full-bleed full-bleed">
        <!-- <div class="footer grid sm:grid-cols-2 lg:grid-cols-4 text-base"> -->
        <div class="footer grid sm:grid-cols-3 text-base">
            <div>
                <span class="footer-title">Kontaktiere Uns</span>
                <!-- h-7 -->
                <a class="link link-hover" href="tel:+49911893103440"><img src="@/assets/phone-call.svg" width="20" height="20" class="h-5 mr-4 inline-block" alt="" />+49 911 893 103 - 440</a>
                <!-- h-7 -->
                <a class="link link-hover" href="/"><img src="@/assets/international.svg" width="20" height="20" class="h-5 mr-4 inline-block" alt="" />www.tkgad.de</a>
                <!-- h-7 -->
                <a class="link link-hover" href="https://osm.org/go/0D6zbysDS?m" rel="noopener noreferrer" target="_blank"><img src="@/assets/location.svg" width="20" height="20" class="h-5 mr-4 inline-block" alt="" />Elsterstraße 11, 90427 Nürnberg</a>
            </div>
            <div>
                <span class="footer-title">Unsere Projekte</span>
                <a class="link link-hover" href="https://bussgeldpruefer.com">BussgeldPrüfer</a>
                <a class="link link-hover" href="https://steuermachen.de">steuermachen</a>
                <span class="link no-underline cursor-auto">curamun</span>
            </div>
            <div>
                <span class="footer-title">Rechtliche</span>
                <!-- <RouterLink class="link link-hover" :to="{ name: 'imprint' }">Impressum</RouterLink>
                <RouterLink class="link link-hover" :to="{ name: 'privacy' }">Datenschutz</RouterLink> -->
                <a class="link link-hover" href="/impressum/">Impressum</a>
                <a class="link link-hover" href="/datenschutz/">Datenschutz</a>
            </div>
            <!-- <div class="gap-4 flex flex-row flex-1 lg:justify-end w-full">
                <a class="w-14 h-14 grid place-items-center bg-white rounded-full" href="#">
                    <img class="h-7" src="@/assets/linkedin.svg" alt="@tkg - LinkedIn" />
                </a>
                <a class="w-14 h-14 grid place-items-center bg-white rounded-full" href="#">
                    <img class="h-7" src="@/assets/twitter.svg" alt="@tkg - Twitter" />
                </a>
                <a class="w-14 h-14 grid place-items-center bg-white rounded-full" href="#">
                    <img class="h-7" src="@/assets/facebook.svg" alt="@tkg - Facebook" />
                </a>
            </div> -->
        </div>
        <div class="text-center mt-8">&copy; {{ year }} TKG Verwaltungsgesellschaft GmbH</div>
    </footer>
</template>
