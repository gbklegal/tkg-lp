<template>
    <div class="grid md:grid-cols-2 mb-14 full-bleed box-shadow-primary 1x:rounded-lg overflow-hidden" id="team">
        <div class="grid place-items-center bg-primary text-primary-content p-14">
            <div class="md:text-right">
                <h2 class="mb-6 text-4xl font-semibold underline underline-offset-8 decoration-1">Unser Team</h2>
                <p class="text-3xl">Wir unterstützen Sie dabei, Ihre Innovation ganz nach vorne zu bringen. Als Ihr Partner in Sachen Performance&shy;optimierung haben wir uns so aufgestellt, Ihre Erwartungen zu erfüllen. Unser Team stellt alle wichtigen Kompetenzen bereit:<br />Von Marketing bis zu Strategen und Entwicklern!</p>
            </div>
        </div>
        <picture>
            <source srcset="@/images/image-team.webp" type="image/webp" />
            <source srcset="@/images/image-team.avif" type="image/avif" />
            <img class="block md:object-cover md:h-full" src="@/images/image-team.jpg" alt="Team" width="1047" height="962" loading="lazy" />
        </picture>
    </div>
</template>
