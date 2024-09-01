import { useState } from 'react'
import Home from './Components/Home.jsx'
import Gallery from './Components/Gallery.jsx'
import About from './Components/About.jsx'
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
function App() {


  return (
    <>
      <RouterProvider router={routes}/>

      
    </>
  )
}

export default App
