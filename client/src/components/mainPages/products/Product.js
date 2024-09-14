import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import ProductList from '../utils/productlist/ProductList'

const Product = () => {
  const state =useContext(GlobalState)
  const [products] = state.productAPI.products

  console.log(state)
  return (
    <div className='products'>
        {
          products.map(product=> {
            return <ProductList key={product.id} product={product}/>
          })
        }
    </div>
  )
}

export default Product