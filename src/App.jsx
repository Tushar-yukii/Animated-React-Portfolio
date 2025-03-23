import React from 'react'

import './App.css'
import Navbar from './Compounts/Navbar'
import Home from './Compounts/Home'
import Skills from './Compounts/Skills'
import Project from './Compounts/Project'
function App() {


  return (
    <>
     <Navbar />
     <div className="container">
      <Home />
      <Skills />
      <Project />
     </div>
    </>
  )
}

export default App
