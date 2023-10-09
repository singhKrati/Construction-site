import React from 'react'
import Navbar from './components/navbar'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
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
      <Footer></Footer>
      
    </div>
  )   
}

export default Home
