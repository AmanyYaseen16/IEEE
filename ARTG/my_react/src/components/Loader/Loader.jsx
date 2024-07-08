import React from 'react';
import LoaderImage from "../../images/loader.svg";
import "./Loader.css";

const Loader = () => {
  return (
    <div className='loader flex flex-c'>
      <img src={LoaderImage} alt = "loader"/>
    </div>
  )
}

export default Loader