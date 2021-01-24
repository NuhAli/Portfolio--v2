import React, {useState} from 'react'
import './App.scss';
import Aboutme from './components/Aboutme/Aboutme';
import Hero from './components/Herosection/Hero';
import Navbar from './components/Navbar/Navbar';
import portfolio from './components/Projects/Projectdata';
import Projects from './components/Projects/Projects';
import Modal from './components/Modal/Modal';
import Skills from './components/Skills/Skills.jsx'


const App = () => {
  const [projects] = useState(portfolio)
  const [currentItem,setCurrentItem] = useState([])

  const selectItem = (id) => {
    const selectedItem = projects.filter(project => project.id === id)
    setCurrentItem(selectedItem)
  }

  return (
    <div className="App">
      <Modal currentItem={currentItem} />
      <Navbar />
      <Hero />
      <Aboutme />
      <Skills />
      <Projects
        portfolio={projects}
        handleClick={selectItem}
      />
    </div>
  );
}

export default App;
