/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
import { useContext, useEffect, useState } from 'react';
import { Navlink } from './Navlink';
import { Container, ButtonContainer } from './styles';
import { LanguageContext } from "../contexts/LanguageContext"

export function Header({ isDark, activeLanguage }: { isDark: boolean, activeLanguage: string }) {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [activeButton, setActiveButton] = useState<string>(activeLanguage);

  useEffect(() => {
    setActiveButton(language);
  }, [language]);


  const handleButtonClick = (buttonLanguage: string) => {
    if (buttonLanguage !== activeButton) {
      toggleLanguage();

    }
  };

  return (
    <Container>
      <ul>
        <Navlink title="Home" path="/" />
        <Navlink title="Projects" path="/projects" />
      </ul>
      <ButtonContainer isDark={isDark}>
        <button
          onClick={() => handleButtonClick('pt')}
          className={activeButton === 'pt' ? 'active' : ''}
          disabled={language === 'pt' || isDark}
        >
          Port
        </button>
        <button
          onClick={() => handleButtonClick('en')}
          className={activeButton === 'en' ? 'active' : ''}
          disabled={language === 'en' || isDark}
        >
          Eng
        </button>
      </ButtonContainer>
    </Container>
  );
}

