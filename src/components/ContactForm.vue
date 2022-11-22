<script setup>
import { ref } from 'vue';

const submitButton = ref();
const submitSuccess = ref();
const errorsList = ref();

/**
 * @param {String} content
 *
 * @returns {HTMLElement}
 */
function createListItem(content) {
    let li = document.createElement('li');
    li.className = 'border-l-2 border-error pl-2';
    li.innerText = content;
    return li;
}

function submitForm(event) {
    const button = submitButton.value;
    const successIcon = submitSuccess.value;
    const errorList = errorsList.value;
    const url = 'https://api.gbk-rae.de/contact-form/?api_key=' + import.meta.env.VITE_CONTACT_FORM_API_KEY;
    const formData = new FormData(event.target);

    errorList.innerHTML = '';
    button.classList.add('loading');

    fetch(url, {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(response => {
            button.classList.remove('loading');

            if (response.success === true) {
                event.target.reset();
                successIcon.classList.replace('hidden', 'inline-block');
                setTimeout(() => {
                    successIcon.classList.replace('inline-block', 'hidden');
                }, 3000);
                errorList.classList.add('hidden');

                return;
            }

            if (response.error.status === 404) {
                errorList.classList.remove('hidden');
                response.error.message.forEach(entry => {
                    errorList.appendChild(createListItem(entry));
                });
            }
        })
        .catch(error => {
            button.classList.remove('loading');
            alert('Fehler beim Versenden des Formulars. Sollte der Fehler erneut auftauchen schreiben Sie bitte eine E-Mail an dialog@tkgad.com.');
        });
}
</script>

<template>
    <form class="bg-white rounded-lg p-8 flex flex-col gap-8 sm:w-96 max-w-full" action="" @submit.prevent="submitForm">
        <div class="font-bold text-2xl">Senden Sie uns eine Nachricht</div>
        <ul class="hidden" ref="errorsList"></ul>
        <input type="text" name="name" placeholder="Ihr Name" class="rounded-none border-b border-gray-400 pb-2 focus:border-black outline-none" />
        <input type="email" name="email" placeholder="E-Mail Adresse" class="rounded-none border-b border-gray-400 pb-2 focus:border-black outline-none" />
        <input type="tel" name="phone" placeholder="Telefonnummer" class="rounded-none border-b border-gray-400 pb-2 focus:border-black outline-none" />
        <textarea name="message" placeholder="Ihre Nachricht" class="rounded-none h-24 resize-y border-b border-gray-400 pb-2 focus:border-black outline-none"></textarea>
        <button type="submit" class="btn btn-primary w-full" ref="submitButton"><img src="@/assets/check.svg" class="w-4 h-4 mr-2 hidden" width="16" height="16" ref="submitSuccess" />Nachricht senden</button>
        <input type="hidden" name="contact_form_scope" value="tkg" />
    </form>
</template>
