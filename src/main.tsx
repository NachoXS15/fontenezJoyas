import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './pages/Index.tsx'
import Products from './pages/Products.tsx'

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Index />
    },
    {
      path: "/productos",
      element: <Products />
    }
  ])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
