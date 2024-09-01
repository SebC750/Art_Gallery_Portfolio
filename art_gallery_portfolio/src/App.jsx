import { useState } from 'react'
import Home from './Components/Home.jsx'
import Navbar from './Components/Navbar.jsx'
import Gallery from './Components/Gallery.jsx'
import Footer from './Components/Footer.jsx'
function App() {
  

  return (
    <>
    <Navbar/>
      <Home/>    
      <Gallery/>
      <Footer/>
    </>
  )
}

export default App
