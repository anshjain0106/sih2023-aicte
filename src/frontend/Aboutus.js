import React from 'react'
import './Aboutus.css'

const Aboutus = () => {
  return (
    <>
    <nav className='navbar'>
        <img src="logo.png" className="logo" alt="" />
    </nav>
    <div className='aicteimg'>
        <img src="aictepic.png" className="aicteimage" alt="" />
    </div>
    <section className='section02'>
        <h2 className='aboutustitle'>ABOUT US</h2>
        <p>The beginning of formal technical education in India can be dated back to the mid-19th century. Major policy initiatives in the pre-independence period included the appointment of the Indian Universities Commission in 1902, issue of the Indian Education Policy Resolution in 1904, and the Governor General’s policy statement of 1913 stressing the importance of technical education, the establishment of IISc in Bangalore, Institute for Sugar, Textile & Leather Technology in Kanpur, N.C.E. in Bengal in 1905, and industrial schools in several provinces.</p>
    </section>
    <section className='section03'>
        <div className="first_sec">
        <h5 className='first_sec_head'>1943</h5>
        <p className='first_sec_text'>Constitution of the Technical Education Committee of the Central Advisory Board of Education (CABE)</p>
        </div>
        <div className='vl1'></div>
        <div className="second_sec">
        <h5 className='second_sec_head'>1944</h5>
        <p className='second_sec_text'>Preparation of the Sergeant Report</p>
        </div>
        <div className='vl2'></div>
        <div className="third-sec">
        <h5 className='third_sec_head'>1945</h5>
        <p className='third_sec_text'>Formation of the All India Council for Technical Education (AICTE)</p>
        </div>
    </section>
    <section className='section04'>
        <div className='sec04_1'>
            <h5><u>Role of National Working Group</u></h5>
            <p><i>The Government of India (the Ministry of Human Resource Development) also constituted a National Working Group to look into the role of AICTE in the context of proliferation of technical institutions, maintenance of standards, and other related matters. The Working Group recommended that AICTE be vested with the necessary statutory authority for making it more effective, which would consequently require restructuring and strengthening with the necessary infrastructure and operating mechanisms.</i></p>
        </div>
        <div className='nwg_img'>
            <img src="nationalworkinggrp.png" alt="" />
        </div>
    </section>
    <section className='section05'>
        <img src="aicteact.png" alt="" />
        <div className="sec05_details">
        <h5><u>The All India Council For Technical Education Act 1987</u></h5>
        <p><i>The AICTE Act was constituted to provide for the establishment of an All India Council for Technical Education with a view to proper planning and co-ordinated development of a technical education system throughout the country, the promotion of qualitative improvements of such education in relation to planned quantitative growth, and regulation & proper maintenance of norms and standards in the technical education system and for the matters connected therewith.</i></p>
        </div>
    </section>
    <footer className='aboutus_footer'>© 2023 Team Dev Yogis. All rights reserved.</footer>
    </>
  )
}

export default Aboutus
