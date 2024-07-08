import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import noCover from "../../images/llogo.png";
import "./Details.css";
import {FaArrowLeft} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const URL = "https://api.artic.edu/api/v1/artworks/";
const ArtFields = "?fields=title,place_of_origin,image_id,medium_display,credit_line,description,dimensions,department_title";

const Details = () => {
  const {id} = useParams(); //id from url
  console.log(id);
  const [loading, setLoading] = useState(false);
  const [art, setArt] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getArtDetails(){
      try{
        const response = await fetch(`${URL}${id}${ArtFields}`);
        const artData = await response.json();
        const {data} = artData;
        //console.log("The data", data);

        if(data){
          const {title, image_id, place_of_origin, medium_display, credit_line, description, dimensions,
            department_title
          } = data;
          const newArt = {
            title: title  || "No title found",
            cover_img: image_id ? `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg` : noCover,
            place_of_origin: place_of_origin || "No place found",
            medium_display : medium_display || "No medium found",
            credit_line: credit_line || "No credits found",
            description: description || "No description found",
            dimensions: dimensions,
            department_title: department_title || "Unknown Department"
          };
          setArt(newArt);
        } else {
          setArt(null);
        }
        setLoading(false);
      } catch(error){
        console.log(error);
        setLoading(false);
      }
    }
    getArtDetails();
  }, [id]);

  if(loading) return <Loading />;
  //console.log("p", art?.place_of_origin);

  return (
    <section className='art-details'>
      <div className='container'>
        <button type='button' className='flex flex-c back-btn' onClick={() => navigate("/art")}>
          <FaArrowLeft size = {22} />
          <span className='fs-18 fw-6'>Go Back To Artworks</span>
        </button>

        <div className='art-details-content grid'>
          <div className='art-details-img'>
            <img src = {art?.cover_img} alt = "cover img" />
          </div>

          <div className='art-details-info'>
            <div className='art-details-item description'>
              <span dangerouslySetInnerHTML={{ __html: art?.description }}></span>
            </div>

            
            <div className='art-details-item title'>
              <span className='fw-6'>{art?.title}</span>
            </div>

            <div className='art-details-item'>
              <span className='fw-6' style={{fontFamily:'Trebuchet MS'}}>Place: </span>
              <span > {art?.place_of_origin}</span>
            </div>
            <div className='art-details-item'>
              <span className='fw-6' style={{fontFamily:'Trebuchet MS'}}> Medium: </span>
              <span> {art?.medium_display}</span>
            </div>
            <div className='art-details-item'>
              <span className='fw-6' style={{fontFamily:'Trebuchet MS'}}>Credit Line: </span>
              <span>{art?.credit_line}</span>
            </div>

            <div className='art-details-item'>
              <span className='fw-6' style={{fontFamily:'Trebuchet MS'}} >Dimensions: </span>
              <span>{art?.dimensions}</span>
            </div>

            <div className='art-details-item'>
              <span className='fw-6' style={{fontFamily:'Trebuchet MS'}}>Department: </span>
              <span>{art?.department_title}</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Details