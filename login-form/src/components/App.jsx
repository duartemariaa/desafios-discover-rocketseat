import { useState } from 'react'
import './App.css'
import Logo from './Logo.jsx'
import Login from './Login.jsx'
import sideImage from '../assets/side-image.jpg'

function App() {

  return (
    <div className='app-container'>
      <div className='login-left'>
        <Logo/>
        <Login/>
      </div>
      <div className='login-rigth'>
        <img src={sideImage} alt="" />
      </div>
    </div>
  )
}

export default App
