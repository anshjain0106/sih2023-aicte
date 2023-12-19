import React from 'react'
import './SearchProjects.css'
import axios from 'axios';
import { useState, useEffect } from 'react'; 
const SearchProjects = () => {
    const [projectname, setprojectname] = useState('');
    const [projectList, setProjectList] = useState([]);
    const handleChange=(e)=>{
        setprojectname(e.target.value);
        
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const prj={projectname}
        const res=await axios.post('/api/college/searchProject',prj)
        console.log(res);
        setProjectList(res.data.data.documents)
        console.log(projectList)
    }
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
        <div className="search-bar">
          <input 
            id='projectName'
            name='projectName'
            type="text"
            placeholder="Search..."
            value={projectname} onChange={handleChange}
          />
        </div>
        <div className="button-container">
          <button className="searchbutton" onClick={handleSubmit}><b>Search</b></button>
        </div>
    </section>
    <div className="projects-results">
        <h1>Results</h1>
    </div>
    <div className="multiple-project-cards">

       {
        projectList.map((item)=>{
            return  <div className="project-card">
            <h2 className='projID'>{item.id}</h2>
            <h2 className='projTitle'>{item.value.projectname}</h2>
            <p className='prof-name'>{item.value.undertaken}</p>
            <p className='college-name'>{item.value.collegename}</p>
        </div>
        }) 
       }
    </div>
   </>
  )
}

export default SearchProjects