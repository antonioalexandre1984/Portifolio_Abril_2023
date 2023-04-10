/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
import { Navlink } from './Navlink';
import { Container, ButtonContainer } from './styles';

interface HeaderProps {
  setLanguage: (language: string) => void;
}

export function Header({ setLanguage }: HeaderProps) {
  return (
    <Container>
      <ul>
        <Navlink title="Home" path="/" />
        <Navlink title="Projects" path="/projects" />
      </ul>
      <ButtonContainer>
        <button onClick={() => setLanguage('pt-br')}>Port</button>
        <button onClick={() => setLanguage('en-us')}>Eng</button>
      </ButtonContainer>
    </Container>
  );
}
