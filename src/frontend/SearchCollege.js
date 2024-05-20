import React from 'react'
import './SearchCollege.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import './Card.css'
import { Link } from 'react-router-dom';
const SearchCollege = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [collegeList, setCollegeList] = useState([]);
  const [collegeList1, setCollegeList1] = useState([]);
  const [iterate ,setiterate]=useState(true)
  const [visibleResults, setVisibleResults] = useState(10);

 const initialLinks = [
  'https://bit-bangalore.edu.in/',
  'https://www.bmsce.ac.in/',
  'https://www.acsce.edu.in/',
  'https://www.dsce.edu.in/',
  'https://iiitkalyani.ac.in/',
  'https://www.iith.ac.in/',
  'https://www.nmit.ac.in/',
  'https://newhorizoncollegeofengineering.in/',
  'http://www.iimchyderabad.com/',
  'https://www.acharya.ac.in/',
  'https://www.cmrit.ac.in/',
  'https://www.rvce.edu.in/',
  'https://www.iitbbs.ac.in/',
  'https://www.iitr.ac.in/',
  'https://www.iitkgp.ac.in/',
  'https://www.iitb.ac.in/',
 ]

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const sort=async(data)=>{
    console.log("in sort function ............",data[0].item)
    await data.sort((a,b)=>a.item.nirf_ranking-b.item.nirf_ranking)
    return data 
  }

  // const pushing=async(res,loc,typ)=>{
  //   let dt=[]
  //      for (let index = 0; index < res.data.data.length; index++) {
  //       if(loc==res.data.data[index].college_location && typ==res.data.data[index].college_type){
  //         dt.push(res.data.data[index])
  //       }
        
  //     } 
  //     return dt
  // }
  const handleSearch = async (e) => {
    e.preventDefault();

    const collegeName = { searchTerm };

    const res = await axios.post("/api/college/searchcollege", collegeName)
    console.log(res.data)
    if(res.data.msg=="value set in reddis"){
console.log("in i f...........")
      
      let loc=res.data.data[0].item.college_location
      let typ=res.data.data[0].item.college_type
      console.log(loc,typ)
      let dt=res.data.data
     

 

      console.log(dt)
      setCollegeList(dt);
      setiterate(true)

    }
    else{
      console.log(res.data.data.documents)

      setCollegeList1(res.data.data.documents)
      setiterate(false)
      console.log(collegeList)
    }
    setVisibleResults(10);
      console.log(res.data.data.documents)
  };

  const handleLoadMore = () => {
    setVisibleResults((preVisibleResults) => preVisibleResults + 1)
  };

  return (
    <>
      <nav className='main-nav1'>
        <div className="logo1">
          {/* <Link to ='/'><img className='logo_college' src="logo.png" alt="" /></Link> */}
        </div>
        {/* <div className="menu-link1">
          <ul>
            <li>
              <Link className ="aboutus_college" to="/aboutus">ABOUT US</Link>
            </li>
            <li>
              <Link className = "homepage_college" to="/">HOMEPAGE</Link>
            </li>
          </ul>
        </div> */}
      </nav>
      <section className='firstsec'>
        <img src="searchcollegebcgk2.jpg" className='searchcollegebcgk' alt="" />
        <div className="menu-link1">
          <ul>
            <li>
              <Link className ="aboutus_college" to="/aboutus">ABOUT US</Link>
            </li>
            <li>
              <Link className = "homepage_college" to="/">HOMEPAGE</Link>
            </li>
          </ul>
        </div>
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
      <div className="result-heading">
      <h3 className='results_college'>RESULTS</h3>
      </div>
      <div className="multiplecards">

       { !iterate && collegeList1?.slice(0,visibleResults).map((item,index)=>{
        console.log(item.value)
        return <div className="card-container">
        <div className="card">
          {/* <iframe src={initialLinks[index%initialLinks.length]} frameborder="0"></iframe> */}
        </div>
        <div className="card-details">
          <p className='collegename'>{item.value.name}</p>
          <p className='collegelocation'>Location:- {item.value.city}</p>
          {/* <p className='aicteid'>Type: {item.value.college_type}</p>
          <p className='zipcode'>Nirf Rank:-{item.value.nirf_ranking}</p> */}
          {/* <p className='type'>Type:- Central</p> */}
        </div>
      </div>
       })}
        { iterate && collegeList?.slice(0,visibleResults).map((item,index)=>{
       
        return <div className="card-container">
        <div className="card">
          {/* <iframe src={initialLinks[index%initialLinks.length]}  frameborder="0"></iframe> */}
        </div>
        <div className="card-details">
          
        <p className='collegename'>{item.item.college_name}</p>
          <p className='collegelocation'>Location:- {item.item.college_location}</p>
          <p className='aicteid'>Type: {item.item.college_type}</p>
          <p className='zipcode'>Nirf Rank:-{item.item.nirf_ranking}</p>  
          {/* <p className='type'>Type:- Central</p> */}
        </div>
      </div>
       })} 
      </div>
      {iterate && visibleResults < collegeList?.length && (
        <div className="button-container">
          <button className='loadmorebutton' onClick={handleLoadMore}>
            <b>Load More</b> 
          </button>
        </div>
      )}
      {!iterate && visibleResults < collegeList1?.length && (
        <div className="button-container">
          <button className='loadmorebutton' onClick={handleLoadMore}>
            <b>Load More</b>
          </button>
        </div>
      )}
    </>
  )
}

export default SearchCollege



