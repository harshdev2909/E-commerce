import React from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from 'react-icons/md';
import { CiShoppingCart } from "react-icons/ci";
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <div className='menu'>
            <MdOutlineMenu width={30}/>
        </div>

        <div className='logo'>
            <h1>
                <Link to='/'>30Dc shop</Link>
            </h1>
        </div>
    </header>
  )
}

export default Header