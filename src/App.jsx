import React from 'react';
import Navbar from './Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />  
     
      <Services />
      {/* Other components */}
    </div>
  );
}

export default App;
