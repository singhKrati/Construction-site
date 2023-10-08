import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './components/about'
import Projects from './components/projects'
import Completed from './pages/completed'
import Ongoing from './pages/ongoing'
import Upcoming from './pages/upcoming'
import Hero from './components/hero'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero/>}></Route>
        <Route path='/completed' element={<Completed/>}></Route>
        <Route path='/ongoing' element={<Ongoing/>}></Route>
        <Route path='/upcoming' element={<Upcoming/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
