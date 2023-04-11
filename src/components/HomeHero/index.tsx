/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-comment-textnodes */
import { BsWhatsapp } from 'react-icons/bs'
import Link from 'next/link';
import { TypeAnimation } from "react-type-animation";
import { Container, TextContainer, InfosContainer, CodeItem, VideoContainer, TypeAnimationContainer } from './styles';
import photo2 from '../../assets/photo2.png';
import { useLanguage } from '../hooks/useLanguage';
import { formHeroData, heroData } from '../../../data';

export function HomeHero() {
  const { language } = useLanguage();
  const data = heroData[language];
  const formData = formHeroData[language]

  const WhatsAppButton = () => {
    window.location.href = 'https://wa.me/5583987921452';
  };

  return (
    <Container data-aos='fade-up'>
      <div className="">
        <img src={photo2} alt="" className="photo" />
        {/* videos youtube */}
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
          <h1>{data.pitch}</h1>
        </VideoContainer>
      </div>
      <div className="">
        <TextContainer>
          <h1>{data.hello}
            <Link href='/'>
              <a>
                <BsWhatsapp
                  size='80px'
                  color='#25D366'
                  style={{ marginLeft: '20px' }}
                  onClick={WhatsAppButton}
                />
              </a>
            </Link>
          </h1>

          <h2>{data.name}</h2>
          <TypeAnimationContainer>
            <TypeAnimation
              sequence={[
                data.officeFree,
                2000,
                data.officeFull,
                2000,
                data.officeBack,
                2000,
                data.officeFront,
                2000,
                () => { }
              ]}
              wrapper='div'
              cursor
              repeat={Infinity}
            />
          </TypeAnimationContainer>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos='zoom-in'>
            <span className="comment">{data.titlePerson}</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              {formData.firstName}: <span className="blue">{data.firstName}</span>
            </div>
            <div>
              {formData.lastName}: <span className="blue">{data.lastName}</span>
            </div>
            <div>
              {formData.age}: <span className="blue">{data.age}</span>
            </div>

            <div>
              {formData.address}: <span className="blue">{data.address}</span>
            </div>
            {'\u007D'}
          </CodeItem>

          <CodeItem data-aos="zoom-in">
            <span className="comment">{data.titleSoftSkills}</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              {formData.profile}: <span className="blue">{data.profile}</span>
            </div>
            <div>
              {formData.strong}: <span className="blue">{data.strong}</span>
            </div>
            <div>
              {formData.weak}: <span className="blue">{data.weak}</span>
            </div>
            {'\u007D'}
          </CodeItem>

          <CodeItem data-aos='zoom-in'>
            <span className="comment">{data.titleBackground}</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              {formData.bachelor}: <span className="blue">{data.bachelor}</span>
            </div>
            <div>
              {formData.digitalHouse}: <span className="blue">{data.digitalHouse}</span>
            </div>
            <div>
              {formData.rocketSeat}: <span className="blue">{data.rocketSeat}</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
