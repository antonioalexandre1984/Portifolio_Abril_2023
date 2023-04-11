/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
import emailjs from 'emailjs-com'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css';
import { FormContainer, Input, TextArea, InputContainer } from './styles';
import { useLanguage } from '../hooks/useLanguage';
import { contact, formHeroData } from '../../../data';


interface EmailParams {
  name: string;
  email: string;
  message: string;
}

interface Contact {
  name: string;
  email: string;
  message: string;
}

export function Form() {
  const { language } = useLanguage();
  const data = contact[language];

  const { register, handleSubmit, formState: { errors }, reset } = useForm<Contact>();

  const [loading, setLoading] = useState(false);

  async function sendContactMail({ name, email, message }: EmailParams) {
    const serviceId = 'service_voek5qi';
    const templateId = 'template_9gtqnhg';
    const userId = 'EvBdnGxQKl1p-deY5';

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name,
          email,
          message
        },
        userId
      );
      Store.addNotification({
        title: data.notification.title,
        message: data.notification.messageSuccess,
        type: "success",
        insert: "bottom",
        container: "bottom-left",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        },

      });
      console.log('E-mail enviado com sucesso!');
    } catch (error) {
      console.error('Ocorreu um erro ao tentar enviar o e-mail:', error);
      throw error;
    }
  }

  async function onSubmit(contactInfo: Contact) {
    setLoading(true);

    if (!contactInfo.name.trim() || !contactInfo.email.trim() || !contactInfo.message.trim()) {
      Store.addNotification({
        title: "Warning!",
        message: "Please fill in all the required fields.",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
      setLoading(false);
      return;
    }


    if (!/\S+@\S+\.\S+/.test(contactInfo.email)) {
      Store.addNotification({
        title: "Error!",
        message: "Please enter a valid email address.",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        }
      });
      setLoading(false);
      return;
    }

    try {
      await sendContactMail(contactInfo);

      reset({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      Store.addNotification({
        title: "Error!",
        message: "Failed to authenticate user!",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true
        },

      });

    } finally {
      setLoading(false);
    }
  }

  return (
    <FormContainer data-aos="fade-up" onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <InputContainer>
          <Input
            placeholder={data.name}
            {...register('name', { required: true })}
            hasError={!!errors.name}
          />
          {errors.name && <span>Preencha o campo nome.</span>}
        </InputContainer>
        <InputContainer>
          <Input
            placeholder={data.email}
            {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
            hasError={!!errors.email}
          />
          {errors.email && <span>Preencha um email válido.</span>}
        </InputContainer>
      </div>
      <InputContainer>
        <TextArea
          placeholder={data.message}
          {...register('message', { required: true })}
          hasError={!!errors.message}
        />
        {errors.message && <span>Preencha o campo mensagem.</span>}
      </InputContainer>

      <button type="submit" disabled={loading}>
        {data.button}
      </button>


    </FormContainer>
  );
}
