import React from 'react'
import './SearchProjects.css'
import axios from 'axios';
import { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
const SearchProjects = () => {
    let arr1=[]
    const [projectname, setprojectname] = useState('');
    const [projectList, setProjectList] = useState([]);
    const [projectList1, setProjectList1] = useState([]);
    const [iterate,setiterate]=useState(true)
    const handleChange=(e)=>{
        setprojectname(e.target.value);
        
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const prj={projectname}
        const res=await axios.post('/api/college/searchProject',prj)
        console.log(res.data.data);
        if(res.data.msg=='Value set in REDIS'){
            console.log("in if.......")
            setProjectList(res.data.data)
            setiterate(true)
          
        }
        else{
            
            setProjectList1(res.data.data.documents)
            

            setiterate(false)

         }
        
    }
  return (
   <>
   <nav className='main-nav1'>
        <div className="logo1">
            {/* <Link to = '/'><img className="logo_college" src="logo.png" alt="" /></Link> */}
        </div>
        <div className="menu-link1">
            <ul>
                <li>
                    <Link to="/aboutus">ABOUT US</Link>
                </li>
                <li>
                    <Link to="/">HOMEPAGE</Link>
                </li>
            </ul>
        </div>
    </nav>
    <section className='firstsec_proj'>
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
        <h1 className='results_proj'>RESULTS</h1>
    </div>
    <div className="multiple-project-cards">

       {iterate &&
        projectList.map((item)=>{
            return  <div className="project-card">
            <h2 className='projTitle'>{item.item.ProjectName}</h2>
            <button className='projID'>{item.item.ProjectId}</button>
            <p className='prof-name'>{item.item.Undertaken}</p>
            <p className='college-name'>{item.item.CollegeName}</p>
        </div>
        }) 
       }
        {!iterate && projectList1.map((item)=>{
            return  <div className="project-card">
            <h2 className='projTitle'>{item.value.projectname} </h2>
            <button className='projID'>{item.id}</button>
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