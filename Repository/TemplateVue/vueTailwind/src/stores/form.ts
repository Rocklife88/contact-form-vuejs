import { defineStore } from 'pinia';

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  queryType: string;
  message: string;
  consent: boolean;
}

export const useFormStore = defineStore('form', {
  state: (): FormData => ({
    firstName: '',
    lastName: '',
    email: '',
    queryType: '',
    message: '',
    consent: false,
  }),
  actions: {
    updateForm(data: FormData) {
      this.$state = data;
    },
  },
});
