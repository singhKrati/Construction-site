import React from 'react'
import Navbar from './components/navbar'
import About from './components/about'
import Projects from './components/projects'
import Footer from './components/Footer'
import Hero from './components/hero'
import Services from './components/Services'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero></Hero>
      <About id="About"></About>
      <Services></Services>
      <Projects></Projects>
      <Footer></Footer>
      
    </div>
  )   
}

export default Home
