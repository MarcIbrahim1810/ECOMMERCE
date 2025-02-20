import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import Notfound from './components/Notfound/Notfound'
import Brands from './components/Brands/Brands'
import Categories from './components/Categories/Categories'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import About from './components/About/About'
import UserContextProvider from './Context/UserContext'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import CounterContextProvider from './Context/UserContext'
import ProductDetails from './components/ProductDetails/ProductDetails'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CartContextProvider from './Context/CartContext'
import { Toaster } from 'react-hot-toast'
import { Provider } from "react-redux"
import store from './Redux/store'




let query = new QueryClient()

let router = createBrowserRouter([
  {
    path: "", element: <Layout />, children: [
      { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
      { path: "products", element: <ProtectedRoute><Products /> </ProtectedRoute> },
      { path: "productDetails/:id/:category", element: <ProtectedRoute><ProductDetails /> </ProtectedRoute> },
      { path: "about", element: <ProtectedRoute><About /></ProtectedRoute> },
      { path: "cart", element: <ProtectedRoute><Cart /></ProtectedRoute> },
      { path: "brands", element: <ProtectedRoute><Brands /></ProtectedRoute> },
      { path: "categories", element: <ProtectedRoute><Categories /></ProtectedRoute> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "*", element: <Notfound /> },
      {}
    ]
  }
])



function App() {

  return (
    <>
      <Provider store={store}>
        <CartContextProvider>
          <QueryClientProvider client={query}>
            <UserContextProvider>
              <CounterContextProvider>
                <RouterProvider router={router}></RouterProvider>
                <Toaster />
                <ReactQueryDevtools />
              </CounterContextProvider>
            </UserContextProvider>
          </QueryClientProvider>
        </CartContextProvider>
      </Provider>


    </>
  )
}

export default App
