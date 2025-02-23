
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Services from './Services';
import  './App.css'

function App() {
  return (
    <>
          <BrowserRouter >
        <Routes >
          <Route path='/'Home={<Home />} />
          <Route path='/'About={ <About />} />
          <Route path='/'Contact={<Contact />}/>
          <Route path='/'Services={<Services />} />
        </Routes >
      </BrowserRouter>

      
      <About/>
      <Home />
      <Contact/>
      <Services/>
     

      
    </>
  );
}

export default App;
