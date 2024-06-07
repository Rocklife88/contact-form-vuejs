import axios from 'axios';
import { FormData } from '../types';

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const userID = import.meta.env.VITE_EMAILJS_USER_ID;

export const sendEmail = async (data: FormData) => {
  const emailData = {
    service_id: serviceID,
    template_id: templateID,
    user_id: userID,
    template_params: {
      from_name: `${data.firstName} ${data.lastName}`,
      from_email: data.email,
      message: data.message,
      query_type: data.queryType,
    },
  };

  try {
    const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', emailData);
    return response;
  } catch (error) {
    throw error;
  }
};
