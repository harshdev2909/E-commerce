import React, { useContext } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from 'react-icons/md';
import { CiShoppingCart } from "react-icons/ci";
import {Link} from 'react-router-dom'
import { GlobalState } from '../../GlobalState';
const Header = () => {
    const state =useContext(GlobalState)
    console.log(state)
  return (
    <header>
        <div className='menu'>
            <MdOutlineMenu width={30}/>
        </div>

        <div className='logo'>
            <h1>
               <Link to='/'>30Dc-shop</Link>  
            </h1>
        </div>
        <ul>
            <li><Link to='/'>Products</Link></li>
            <li><Link to='/login'>Login or Register</Link></li>

            <li>
                <MdClose width={30} className='menu'/>
            </li>
        </ul>
        <div className='cart-icon'>
            <span>0</span>
            <Link><CiShoppingCart size={30}/></Link>
        </div>
    </header>
  )
}

export default Header;