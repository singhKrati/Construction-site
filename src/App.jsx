import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Completed from './pages/completed'
import Ongoing from './pages/ongoing'
import Upcoming from './pages/upcoming'




const App = () => {
  return (
    <BrowserRouter>
  
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/upcoming' element={<Upcoming/>}></Route>
        <Route path='/completed' element={<Completed/>}></Route>
        <Route path='/ongoing' element={<Ongoing/>}></Route>
      </Routes>
     
    </BrowserRouter>
  )
}

export default App
