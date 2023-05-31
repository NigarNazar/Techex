import React from 'react'
import "../Contact/SectionContact.css"
import { Link } from 'react-router-dom'
const SectionContact = () => {
  return (
    <div className='sectionContact'>
 <div className="contact-set-time">
        <h1>Contact Us</h1>
<div className="contact-top">
 <Link to="/">Home</Link>
    <span><i class="fa-solid fa-chevron-right"></i></span>
    <Link to="/contact">Contact Us</Link>
</div>
        </div>
    </div>
  )
}

export default SectionContact