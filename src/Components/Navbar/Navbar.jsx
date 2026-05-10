import React, { useContext, useState ,useRef} from 'react'

import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import nav_dropdown from '../assets/nav_dropdown.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
    const [Menu,setMenu]=useState(" ");
    const {getTotalitem}=useContext(ShopContext);
    const menuRef=useRef();

    const dropdown_toggle=()=>{
        menuRef.current.classList.toggle('nav-menu-visible');

    }
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="logo" />
            <p>CRIMSON</p>

        </div>
        <img src={nav_dropdown} onClick={dropdown_toggle} className='nav-dropdown' />
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}>
                <Link to='/' className='nav-link' >Shop</Link>{Menu=="shop"?<hr></hr>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}><Link to='/mens' className='nav-link' >Men</Link>{Menu=="men"?<hr></ hr>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}>
                <Link to='womens' className='nav-link'>Women</Link>
                {Menu=="women"?<hr></hr>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}>
                <Link to='/kids' className='nav-link'>Kid </Link>{Menu=="kids"?<hr></hr>:<></>}</li> 
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
            <div className="nav-cart-count">{getTotalitem()}</div>
        </div>

    </div>
  )
}

export default Navbar