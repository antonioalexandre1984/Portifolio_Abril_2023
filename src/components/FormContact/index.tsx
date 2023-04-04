import { Container } from './styles';
import { Form } from './Form';
import { SectionTitle } from '../SectionTitle';

export function FormContact() {
  return (
    <Container>
      <SectionTitle
        title="Vamos conversar?"
        subtitle="Preencha o formulário abaixo que entrarei em contato com você."
      />
      <Form />
    </Container>
  );
}
