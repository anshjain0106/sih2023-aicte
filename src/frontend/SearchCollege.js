import React from 'react'
import './SearchCollege.css'
import SearchBar from './SearchBar'
import Card from './Card'

const SearchCollege = () => {
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
        <img src="searchcollegebcgk.png" alt="" />
        <h1>How can we help you?</h1>
        <SearchBar/>
    </section>
    <h3>Results</h3>
    <div className="multiplecards">
        <Card/>
        <Card/>
        <Card/>
    </div>
    </>
  )
}

export default SearchCollege
