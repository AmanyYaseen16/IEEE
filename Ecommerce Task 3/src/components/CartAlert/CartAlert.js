import React from 'react';
import "./CartAlert.css";
import cartbag from "../../images/cartbag.png";
import Image from 'next/image';

const CartAlert = () => {
  return (
    <div className='cart-message flex flex-sb ls-1'>
    <div className='cart-message-icon'>
      <Image src = {cartbag} alt = "" />
    </div>
    <h6 className='text-black fs-14 fw-5'>Item added to your shopping cart</h6>
  </div>
  )
}

export default CartAlert