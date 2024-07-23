'use client';
import React, {useEffect, useState} from 'react'
import Link from 'next/link';
import "./Navbar.css";
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faAngleRight, faShoppingBag, faShoppingCart,faUser } from '@fortawesome/free-solid-svg-icons';
import { getCategories } from '@/lib/features/category/CategorySlice';
import { setSidebarOn } from '@/lib/features/sidebar/SidebarSlice';
import { getCartItemsCount, getCarts, getCartTotal } from '@/lib/features/cart/CartSlice';
import CartModal from "../CartModal/CartModal";


const Navbar = () => {
    const dispatch = useDispatch();
    const categories = useSelector(getCategories);
    const itemsCount = useSelector(getCartItemsCount);
    const carts = useSelector(getCarts);
    const [searchTerm, setSearchTerm] = useState("")
    //console.log(categories);

    const handleSearchTerm = (e) => {
      e.preventDefault();
      setSearchTerm(e.target.value);
    }

    useEffect(() => {
      dispatch(getCartTotal());
    }, [carts])

    console.log(carts);

  return (
    <nav className='navbar'>
    <div className='container bar-content flex'>
      <div className='brand-and-toggler flex'> 
        <button type='button' className='sidebar-show-btn flex' onClick={() => dispatch(setSidebarOn())}>
         <span className='text-capitalize fw-5 fs-17 ls-1'> Categories </span>
          <FontAwesomeIcon icon={faAngleRight} style={{marginTop:4, marginLeft:3}}> </FontAwesomeIcon>
        </button>
      <Link href="/" passHref> <a className='bar-brand flex'> 
        <span className='brand-icon'>
        <FontAwesomeIcon icon={faShoppingBag} style={{marginLeft:22}} size='1x'></FontAwesomeIcon>
        </span>
        
        <span className='navbar-brand-txt flex'>
            <span className='fw-7' style={{marginLeft:4}}> LUX </span> <span className = 'fw-5'> ORA </span> 
        </span>
        </a>
      </Link>
    </div>

    <div className='navbar-collapse container'>
      <div className='navbar-search bg-lg'>
        <div className='search-elem flex flex-sb'>
          <input type='text' className='search-control fs-14 ls-1' placeholder='Find your perfect item ...'
          onChange={(e) => handleSearchTerm(e)}/>
          <Link href={`search/${searchTerm}`} passHref> <a className='search-btn flex align-center'>
            <FontAwesomeIcon icon={faSearch} size='1x'></FontAwesomeIcon>
            </a>
          </Link>
        </div>
      </div>

    </div>
            <div className='navbar-cons'>
              <ul className='navbar-icons flex'>
                <li>
                  <span>                 
                    <FontAwesomeIcon icon={faUser} size='1x' className='n-icon'></FontAwesomeIcon> </span>
                    <span className='title'> Profile </span>
                </li>
                  
                  <li>
                    <span> <FontAwesomeIcon icon={faHeart} size='1x' className='n-icon' > </FontAwesomeIcon> </span>
                  <span className='title'>Favourites</span>
                  </li>
                 
                    <div className='navbar-cart flex'>
                      <Link href = "/cart" passHref> <a className='cart-btn'>
                      <li>
                        <span>
                      <FontAwesomeIcon icon={faShoppingCart} size='1x' className='n-icon'></FontAwesomeIcon> </span>
                      <span className='title'> Cart </span>
                      </li>
                        <div className='cart-items-value'>{itemsCount}</div>
                        <CartModal carts = {carts}/>
                        </a>
                      </Link>
                    </div>
              </ul>
            </div> 
    </div>
   </nav>
  )
}

export default Navbar