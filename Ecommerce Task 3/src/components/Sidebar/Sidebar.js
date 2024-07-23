'use client';
import React, { useEffect } from 'react';
import './Sidebar.css';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { getSidebarStatus, setSidebarOff } from '../../lib/features/sidebar/SidebarSlice';
import { fetchCategories, getCategories } from '../../lib/features/category/CategorySlice';


const Sidebar = () => {

  const dispatch = useDispatch();
  const isSidebarOn = useSelector(getSidebarStatus);  
  const categories = useSelector(getCategories);
  
  console.log('njnjnj', categories);

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])
  
  return (
    <aside className={`sidebar ${isSidebarOn ? 'hide-sidebar' : ""}`}>
         <button type = "button" className='sidebar-hide-btn' onClick={() => dispatch(setSidebarOff())}>
        <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon>
      </button>
      <div className='sidebar-cnt'>
        <div className='cat-title fs-17 text-uppercase fw-4 ls-1h'>All Categories</div>
        <ul className='ct-list flex-column'>
          {
            categories.map((category, idx) => {
              return (
                <li key={idx} onClick = {() => dispatch(setSidebarOff())}>
                  <Link href= {`category/${category}`} legacyBehavior> 
                    <a className='ct-list-link text-metal ls-1 text-capitalize'> {category.replace("-", " ")} </a> 
                  </Link>
                </li>
            )
          })
          }
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar