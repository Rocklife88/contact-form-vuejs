<template>
  <div class="flex flex-col items-center justify-center ">
   
    <Form @submitForm="handleFormSubmit" />
    <div v-if="emailSent" class="mt-4 p-4 bg-green-500 text-white rounded">
      Email inviata correttamente!
    </div>
    <div v-if="emailError" class="mt-4 p-4 bg-red-500 text-white rounded">
      Errore nell'invio dell'email.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { sendEmail } from '../api/email';
import Form from '@/components/Form.vue';
import { FormData } from '../api/interfaces';

const formData = ref<FormData>({
  firstName: '',
  lastName: '',
  email: '',
  queryType: '',
  message: '',
  consent: false,
});
const emailSent = ref(false);
const emailError = ref(false);

const handleFormSubmit = async (data: FormData) => {
  formData.value = data;
  try {
    await sendEmail(data);
    emailSent.value = true;
    emailError.value = false;
  } catch (error) {
    emailSent.value = false;
    emailError.value = true;
    console.error('Error sending email:', error);
  }
};
</script>

<style scoped>
/* Aggiungi qui i tuoi stili se necessario */
</style>
