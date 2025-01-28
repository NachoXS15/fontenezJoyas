import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './pages/Index.tsx'
import Products from './pages/Products.tsx'
import SingleProduct from './pages/SingleProduct.tsx'
import About from './pages/About.tsx'
import Login from './pages/admin/Login.tsx'
import CheckUser from './pages/admin/CheckUser.tsx'
import Dashboard from './pages/admin/Dashboard.tsx'
import AddProduct from './pages/admin/AddProduct.tsx'

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Index />
    },
    {
      path: "/productos",
      element: <Products />
    },
    {
      path: "/productos/:id",
      element: <Products />
    },
    {
      path: "/producto/:id",
      element: <SingleProduct />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/admin/",
      element: <Login />,
    
    },
    {
      path: "/admin/check",
      element: <CheckUser />,
    },
    {
      path: "/dashboard/",
      element: <Dashboard />,
    },
    {
      path: '/dashboard/addProduct',
      element: <AddProduct />

    }
  ])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
