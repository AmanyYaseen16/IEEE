'use client';
import React, {useEffect} from 'react'
import Navbar from "../Navbar/Navbar";
import Link from 'next/link';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, fetchCategories } from '@/lib/features/category/CategorySlice';




const Header = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = useSelector(getCategories);
  //console.log('ezhary ya categories', categories);
  
  return (
    <div className='holder'>
        <header className="header">
            <Navbar/>
                <div className="header-content flex-c text-center text-white">
                    <h1 className="header-title text-capitalize text-italic"> Shop Smart ..
                        <p style={{marginLeft:140}}> Live luxuriously </p>
                    </h1> 
                        <p className="header-text fs-20 fw-2 text-capitalize"> Where quality meets style
                        <FontAwesomeIcon className="the-icon" icon ={faHeart} color='#3b5860' size='1x' style={{marginLeft:20}}/>
                           </p>
                
                </div>
        </header>
        <ul className='category-nav flex align-center fs-12 fw-4'>
            {
              // taking only first 8 categories
              categories.slice(0, 6).map((category, idx) => (
                <li className='nav-item no-wrap ls-1 fs-12 fw-3' key = {idx}>
                  <Link href = {`/category/${category}`} legacyBehavior> 
                    <a className='nav-link text-capitalize'>{category.replace("-", " ")}
                    </a>
                    </Link>
                </li>
              ))
            }
          </ul>
    </div>
  )
}

export default Header