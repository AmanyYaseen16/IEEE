import React from 'react';
import "./Footer.css";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='footer bg-white'>
      <div className = "container py-4 text-center">
        <div className='flex align-center flex-c text-dg fw-3 fs-13'>
          <Link href = "/" passHref> <a className='text-capitalize'>privacy policy </a> </Link>
          <div className='vertical-line'></div>
          <Link href = "/" passHref> <a className='text-capitalize'> term of service </a> </Link>
          <div className='vertical-line'></div>
          <Link href = "/" passHref> <a className='text-capitalize'>About Us </a> </Link>
        </div>
        <span className='text-bg copyright-text fs-14 fw-4'>&copy; 2024 LUXORA - All Rights Reserved</span>
      </div>
    </footer>
  )
}

export default Footer