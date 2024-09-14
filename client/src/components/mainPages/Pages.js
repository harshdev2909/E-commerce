import React from 'react'
import Product from './products/Product'
import Cart from './cart/Cart'
import Login from './login/Login'
import Register from './login/Register'
import { Route, Routes } from 'react-router-dom'
import DetailProduct from './utils/detailProducts/DetailProduct'
const Pages = () => {
  return (
    <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/details/:id' element={<DetailProduct/>}/>
    </Routes>
  )
}

export default Pages