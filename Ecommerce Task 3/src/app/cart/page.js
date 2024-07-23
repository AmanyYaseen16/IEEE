import React from 'react';
import ShoppingCart from '@/pages/ShoppingCart/ShoppingCart';
import Navbar from '@/components/Navbar/Navbar';
import Sidebar from '@/components/Sidebar/Sidebar';

export default function Cart() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
    <ShoppingCart/>
    </div>
  )
}
