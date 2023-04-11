import React, { createContext, useState } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
  toggleLanguage: () => void;
}

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageContext = createContext({} as LanguageContextType);

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState('pt'); // estado para controlar o idioma

  function toggleLanguage() {
    setLanguage(language === 'pt' ? 'en' : 'pt'); // alternar entre 'pt' e 'en'
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
