import React from 'react'
import './App.scss';
import Aboutme from './components/Aboutme/Aboutme';
import Hero from './components/Herosection/Hero';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Aboutme />
    </div>
  );
}

export default App;
