import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Inquiry from './components/Inquiry'; 
import Footer from './components/Footer';
import WhyChooseUs from './components/WhyChooseUs';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />  
    
      <Services />
      <WhyChooseUs />
      <Inquiry />
     <Footer />
    </div>
  );
}

export default App;
