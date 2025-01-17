import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Pages/Home.jsx'
import Gallery from './Pages/Gallery.jsx'
import About from './Pages/About.jsx'
import "./index.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
const routes = createBrowserRouter([{
  path: "/",
  element: <Home />
}, {
  path: "/Gallery",
  element: <Gallery />
}, {
  path: "/About",
  element: <About />
}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={routes}/> 
    
  </StrictMode>,
)
