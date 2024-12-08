import { useState } from 'react'
import './App.css'
import Logo from './Logo.jsx'
import Login from './Login.jsx'
import sideImage from '../assets/side-image.jpg'

function App() {

  return (
    <div className='app-container'>
      <div className='left-container'>
        <header>
          <Logo/>
        </header>
        <div className='login'>
          <Login/>
        </div>
      </div>
      <div className='right-container'>
        <img src={sideImage} alt=""/>
      </div>
    </div>
  )
}

export default App
