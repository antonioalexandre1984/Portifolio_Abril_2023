import axios from 'axios';

export const sendContactMail = async (
  name: string,
  sendMail: string,
  message: string
) => {
  const data = {
    name,
    sendMail,
    message
  };

  try {
    return axios.post('/api/contact', data);
  } catch (e) {
    return e;
  }
};
