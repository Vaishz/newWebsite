import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button/Button";
/*import Modal from './components/Modal'*/
import Auth from "./Auth";
import PasswordGen from "./PasswordGen";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Shop from "./components/Shop/Shop";
import Cart from "./Cart";
import { CartProvider } from 'react-use-cart';



const App = () => {
  return (
    <>
 <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/pw" element={<PasswordGen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element= {<Cart/>} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
      <Footer />
    </>
  );
};

<<<<<<< HEAD


   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/auth' element={<Auth/>}/>
    <Route path='/pw' element={<PasswordGen/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/shop' element={<Shop/>}/>
  

   </Routes>
   </BrowserRouter>
   <Footer/>

   
   </>
  )
}

export default App
=======
export default App;
>>>>>>> 40478d24246160c337e2821c5f14081f91770fde
