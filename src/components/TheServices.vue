<script setup>
import ServiceCard from './ServiceCard.vue';
</script>

<template>
    <div class="p-4 mb-12" id="services">
        <h2 class="text-3xl font-bold text-center underline underline-offset-8 decoration-1 mb-9">Unsere Services</h2>
        <div class="grid gap-6 sm:grid-cols-2">
            <ServiceCard title="Webseitenoptimierung" content="Ein ansprechendes Screendesign entscheidet über den Umsatz mehr denn je! Wir entwickeln für Sie einen vollständigen Plan, Ihre Kunden optimal anzusprechen. Über Ihren Webauftritt müssen Sie sich keine Gedanken mehr machen. Auch die Wartungen der Webseite werden von uns übernommen." />
            <ServiceCard title="Social Media Marketing" content="Je nach Zielgruppe wird das Social Media genutzt, um Ihre Kunden anzusprechen. Die richtige Ansprache ist dabei essenziell. Sie erhalten über uns einen ausgereiften Social Media Plan für jede Plattform. Zudem übernehmen wir sämtliche Aufgaben im Bereich Social Media Marketing, um Ihre Bekanntheit zu steigern." />
            <ServiceCard title="Suchmaschinenoptimierung" content="Eine Positionierung auf der ersten Seite in den Suchmaschinen ist für Webseiten bei wichtigen Keywords besonders wichtig für den Erfolg. Dabei ist eine bezahlte Anzeige nicht immer notwendig. Wir generieren Ihnen Aufmerksamkeit, indem wir für Sie strategisch gute Platzierungen erreichen. Hierfür pflegen, optimieren und produzieren wir Ihre Inhalte durch Content Marketing." />
            <ServiceCard title="Newsletter Marketing" content="Zur Kundenbindung und Absatzsteigerung bedarf es mehr als nur eine gute Webseite. Auch im Nachgang soll der Kunde Sie weiter wahrnehmen und besser kennenlernen. Wir bauen für Sie einer Reichweite auf und stärken die Kundenloyalität durch einen regelmäßigen Newsletter." />
            <ServiceCard title="App-Konzeptionierung" content="Wir konzentrieren uns darauf, was Ihre Kunden wollen. Um Ihren Erfolg zu steigern, benötigt es ein Konzept und eine sinnvolle Nutzung einer App. Der Prozess zur erfolgreichen App beginnt bereits vor der Entwicklung. Wir konzipieren Ihre App für Ihre Nutzer." />
            <ServiceCard title="App-Entwicklung" content="Sie müssen keine Programmierfähigkeiten haben, um eine App anzubieten. Für die Entwicklung einer App benötigt es umfangreiche Fähigkeiten und Erfahrungen, die wir Ihnen bieten können. Wir entwickeln Ihre App und schneiden sie auf die Kundenbedürfnisse an." />
            <ServiceCard title="Projektmanagement" content="Sie haben bereits ein Projekt und benötigen eine Planung und Organisation. Sie können auf unsere Hilfe zählen. Von Bauprojekten über Facility Management bis hin zu klassischen und modernen Geschäftsmodellen, wir unterstützen bei der Organisation und beraten Sie" />
            <ServiceCard title="Erarbeitung und Umsetzung einer neuen Geschäftsidee" content="Für eine erfolgreiche Umsetzung einer Geschäftsidee bedarf es Vorarbeit. Analysen und Planungen sind für den Erfolg essenziell. Gemeinsam erarbeiten wir eine vielversprechende Geschäftsidee und unterstützen Sie bei der Umsetzung." />
        </div>
    </div>
</template>
