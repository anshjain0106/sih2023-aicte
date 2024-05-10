import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
    <nav className='main-nav'>
        <div className="logo">
            <img src="logo.png" alt="" />
        </div>
        <div className="menu-link">
            <ul>
                <li>
                    <a href="#">BTN-1</a>
                </li>
                <li>
                    <a href="#">BTN-1</a>  
                </li>
                <li>
                    <a href="#">BTN-1</a>
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default NavBar
