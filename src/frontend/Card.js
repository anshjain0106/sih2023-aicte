import React from 'react'
import './Card.css'

const Card = () => {
  return (
    <>
    <div className="card-container">
        <div className="card">
            <iframe src="https://www.msrit.edu" frameborder="0"></iframe>
        </div>
        <div className="card-details">
            <p className='collegename'>Ramaiah Institute of Technology</p>
            <p className='collegelocation'>Location:- Bengaluru</p>
            <p className='aicteid'>AICTE ID:- ID123</p>
            <p className='zipcode'>Zipcode:-560054</p>
            <p className='type'>Type:- Central</p>
        </div>
    </div>
    </>
  )
}

export default Card
