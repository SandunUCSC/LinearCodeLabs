import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Inquiry from './components/Inquiry'; 


function App() {
  return (
    <div>
      <Navbar />
      <Hero />  
     <About />
      <Services />
      <Inquiry />
     
    </div>
  );
}

export default App;
