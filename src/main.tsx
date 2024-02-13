// import React from 'react'
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css'
import Layout from './layout/layout/Layout.tsx';
import { Home } from './pages/home/Home.tsx';
import { Products } from './pages/products/Products.tsx';
import { About } from './pages/about/About.tsx';
import { Contact } from './pages/contact/Contact.tsx';
import { Cart } from './pages/cart/Cart.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route 
        path=''
        element={<Home/>}
      />
      <Route 
        path='products'
        element={<Products/>}
      />
      <Route
        path="about"
        element={<About/>}
      />
      <Route
        path="cart"
        element={<Cart/>}
      />
      <Route
        path="contact"
        element={<Contact/>}
      />
    </Route>
    
  )
  
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  < >
    <RouterProvider
      router={router}
    />
  </>,
)


