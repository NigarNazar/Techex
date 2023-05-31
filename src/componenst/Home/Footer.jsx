import React from 'react'
import "../Home/Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
    <div className="move1">
        <img src="http://upmedia.az/assets/img/home7/shape_07.svg" alt="" />
    </div>
<div className="footer-top">
    <div className="foot-left">
        <img src="http://upmedia.az/assets/img/home7/logo.png" alt=""/>

        <span>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor, <br /> There are many variations of <br /> passages of lorem Ipsum available.</span>
        <div className="foot-all">
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-behance"></i></a>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
        </div>
    </div>
    <div className="foot-right">
        <h4>Our Address</h4>
    
            <p>Phone:<a href="#">+88 95006802</a></p>
            <p>Email:<a href="#">info@gmail.com</a></p>
            <p>Address:<a href="#">55 Clark St,Brooklyn NY <br /> 11201,USA</a></p>
    
    </div>
    <div className="foot-up">
        <h4>Quick Links</h4>
            <Link to="/"><i class="fa-solid fa-angles-right"></i>Home</Link>
            <Link to="about"><i class="fa-solid fa-angles-right"></i>About</Link>
            <Link to="service"><i class="fa-solid fa-angles-right"></i>Service</Link>
            <Link to="contact"><i class="fa-solid fa-angles-right"></i>Contact</Link>

       
    </div>
    <div className="foot-down">
        <h4>Instagram</h4>
        <div className="image1">
<img src="http://upmedia.az/assets/img/blog/ip1.jpg" alt="" />
<img src="http://upmedia.az/assets/img/blog/ip1.jpg" alt="" />
<img src="http://upmedia.az/assets/img/blog/ip1.jpg" alt="" />
        </div>
        <div className="image2">
<img src="http://upmedia.az/assets/img/blog/ip1.jpg" alt="" />
<img src="http://upmedia.az/assets/img/blog/ip1.jpg" alt="" />
<img src="http://upmedia.az/assets/img/blog/ip1.jpg" alt="" />
        </div>
    </div>
</div>
<div className="footer-bottom">
    <div className="bottom-left">
<span>© 2023</span>
<span> <a href="#">Techex.</a> All Rights Reserved</span>
    </div>
    <div className="bottom-right">
<a href="#">Terms & Conditions</a>
<p>-</p>
<a href="#">Privacy & Terms</a>
    </div>
</div>
<div className="move2">
    <img src="http://upmedia.az/assets/img/home7/shape_05.svg" alt="" />
</div>
    </div>
  )
}

export default Footer