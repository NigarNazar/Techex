import React from 'react'
import {Link} from "react-router-dom"
import "../About/Section.css"
const Section = () => {
  return (
    <div className='sections'>
        <div className="about-section">
        <h1>About Us</h1>
<div className="sec-top">
 <Link to="/">Home</Link>
    <span><i class="fa-solid fa-chevron-right"></i></span>
    <Link to="/about">About</Link>
</div>
        </div>
    </div>
  )
}

export default Section