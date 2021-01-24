import React, {useState} from 'react'
import './App.scss';
import Aboutme from './components/Aboutme/Aboutme';
import Hero from './components/Herosection/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills.jsx'
const App = () => {
  
  const [currentItem,setCurrentItem] = useState([])

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Aboutme />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
