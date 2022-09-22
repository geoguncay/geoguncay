import React from 'react'
import './app.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'


function App() {
  return (
    <>
    <Header/>
    <Navbar/>
    <About/>
    <Experience/>
    <Contact/>
    </>
  )
}

export default App