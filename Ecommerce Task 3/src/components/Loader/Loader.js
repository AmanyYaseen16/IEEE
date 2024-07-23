import React from 'react'
import "./Loader.css";
import loading from "../../images/loading.svg";
import Image from 'next/image';

const Loader = () => {
  return (
    <div className='container'>
        <div className='loader flex'>
            <Image src={loading} alt=''/>
        </div>
    </div>
  )
}

export default Loader