import emailjs from '@emailjs/browser';

export const initEmailJS = () => {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
};

export const sendReservationEmail = async (templateParams: {
  to_email: string;
  to_name: string;
  check_in_date: string;
  check_out_date: string;
  total_nights: number;
  total_price: number;
  property_name: string;
  property_address: string;
}) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};