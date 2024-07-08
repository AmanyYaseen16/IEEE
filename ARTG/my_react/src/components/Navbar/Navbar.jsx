import React , {useState} from 'react'
import {Link} from 'react-router-dom';
import "./Navbar.css"
import Logo from "../../images/llogo.png";


const Navbar = () => {

  const [color, setColor] = useState(false)  //state variable to the background color of nav bar 
  const changeColor = () => {
    if (window.scrollY >= 80) {   // so we can change color on scrolling 
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll' , changeColor)  // to listen to the scroll event 
  return (
    <nav className={color? "navigation navigation-bg":'navigation' }>
      <div className='container bar-content flex'>
        <div className='brand flex flex-sb'>
          <Link to="/" className='bar-brand flex text-white'>
            <img src={Logo} alt='brand logo'/>
            <span className='text-capitalize fw-7 fs-18 ls-1'> Art <span style={{marginLeft:20}} > Journey  </span> 
               </span>
          </Link>

        </div>
        
            <nav className='nav-item'>
              <Link to = 'art' className='nav-link text-capitalize text-white
              fs-17 fw-5 ls-1'>Home</Link>
              <Link to = 'about' className='nav-link text-capitalize text-white
              fs-17 fw-5 ls-1'>About</Link>
            </nav>
          
        
      </div>
    </nav>
  )
}

export default Navbar