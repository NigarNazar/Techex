import React from 'react'
import "../Service/Services.css"
import { Link } from 'react-router-dom'
const Services = () => {
  return (
    <div className='services'>
    <div className="about-services">
    <h1>Services</h1>
<div className="vue-top">
<Link to="/">Home</Link>
<span><i class="fa-solid fa-chevron-right"></i></span>
<Link to="/service">Service</Link>
</div>
    </div>
</div>
  )
}

export default Services