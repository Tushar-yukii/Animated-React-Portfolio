import React from 'react'

import './App.css'
import Navbar from './Compounts/Navbar'
import Home from './Compounts/Home'
// import Experience from './Compounts/Experience'
import Skills from './Compounts/Skills'
function App() {


  return (
    <>
     <Navbar />
     <div className="container">
      <Home />
      <Skills />
     </div>
    </>
  )
}

export default App
