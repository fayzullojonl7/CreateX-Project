import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import BlueSpinner from './Components/Loading'

const Services = React.lazy(() => import("./pages/Service/Services"))
const InfoById = React.lazy(() => import("./pages/InfoById/InfoById"))
const About = React.lazy(() => import("./pages/About/About"))
const Home = React.lazy(() => import("./pages/Home/Home"))

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element:
            < Suspense fallback={<BlueSpinner />}>
              <Home />
            </Suspense>,
          index: true,
        },
        {
          path: '/services',
          element: <Suspense fallback={<BlueSpinner/>}>
            <Services />
          </Suspense>
        },
        {
          path: '/about',
          element: <Suspense fallback={<BlueSpinner/>}>
            <About />
          </Suspense>
        },
        {
          path: '/infoById/:id',
          element: <Suspense fallback={<BlueSpinner/>}>
            <InfoById />
          </Suspense>
        }
      ]
    }

  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
