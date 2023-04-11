import { Container } from './styles';
import { Form } from './Form';
import { SectionTitle } from '../SectionTitle';
import { useLanguage } from '../hooks/useLanguage';
import { contact } from '../../../data';

export function FormContact() {
  const { language } = useLanguage();
  const data = contact[language];
  return (
    <Container>
      <SectionTitle title={data.title} subtitle={data.description} />
      <Form />
    </Container>
  );
}
