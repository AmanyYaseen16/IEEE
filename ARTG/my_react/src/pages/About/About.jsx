import React from 'react';
import "./About.css";
import aboutImg from "../../images/unnamed.png"; //image of AIC 

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>Art Institute of Chicago</h2>
            <p className='fs-16 fw-5'>Founded in 1879, the Art Institute of Chicago is one of the world’s major museums, housing an extraordinary collection of objects from across places, cultures, and time. We are also a place of active learning for all—dedicated to investigation, innovation, education, and dialogue—continually aspiring to greater public service and civic engagement.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About