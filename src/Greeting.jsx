
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

export function Greeting() {
  const language = useContext(LanguageContext);

  const messages = {
    en: 'Hello!',
    es: '¡Hola!',
  };

  return <h1>{messages[language]}</h1>;
}


