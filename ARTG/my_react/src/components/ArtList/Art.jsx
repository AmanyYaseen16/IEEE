import React from 'react';
import { Link } from 'react-router-dom';
import noCover from "../../images/llogo.png";
import "./ArtList.css";

const Art = (art) => {

  //console.log('Arts:', art); 
  return (
    <div className='art-item flex flex-column flex-sb'>
      <div className='art-item-img'>
        <img src = {art.artwork_cover} alt = "cover" onError={(e) => { e.target.src = noCover; }}/>  
      </div>

      <div className='art-item-info text-center'>
        <Link to = {`/art/${art.id}`} {...art}>
          <div className='art-item-info-item title fw-6 fs-16'>
            <span>{art.title}, {art.date}</span>
          </div>
        </Link>

        <div className='artwork-item-info-item artist fs-12 text-black'>
          <span className='text-capitalize fw-7'>{art.artist} </span>
        </div>

        </div>
      </div>
  )
}

export default Art