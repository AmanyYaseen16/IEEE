import React, { useEffect, useRef } from 'react'
import {FaSearch} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import { useGlobalContext } from '../../context';
import "./SearchBar.css"

const SearchBar = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);  //focus to the input field, so the user can start typing immediately
  const handleSubmit = (e) => {  //prevent the default behaviour
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi, "")).length === 0) {  // if the input contains characters the search term will
      setSearchTerm("landscape");  // set to (landscape)
      setResultTitle("Please Enter Something...");  //prompt the user to enter a meaningful word
    } else {
      setSearchTerm(searchText.current.value);
    }
    navigate("/art")
  };
  return (
    <div className='search-bar'>
      <div className='container'>
        <div className='search-content'>
          <form className='search-bar' onSubmit={handleSubmit}>
            <div className='search-elem flex flex-sb bg-white'>
              <input type='text' className='search-control' 
              placeholder="Unearthing Art, One Search at a Time.." ref={searchText}/>
              <button type='submit' className='flex flex-c' onClick={handleSubmit}>
                <FaSearch className='text-black' size= {30}/>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchBar