import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineLinkedin
} from 'react-icons/ai';
import { Container } from './styles';

export function Footer() {
  function handleRedirect(url: string) {
    window.open(url, '_blank');
  }

  function handleScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <Container>
      <div className="container">
        <button type="button" onClick={() => handleScrollTop()}>
          Voltar ao Topo
        </button>
        <section className="">
          <AiOutlineTwitter
            onClick={() =>
              handleRedirect('https://twitter.com/Antonio59689521')
            }
          />
          <AiOutlineGithub
            onClick={() =>
              handleRedirect('https://github.com/antonioalexandre1984')
            }
          />
          <AiOutlineLinkedin
            onClick={() =>
              handleRedirect('https://www.linkedin.com/in/antonioacs/')
            }
          />
        </section>
      </div>
    </Container>
  );
}
