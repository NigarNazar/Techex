import React from 'react'
import "../About/Footter.css"
import { Link } from 'react-router-dom'
const Footter = () => {
    return (
        <div className='footter '>
            <div className="footter-settime ">
            <div className="call-service-item">
                <img src="http://upmedia.az/assets/img/home7/logo.png" alt="" />
                <span>
                    Sed ut perspiciatis unde omnis <br />
                    natus voluptatem accusa ntiumy <br />
                    doloremque laudantium.omnis natus <br />
                    voluptatem accusa ntiumy doloremque laudantium
                </span>
                <div className="link-items">
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-behance"></i></a>
                    <a href="#"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>
            <div className="find-service-item">
                <h4>Company</h4>
                <Link to="/"><i class="fa-solid fa-angles-right"></i> <span>Home</span> </Link>
                <Link to="about"><i class="fa-solid fa-angles-right"></i> <span>About</span></Link>
                <Link to="service"><i class="fa-solid fa-angles-right"></i> <span>Service</span></Link>
                <Link to="contact"><i class="fa-solid fa-angles-right"></i> <span>Contact</span></Link>
            </div>
            <div className="find-service-item">
                <h4>Company</h4>
                <Link to="/"><i class="fa-solid fa-angles-right"></i> <span>Home</span> </Link>
                <Link to="/about"><i class="fa-solid fa-angles-right"></i> <span>About</span></Link>
                <Link to="/service"><i class="fa-solid fa-angles-right"></i> <span>Service</span></Link>
                <Link to="/contact"><i class="fa-solid fa-angles-right"></i> <span>Contact</span></Link>
            </div>
            <div className="photo-all-item">
                <h4>News News</h4>
                <div className="photo-first">
                   <h5>1170X780</h5>
                    <div className="users">
                        <span><i class="fa-solid fa-calendar-days"></i> 24th Nov 2020</span>
                        <a href="#">User's Perspes Using <br /> Story Structure</a>
                    </div>
                </div>
                <div className="photo-second">
                  <h5>1170X780</h5>
                    <div className="optimist">
                        <span><i class="fa-solid fa-calendar-days"></i> 15th July 2021</span>
                        <a href="#">Optimiz For Assistive <br /> Technology Users</a>
                    </div>
                </div>
            </div>

            </div>
            <div className="footter-leg">
                <h5>© 2021 <span>Techex.</span> All Rights Reserved</h5>
            </div>
        </div>
    )
}

export default Footter