import React from 'react'
// import {Switch,Route} from 'react-router-dom'

import {Routes,Route} from "react-router-dom";
import AskQuestion from './pages/AskQuestion/AskQuestion';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home'
import DisplayQuestion from './pages/Questions/DisplayQuestion';
import Questions from './pages/Questions/Questions';
import Tags from './pages/Tags/Tags';


const Routing = () => {
  return (
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/Auth' element={<Auth />}/>
    <Route path='/Questions' element={<Questions />}/>
    <Route path='/AskQuestion' element={<AskQuestion />}/>
    <Route path='/Questions/:id' element={<DisplayQuestion />}/>
    <Route path='/Tags' element={< Tags />}/>
</Routes>
  )
}

export default Routing