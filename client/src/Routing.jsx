import React from 'react'
// import {Switch,Route} from 'react-router-dom'

import {Routes,Route} from "react-router-dom";
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home'
const Routing = () => {
  return (
    <Routes>
      <Route exact path='/' element={ <Home/>} />
      <Route path='/auth' element={ <Auth/> } />
      <Route path='/' />
    </Routes>
  )
}

export default Routing