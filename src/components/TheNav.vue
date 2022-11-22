<script setup>
import { ref, onMounted } from 'vue';

const openMenuButtonRef = ref();
const closeMenuButtonRef = ref();
const mobileMenuRef = ref();

onMounted(() => {
    const openMenuButton = openMenuButtonRef.value;
    const closeMenuButton = closeMenuButtonRef.value;
    const mobileMenu = mobileMenuRef.value;

    const _class = 'shadow-lg';

    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 0) {
            nav.classList.add(_class);
            // mobileMenu.classList.add(_class);
            return;
        }
        nav.classList.remove(_class);
        // mobileMenu.classList.remove(_class);
    });

    // window.addEventListener('resize', () => {
    //     if (window.innerWidth > 768) return;

    //     console.log('mobile menu');
    // });

    function openMenu() {
        openMenuButton.classList.add('hidden');
        closeMenuButton.classList.remove('hidden');
        mobileMenu.classList.remove('hidden');
    }
    function closeMenu() {
        closeMenuButton.classList.add('hidden');
        openMenuButton.classList.remove('hidden');
        mobileMenu.classList.add('hidden');
    }

    openMenuButton.addEventListener('click', openMenu);

    closeMenuButton.addEventListener('click', closeMenu);

    let liAnchors = mobileMenu.querySelectorAll('li a');
    liAnchors.forEach(anchor => {
        anchor.addEventListener('click', closeMenu);
    });
});
</script>

<template>
    <div class="fixed top-0 left-0 right-0 z-10 p-4 lg:p-6 transition-shadow bg-base-100 navbar max-w-full">
        <div class="w-full max-w-full lg:max-w-6xl lg:px-4 lg:mx-auto">
            <div class="flex-1">
                <a href="/#top" class="text-xl normal-case btn btn-ghost">
                    <img class="h-8" src="@/assets/tkg-logo.svg" alt="TKG" width="75" height="32" />
                </a>
            </div>
            <div class="flex-none">
                <!-- https://graphemica.com/%E2%98%B0 -->
                <img class="cursor-pointer w-7 h-7 lg:hidden" src="@/assets/menu-burger.svg" alt="=" width="28" height="28" ref="openMenuButtonRef" />
                <img class="cursor-pointer w-7 h-7 lg:hidden hidden" src="@/assets/cross.svg" alt="x" width="28" height="28" ref="closeMenuButtonRef" />
                <ul class="menu absolute top-full left-0 px-8 pb-6 bg-base-100 w-full hidden lg:w-fit lg:p-0 lg:relative lg:menu-horizontal lg:gap-8" ref="mobileMenuRef">
                    <li class="border-t-2 lg:border-none">
                        <a href="/#services">Services</a>
                    </li>
                    <li class="border-t-2 lg:border-none">
                        <a href="/#mission">Mission</a>
                    </li>
                    <li class="border-t-2 lg:border-none">
                        <a href="/#projekte">Projekte</a>
                    </li>
                    <li class="border-t-2 lg:border-none">
                        <a href="/#team">Team</a>
                    </li>
                    <li class="mt-4 lg:mt-0">
                        <a href="/#kontakt" class="btn btn-primary text-primary-content w-fit">Kontakt</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
