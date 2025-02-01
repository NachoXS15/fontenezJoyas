import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import * as Pages from './pages/Wrap'

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Pages.Index />
    },
    {
      path: "/productos",
      element: <Pages.Products />
    },
    {
      path: "/productos/:id",
      element: <Pages.Products />
    },
    {
      path: "/producto/:id",
      element: <Pages.SingleProduct />
    },
    {
      path: "/about",
      element: <Pages.About />
    },
    {
      path: "/admin",
      element: <Pages.Login />,
    
    },
    {
      path: "/admin/check",
      element: <Pages.CheckUser />,
    },
    {
      path: "/dashboard/",
      element: <Pages.Dashboard />,
    },
    {
      path: '/dashboard/addProduct',
      element: <Pages.AddProduct />
    },
    {
      path: '/dashboard/editProduct/:id',
      element: <Pages.EditProduct />
    }
  ])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
