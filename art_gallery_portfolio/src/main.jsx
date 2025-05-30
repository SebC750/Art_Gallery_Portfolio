import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Pages/Home.jsx'
import Gallery from './Pages/Gallery.jsx'
import About from './Pages/About.jsx'
import Login from "./Pages/Login.jsx"
import Navbar from "./Components/Navbar.jsx"
import Footer from "./Components/Footer.jsx"
import "./index.css"
import { Routes, Route, BrowserRouter } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
)
