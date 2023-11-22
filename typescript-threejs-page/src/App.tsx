import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
//VERWENDE Link STATT li !!!!

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App