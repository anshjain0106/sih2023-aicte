import React from 'react'
import './SearchCollege.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import './Card.css'
const SearchCollege = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [collegeList, setCollegeList] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    const collegeName = { searchTerm };

    const res = await axios.post("/api/college/searchcollege", collegeName)
    setCollegeList(res.data.data.documents);
    //   console.log(res.data.data.documents)
  };
  return (
    <>
      <nav className='main-nav1'>
        <div className="logo1">
          <img src="logo.png" alt="" />
        </div>
        <div className="menu-link1">
          <ul>
            <li>
              <a href="#">ABOUT US</a>
            </li>
            <li>
              <a href="#">HOMEPAGE</a>
            </li>
          </ul>
        </div>
      </nav>
      <section className='firstsec'>
        <img src="searchcollegebcgk2.jpg" className='searchcollegebcgk' alt="" />
        <h1>How can we help you?</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search About Colleges..."
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
        <div className="button-container">
          <button className="searchbutton" onClick={handleSearch}><b>Search</b></button>
        </div>
      </section>
      <h3>Results</h3>
      <div className="multiplecards">

       { collegeList.map((item)=>{
        return <div className="card-container">
        <div className="card">
          <iframe src="https://www.msrit.edu" frameborder="0"></iframe>
        </div>
        <div className="card-details">
          <p className='collegename'>{item.value.name}</p>
          <p className='collegelocation'>Location:- {item.value.city}</p>
          <p className='aicteid'>AICTE ID:- ID123</p>
          <p className='zipcode'>Zipcode:-560054</p>
          <p className='type'>Type:- Central</p>
        </div>
      </div>
       })}
      </div>
    </>
  )
}

export default SearchCollege
