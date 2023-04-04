import { Navlink } from './Navlink';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <ul>
        <Navlink title="Home" path="/" />
        <Navlink title="Projects" path="/projects" />
      </ul>
    </Container>
  );
}
