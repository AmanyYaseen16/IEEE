import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css"


const Header = () => { //functional component Header
    return(
        <div className='holder'>
            <header className="header">
                <Navbar/>
                <div className="header-content flex-c text-center text-white">
                    <h2 className="header-title
                    text-capitalize"> Welcome to Chicago Art Institute Explorer. </h2> <br/>
                    <p className="header-text fs-18 fw-3">
                    An Epic Journey Through Chicago's Art.</p>
                    <SearchBar/>
                </div>
            </header>
        </div>
    )
}

export default Header