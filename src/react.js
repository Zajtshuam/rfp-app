import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Datetime.css';
import Home from './pages/home'


function react() {
  return (
    <div>
    <Router>
        <Link to='/home'></Link>
        <Link to='/judges'></Link>
        <Link to='/contact'></Link>
        <Link to= '/about'></Link>

     <Routes>
        <Route path='/' element={<home/>} />
        <Route path='/judges' element={<judges/>}/>
         <Route path='/contact' element={<contact/>}/>
          <Route path='/about' element={<about/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default react