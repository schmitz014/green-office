import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import Home from './pages/Home.jsx'
import Need from './pages/Need.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Energy from './pages/Energy.jsx'
import Solar from './pages/Solar.jsx'
import Eolica from './pages/Eolica.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'necessidade', element: <Need /> },
      { path: 'energia', element: <Energy /> },
      { path: 'energia/solar', element: <Solar /> },
      { path: 'energia/eolica', element: <Eolica /> },
      { path: '*', element: <PageNotFound /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
