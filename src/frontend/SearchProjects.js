import React from 'react'
import './SearchProjects.css'

const SearchProjects = () => {
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
        <img className='project-image' src="search_projects.jpg" alt="" />
        <h1 className='searchproj'>Search for Projects</h1>
        {/* <h1>How can we help you?</h1> */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value=""
          />
        </div>
        <div className="button-container">
          <button className="searchbutton"><b>Search</b></button>
        </div>
    </section>
    <div className="projects-results">
        <h1>Results</h1>
    </div>
    <div className="multiple-project-cards">
        <div className="project-card">
            <h2 className='projID'>Project ID</h2>
            <h2 className='projTitle'>Project Title</h2>
            <p className='prof-name'>Professor Name</p>
            <p className='college-id'>College ID</p>
            <p className='college-name'>College Name</p>
        </div>
        <div className="project-card">
            <h2 className='projID'>Project ID</h2>
            <h2 className='projTitle'>Project Title</h2>
            <p className='prof-name'>Professor Name</p>
            <p className='college-id'>College ID</p>
            <p className='college-name'>College Name</p>
        </div>
        <div className="project-card">
            <h2 className='projID'>Project ID</h2>
            <h2 className='projTitle'>Project Title</h2>
            <p className='prof-name'>Professor Name</p>
            <p className='college-id'>College ID</p>
            <p className='college-name'>College Name</p>
        </div>
    </div>
   </>
  )
}

export default SearchProjects