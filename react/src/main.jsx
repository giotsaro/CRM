
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router'
import { Route, RouterProvider } from 'react-router-dom'
import { ContextProvider } from './contexts/ContextProvider'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
   <RouterProvider router={router} />
   </ContextProvider>
  
  </React.StrictMode>,
)
