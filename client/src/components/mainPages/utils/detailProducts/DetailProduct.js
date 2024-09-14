import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState'

const DetailProduct = () => {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productAPI.products

    const[details,setDetails] =  useState([])

    useEffect(()=>{
        if(params){
            products.forEach(product=> {
                if(product._id === params.id){
                    setDetails(product)
                }
            })
        }
    },[params,products])
    console.log(details)
  return (
    <div className='detail'>
        {/* <img src={details.images.url}/> */}

    </div>

  )
}

export default DetailProduct