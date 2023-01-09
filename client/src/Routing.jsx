import React from 'react'
import {Routes,Route} from "react-router-dom";
import AskQuestion from './pages/AskQuestion/AskQuestion';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home'
import DisplayQuestion from './pages/Questions/DisplayQuestion';
import Questions from './pages/Questions/Questions';
import Tags from './pages/Tags/Tags';
import Users from './pages/Users/Users';
import UserProfile from './pages/UserProfile/UserProfile';
import Plans from './pages/Plans/Plans';
import Success from './pages/Plans/Success';
import Failure from './pages/Plans/Failure';
import StripeForm from './pages/Payment/StripeForm';

import SMHome from './pages/SocialMedia/core/SMHome.js'
// import SMUsers from './pages/SocialMedia/user/Users'
// import Signup from './pages/SocialMedia/user/Signup'
// import Signin from './pages/SocialMedia/auth/Signin'
// import EditProfile from './pages/SocialMedia/user/EditProfile'
// import Profile from './pages/SocialMedia/user/Profile'
// import PrivateRoute from './pages/SocialMedia/auth/PrivateRoute'
// import Menu from './pages/SocialMedia/core/Menu'

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Auth' element={<Auth />}/>
      <Route path='/Questions' element={<Questions />}/>
      <Route path='/AskQuestion' element={<AskQuestion />}/>
      <Route path='/Questions/:id' element={<DisplayQuestion />}/>
      <Route path='/Tags' element={< Tags />}/>
      <Route path='/Users' element={< Users />}/>
      <Route path='/Users/:id' element={< UserProfile />}/>
      <Route path='/Plans' element={< Plans />}/>
      <Route path='/Payment' element={< StripeForm />}/>
      <Route path='/Success' element={< Success />}/>
      <Route path='/Failure' element={< Failure />} />
      
      <Route exact path="/SocialMedia" component={SMHome}/>
    </Routes>
  )
}

export default Routing