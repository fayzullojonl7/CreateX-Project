import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'

import Services from './pages/Service/Services'
import InfoById from './pages/InfoById/InfoById'
import About from './pages/About/About'
import Home from './pages/Home/Home'


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
          index: true,
        },
        {
          path: '/services',
          element: <Services />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/infoById/:id',
          element: <InfoById />
        }
      ]
    }

  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
