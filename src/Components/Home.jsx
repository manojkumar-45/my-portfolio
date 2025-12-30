import React from 'react'
import Navbar from './Navbar';
import About from './About';
import Hero from './Hero';
import Skills from './Skills/Skills';
import Projects from './Projects';
import Contact from './Contact';


const Home = () => {
  return (
    <div className="overflow-x-hidden">
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Home