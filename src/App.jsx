import React, {useState} from 'react'
import './App.scss';
import Aboutme from './components/Aboutme/Aboutme';
import Hero from './components/Herosection/Hero';
import Navbar from './components/Navbar/Navbar';
import portfolio from './components/Projects/Projectdata';
import Projects from './components/Projects/Projects';
import Viewer from './components/Modal/Viewer';
import Skills from './components/Skills/Skills.jsx'
import Contactme from './components/Contactme/Contactme';
import Footer from './components/Footer/Footer';


const App = () => {
  // State area
  const [projects] = useState(portfolio)
  const [currentItem,setCurrentItem] = useState([projects[0]])
  const [show, setShow] = useState(false);
  // State Area End

  // State Functions
  const handleClose = () => setShow(false);

  const selectItem = (id) => {
    const selectedItem = projects.filter(project => project.id === id)
    setCurrentItem(selectedItem)
    setShow(true)
  }

// State Function end
  return (
    <div className="App">
      <Viewer 
        status={show}
        currentItem={currentItem}
        handleClose={handleClose} 
      />
      <Navbar />
      <Hero />
      <Aboutme />
      <Skills />
      <Projects
        portfolio={projects}
        handleClick={selectItem}
      />
      <Contactme />
      <Footer />
    </div>
  );
}

export default App;
