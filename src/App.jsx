import { useState } from "react";
import LoginForm from "./LoginForm";
import UserList from "./UserList";
import { Counterdown } from "./Counterdown";
import { MouseTracker } from "./MouseTracker";
import { UserFetching } from "./UserFetching";
import Counter from "./Counter";
import { DoubleCounter } from "./DoubleCounter";
import MultiStepForm from "./MultiStepForm";


import { LanguageContext } from "./LanguageContext";
import { Greeting } from "./Greeting";



function App() {
  
      const [language, setLanguage] = useState('en');

      const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
      };


  return (

      // <Greeting />
      // <EventResize />
      // <MouseTracker />
      //  <Counterdown />
      // <UserFetching />
      //   <UserList users={users} />
      //  <LoginForm />
      //  <Counter />
      // <DoubleCounter />
      // <MultiStepForm />

      <LanguageContext.Provider value={language}>
      <button onClick={toggleLanguage}>
        Switch to {language === 'en' ? 'Spanish' : 'English'}
      </button>
      <Greeting />
    </LanguageContext.Provider>

  )


}

export default App;
