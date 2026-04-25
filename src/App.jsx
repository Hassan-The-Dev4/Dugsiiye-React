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

import CartContext from './CartContext';
import ProductItem from './ProductItem';
import CartSummary from './CartSummary';
import ContactForm from "./ContactForm";




function App() {
  
     const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
      setCartItems([...cartItems, item]);
    };

    const removeFromCart = (itemId) => {
      setCartItems(cartItems.filter((item) => item.id !== itemId));
    };

    const value = { cartItems, addToCart, removeFromCart };

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
      <ContactForm />


  )


}

export default App;
