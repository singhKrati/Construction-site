import React from 'react'
import Navbar from './components/navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Hero from './components/hero'
import Services from './components/Services'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Projects></Projects>
      <Contact></Contact>
      
    </div>
  )   
}

export default Home
