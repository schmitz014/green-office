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
import Biomassa from './pages/Biomassa.jsx'
import Geotermica from './pages/Geotermica.jsx'
import Hidreletrica from './pages/Hidreletrica.jsx'

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
      { path: 'energia/biomassa', element: <Biomassa /> },
      { path: 'energia/geotermica', element: <Geotermica /> },
      { path: 'energia/hidreletrica', element: <Hidreletrica /> },
      { path: '*', element: <PageNotFound /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
