/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-comment-textnodes */
import { BsWhatsapp } from 'react-icons/bs'
import Link from 'next/link';
import { Container, TextContainer, InfosContainer, CodeItem, VideoContainer } from './styles';
import photo2 from '../../assets/photo2.png';

export function HomeHero() {
  return (
    <Container data-aos='fade-up'>
      <div className="">
        <img src={photo2} alt="" className="minha foto" />
        {/* videos do youtube */}
        <VideoContainer>
          <iframe
            width="400"
            height="300"
            src="https://www.youtube.com/embed/j9y94oEJMQw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <h1>Meu Video Pitch</h1>
        </VideoContainer>
      </div>
      <div className="">
        <TextContainer>
          <h1>Olá
            <Link href='/'>
              <a>
                <BsWhatsapp
                  size='80px'
                  color='#25D366'
                  style={{ marginLeft: '20px' }}
                />
              </a>
            </Link>
          </h1>

          <h2>Sou o Alexandre</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos='zoom-in'>
            <span className="comment">// Informações Pessoais</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Antonio Alexandre</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Cordeiro</span>
            </div>
            <div>
              Idade: <span className="blue">38 anos</span>
            </div>

            <div>
              Residência: <span className="blue">Campina Grande - PB</span>
            </div>
            {'\u007D'} {/* código unicode para chaves */}
          </CodeItem>

          <CodeItem data-aos="zoom-in">
            <span className="comment">// Formação Academica</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nivel Superior: <span className="blue">Analise e desenvolvimento de sistemas - UNINASSAU - 2020</span>
            </div>
            <div>
              Digital House: <span className="blue">Deenvolvedor Web Fullstack - 2022</span>
            </div>
            <div>
              RocketSeat: <span className="blue">Ignite React - 2023</span>
            </div>
            {'\u007D'}
          </CodeItem>

          <CodeItem data-aos='zoom-in'>
            <span className="comment">// Informações Comportamentais</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Perfil: <span className="blue">Calmo e resiliente </span>
            </div>
            <div>
              Pontos Fortes: <span className="blue">Determinado e Persistente</span>
            </div>
            <div>
              Pontos a melhorar: <span className="blue">Anciosidade</span>
            </div>
            {'\u007D'}
          </CodeItem>


        </InfosContainer>
      </div>
    </Container>
  );
}
