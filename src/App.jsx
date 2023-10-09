import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './components/About'
import Projects from './components/Projects'
import Completed from './pages/completed'
import Ongoing from './pages/ongoing'
import Upcoming from './pages/upcoming'


const App = () => {
  return (
    <BrowserRouter>
    
     <Home/>
    </BrowserRouter>
  )
}

export default App
