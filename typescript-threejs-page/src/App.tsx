import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
//VERWENDE Link STATT li !!!!

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App