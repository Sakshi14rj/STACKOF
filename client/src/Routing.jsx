import React from 'react'
// import {Switch,Route} from 'react-router-dom'

import {Routes,Route} from "react-router-dom";
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home'
import Questions from './pages/Questions/Questions';


const Routing = () => {
  return (
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/Auth' element={<Auth />}/>
    <Route path='/Questions' element={<Questions />}/>
</Routes>
  )
}

export default Routing