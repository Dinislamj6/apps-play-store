import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
  ;
import { RouterProvider } from "react-router/dom"
import { createBrowserRouter, } from 'react-router';
import RootLayout from './layout/RootLayout';
import Apps from './pages/apps/Apps';
import HomePage from './pages/homePage/HomePage';
import InstallPage from './pages/instalation/installPage';
import NotFound from './notfoundpage/NotFound';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      errorElement: <NotFound></NotFound>,
      children: [
        {
          path: "/",
          element: <HomePage></HomePage>
        },
        {
          path: "/apps",
          element: <Apps></Apps>
        },
        {
          path: "/install",
          element: <InstallPage></InstallPage>
        }
      ],

    },

  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
