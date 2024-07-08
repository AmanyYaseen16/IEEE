import React from 'react';
import { useGlobalContext } from '../../context';
import Art from "../ArtList/Art";
import noCover from "../../images/llogo.png";
import Loading from "../Loader/Loader";
import "./ArtList.css";

/*? 'https://www.artic.edu/iiif/2/${image_id}$/full/843,/0/default.jpg' */
                    
const ArtList = () => {
  const { arts, loading, resultTitle } = useGlobalContext(); //arts are the fetched art works from the API 
  const Art_Works = arts.map((art) => {
    return{
      ...art, //spread all the properties 

      artwork_cover: art.cover_id ? `https://www.artic.edu/iiif/2/${art.cover_id}/full/843,/0/default.jpg` : noCover
    }  // some arts are forbidden, so this will handle this issue by displaying another image which is the logo.
   
  });


  //console.log('Arts:', Art_Works);

  if(loading) return <Loading />;

  return (
    <section className='artlist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='artlist-content grid'>
          {
            Art_Works.slice(0, 20).map((item, index) => {   
              return(  //art component for each art work
                <Art key = {index} {...item} /> 
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default ArtList