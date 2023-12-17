import React from 'react'
import NavBar from './NavBar'
import './HomePage.css'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
    <NavBar />
    {/* main-section1 */}
    <section className='section1'>
        <div className="welctoaicte">
            <h1>WELCOME TO AICTE</h1>
            <h4>All India Council for Technical Education (AICTE) was set up in November 1945 as a national-level Apex Advisory Body to conduct a survey on the facilities available for technical education and to promote development in the country in a coordinated and integrated manner.</h4>
            <button className='aboutbtn' onClick={() => navigate("/aboutus")}>About AICTE</button>
        </div>
        <div className='section1img'>
            <img src="section1.png" alt="section1 pic" />
        </div>
    </section>
    <div className='quicklink'>
      <p>QUICK LINKS</p>
      <hr className='orangehr'/>
    </div>
    <section className='section2'>
        <div className='section2img'>
            <img src="section2.png" alt="section2 img" />
        </div>
        <div className="four-button">
        <button className='aboutus' onClick={() => navigate("/aboutus")}>ABOUT US</button>
        <button className='newsroom'>NEWSROOM</button>
        <button className='initiatives'>INITIATIVES</button>
        <button className='schemes'>SCHEMES</button>
        </div>
    </section>
    <div className='initiatives_heading'>
      <p>INITIATIVES & SCHEMES</p>
      <hr className='orangehr'/>
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
    <div className='eminent'>
      <p>EMINENTS AND UNFORGETTABLES</p>
      <hr className='orangehr'/>
    </div>
    <section className='section4'>
      <img src="eminent1.png" className="eminent1" alt="" />
      <img src="eminent2.png" className="eminent2" alt="" />
    </section>
    <hr className='lasthr'/>
    <footer className='homepage_footer'>© 2023 Team Dev Yogis. All rights reserved.</footer>
    </>
  )
}

export default HomePage
