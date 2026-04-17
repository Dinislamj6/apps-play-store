import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom"
import RootLayout from './layout/RootLayout';
import Apps from './pages/apps/Apps';
import HomePage from './pages/homePage/HomePage';
import { router } from './router/Router';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
