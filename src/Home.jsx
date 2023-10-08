import React from 'react'
import Navbar from './components/navbar'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/Contact'
import Hero from './components/hero'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      
    </div>
  )
}

export default Home
