import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import CartBox from './CartBox';
import { CartProvider } from 'react-use-cart';

function App() {
  return (
    <>
      <CartProvider>
       <Home />
       <CartBox />
       </CartProvider>
    </>
  );
}

export default App;
