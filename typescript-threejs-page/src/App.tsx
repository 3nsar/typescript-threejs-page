import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Service from './components/Service'
import Partners from './components/Partners'
import Previous from './components/Previous'



const App = () => {
  return (
    <div className='App'>
     <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Partners/>
      <Previous/>
    </div>
  )
}

export default App