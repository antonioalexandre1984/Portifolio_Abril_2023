import { useState } from 'react';
import toast from 'react-hot-toast';
import { FormContainer, Input, TextArea } from './styles';
import { sendContactMail } from '../../services/sendMail';

export function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (!name || !email || !message) {
      const options = {
        style: {
          background: '#D4545D',
          color: '#ffffff'
        }
      };
      toast('Preencha todos os campos para enviar sua mensagem! 😃', options);
      setLoading(false);
      return;
    }

    try {
      await sendContactMail(name, email, message);

      const options = {
        style: {
          background: '#7AC7E3',
          color: '#ffffff'
        }
      };
      toast('Mensagem enviada com sucesso! 😃', options);

      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      const options = {
        style: {
          background: '#D4545D',
          color: '#fff'
        }
      };
      toast(
        'Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!',
        options
      );
    } finally {
      setLoading(false);
      setName('');
      setEmail('');
      setMessage('');
    }
  }

  return (
    <FormContainer data-aos="fade-up" onSubmit={handleSubmit}>
      <Input
        placeholder="Nome"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <Input
        placeholder="E-mail"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <TextArea
        placeholder="Mensagem"
        value={message}
        onChange={({ target }) => setMessage(target.value)}
      />
      <button type="submit" disabled={loading}>
        Enviar
      </button>
    </FormContainer>
  );
}
