import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Components/Home.jsx'
import Gallery from './Components/Gallery.jsx'
import About from './Components/About.jsx'
import Commissions from "./Components/Commissions.jsx"
import AdminDashboard from "./Components/AdminDashboard.jsx"
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
},{
  path: "/Commissions",
  element: <Commissions/>
}, {
  path: "/AdminDashboard",
  element: <AdminDashboard/>
}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={routes}/> 
    
  </StrictMode>,
)
