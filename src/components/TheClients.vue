<script setup>
import ClientQuote from './ClientQuote.vue';
</script>

<template>
    <div class="mt-2 mb-14 p-4">
        <h2 class="mb-12 text-4xl font-semibold text-center">Das sagen unsere Kunden</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 flex-nowrap">
            <ClientQuote :starCount="5" author="CEO von steuermachen" quote="Wir arbeiten bereits seit einiger Zeit mit TKG zusammen und sind vollkommen zufrieden. Sie haben uns auf viele neue Ideen gebracht. Die Kommunikation und der Service waren Top.  Wir werden auch weiterhin gerne mit TKG zusammenarbeiten." />
            <ClientQuote :starCount="5" author="CEO von BussgeldPrüfer" quote="Unsere Seite hatte einige Bugs und wir waren nie übermäßig zufrieden. TKG hat uns geholfen, das richtige Design und die passende Strategie zu finden. Jetzt freuen wir uns, dass wir unser Marketing in fähige Hände legen können." />
            <ClientQuote :starCount="5" author="DH RA" quote="Ich habe mit TKG eine Geschäftsidee entwickelt. Die Zusammenarbeit war sehr hilfreich, da sie mich an wichtige Aspekte erinnert haben. Ich freue mich schon auf die weitere Zusammenarbeit und die Umsetzung meiner Idee." />
            <ClientQuote :starCount="5" author="CÜ" quote="Da ich selbst kein App-Entwickler bin, legte ich diese Aufgabe in die Hände von TKG. Sie haben sich um die Entwicklung und Vermarktung meiner App gekümmert, sodass ich mich auf die Unternehmensführung konzentrieren konnte. Die weitere Zusammenarbeit ist geplant." />
        </div>
    </div>
</template>
