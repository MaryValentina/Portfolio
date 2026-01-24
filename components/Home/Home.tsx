import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Resume from './Resume/Resume'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div>
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Services/>
      </div>
      <div id="resume">
        <Resume/>
      </div>
      <div id="projects">
        <Projects/>
      </div>
      <div id="skills">
        <Skills/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home