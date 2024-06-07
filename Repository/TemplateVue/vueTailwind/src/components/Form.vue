<template>
  <form @submit.prevent="handleSubmit" class="max-w-lg w-full mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">Contact Us</h2>
    
    <div class="mb-4">
      <label for="firstName" class="block text-gray-700">First Name *</label>
      <input v-model="formData.firstName" id="firstName" type="text" required class="w-full mt-2 p-2 border rounded-md" :class="{'border-red-500': $v.formData.firstName.$invalid && $v.formData.firstName.$dirty}" />
      <p v-if="$v.formData.firstName.$invalid && $v.formData.firstName.$dirty" class="text-red-500 text-sm mt-1">This field is required</p>
    </div>
    
    <div class="mb-4">
      <label for="lastName" class="block text-gray-700">Last Name *</label>
      <input v-model="formData.lastName" id="lastName" type="text" required class="w-full mt-2 p-2 border rounded-md" :class="{'border-red-500': $v.formData.lastName.$invalid && $v.formData.lastName.$dirty}" />
      <p v-if="$v.formData.lastName.$invalid && $v.formData.lastName.$dirty" class="text-red-500 text-sm mt-1">This field is required</p>
    </div>
    
    <div class="mb-4">
      <label for="email" class="block text-gray-700">Email Address *</label>
      <input v-model="formData.email" id="email" type="email" required class="w-full mt-2 p-2 border rounded-md" :class="{'border-red-500': $v.formData.email.$invalid && $v.formData.email.$dirty}" />
      <p v-if="$v.formData.email.$invalid && $v.formData.email.$dirty" class="text-red-500 text-sm mt-1">Please enter a valid email address</p>
    </div>
    
    <div class="mb-4">
      <label class="block text-gray-700">Query Type *</label>
      <div class="mt-2 flex">
        <label class="inline-flex items-center mr-4">
          <input v-model="formData.queryType" type="radio" value="General Enquiry" class="form-radio" />
          <span class="ml-2">General Enquiry</span>
        </label>
        <label class="inline-flex items-center">
          <input v-model="formData.queryType" type="radio" value="Support Request" class="form-radio" />
          <span class="ml-2">Support Request</span>
        </label>
      </div>
      <p v-if="$v.formData.queryType.$invalid && $v.formData.queryType.$dirty" class="text-red-500 text-sm mt-1">Please select a query type</p>
    </div>
    
    <div class="mb-4">
      <label for="message" class="block text-gray-700">Message *</label>
      <textarea v-model="formData.message" id="message" required class="w-full mt-2 p-2 border rounded-md" :class="{'border-red-500': $v.formData.message.$invalid && $v.formData.message.$dirty}"></textarea>
      <p v-if="$v.formData.message.$invalid && $v.formData.message.$dirty" class="text-red-500 text-sm mt-1">This field is required</p>
    </div>
    
    <div class="mb-4">
      <label class="inline-flex items-center">
        <input v-model="formData.consent" id="consent" type="checkbox" class="form-checkbox" />
        <span class="ml-2">I consent to being contacted by the team *</span>
      </label>
      <p v-if="$v.formData.consent.$invalid && $v.formData.consent.$dirty" class="text-red-500 text-sm mt-1">To submit this form, please consent to being contacted</p>
    </div>
    
    <button type="submit" class="w-full bg-green-700 text-white py-2 rounded-md">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { defineEmits, reactive } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';
import { FormData } from '../api/interfaces';

const emit = defineEmits(['submitForm']);

const formData = reactive<FormData>({
  firstName: '',
  lastName: '',
  email: '',
  queryType: '',
  message: '',
  consent: false,
});

const rules = {
  formData: {
    firstName: { required },
    lastName: { required },
    email: { required, email },
    queryType: { required },
    message: { required },
    consent: { required }
  }
};

const $v = useVuelidate(rules, { formData });

const handleSubmit = () => {
  $v.value.$touch();
  if (!$v.value.$invalid) {
    emit('submitForm', formData);
  }
};
</script>

<style scoped>
/* Aggiungi qui i tuoi stili se necessario */
</style>
