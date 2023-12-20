import React from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <>
       <div className="logo-container">
        <Link to='/'><img className='logoImage' src="logo.png" alt="" /></Link>
       </div>
       <section className='section1'>
        <img className="backgroundImage" src="homepage_background.png" alt="" />
        <div className="headings">
            <p className='aboutUs'><Link className ="link1" to="/aboutus">ABOUT US</Link></p>
            <p className='collegeSearch'><Link className="link2" to="/searchCollege">COLLEGE SEARCH</Link></p>
            <p className='projectSearch'><Link className ="link3" to="/searchProjects">PROJECT SEARCH</Link></p>
        </div>
        <div className="homeHeading">
            <h1 className='welcomeAICTE'>WELCOME TO AICTE</h1>
        </div>
       </section>
       <div className="section2Heading">
        <h2 className='part2'><span className='part1'>WHAT IS</span> AICTE?</h2>
       </div>
       <section className='section2'>
        <p className='section2Details'>
        All India Council for Technical Education (AICTE) was set up in November 1945 as a national-level Apex Advisory Body to conduct a survey on the facilities available for technical education and to promote development in the country in a coordinated and integrated manner.
        </p>
        <img className='section2Img' src="section2pic.png" alt="" />
       </section>
       <div className="section3Heading">
        <h2 className='part4'>INITIATIVES & <span className='part3'>SCHEMES</span></h2>
       </div>
       <section className='section3'>
      {/* <img src="initiatives_bcgk.png" className='initiativesbcgk' alt="" /> */}
      <div className="card1">
        <img src="schemelogo1.png" className="img1" alt="" />
        <p className='title1'>National e-Scholarship</p>
        <p className='desc1'>National e-Scholarship is the one-stop solution to help students seek various scholarships.</p>
        <div className='bluebar1'></div>
      </div>
      <div className="card2">
        <img src="schemelogo2.png" className="img2" alt="" />
        <p className='title2'>Vidya Lakshmi</p>
        <p className='desc2'>Vidya Lakshmi is a first-of-its-kind portal for students seeking educational loan.</p>
        <div className='bluebar2'></div>
      </div>
      <div className="card3">
        <img src="schemelogo3.png" className="img3" alt="" />
        <p className='title3'>Pragati and Saksham</p>
        <p className='desc3'>Scholarship for girls under the Pragati Scheme and scholarship for differently-abled students under Saksham Scheme.</p>
        <div className='bluebar3'></div>
      </div>
      <div className="card4">
        <img src="schemelogo4.png" className="img4" alt="" />
        <p className='title4'>India Innovation Initiative</p>
        <p className='desc4'>India's largest innovation challenges jointly promoted by the CII and Department of Science & Technology.</p>
        <div className='bluebar4'></div>
      </div>
    </section>
    <div className="section4Heading">
        <h2 className='part6'><span className='part5'>EMINENTS</span> & UNFORGETTABLES</h2>
    </div>
    <section class="container">
	<div class="slider-wrapper">
		<div class="slider">
			<img id="slide-1" src="imgg1.jpg" alt="" />
			<img id="slide-2" src="imgg2.jpg" alt="" />
			<img id="slide-3" src="imgg3.jpg" alt="" />
		</div>
		<div class="slider-nav">
			<a href="#slide-1"></a>
			<a href="#slide-2"></a>
			<a href="#slide-3"></a>
		</div>
	</div>
</section>
<footer className='homepage_footer'>© 2023 Team Dev Yogis. All rights reserved.</footer>
    </>
  )
}

export default HomePage
