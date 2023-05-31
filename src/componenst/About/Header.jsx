import React, { useRef } from 'react'
import "../About/Headerc.css"
import {Link} from "react-router-dom"
import Button from "../Button"
const Header = () => {
    const menuHeaderRef = useRef()
    function openIn(e){
const clickElement =e.target
if(clickElement.classList.contains("fa-bars")){
menuHeaderRef.current.classList.add("actual")
}
    }
    function closeIn(e){
        const clickElement = e.target
        if(clickElement.classList.contains("fa-regular")){
        menuHeaderRef.current.classList.remove("actual")
        }
            }
    return (
        <div className='header '>
            <div className="menu-header " ref={menuHeaderRef}>
                <div className="close-in"type ="button"><i class="fa-regular fa-circle-xmark"onClick={closeIn}></i></div>
                <div className="menu-link">
                <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/service">Service</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className='menu2-link'>
                    <button className='btn-bit'>Consultancy <i class="fa-solid fa-arrow-right" ></i></button>
                </div>
            </div>
            <div className="header-top">
                <div className="bar1">
                    <a href="#"><i class="fa-regular fa-envelope"></i>support@gmail.com </a>
                    <span>|</span>
                    <a href="#"><i class="fa-solid fa-phone-flip"></i> +012(345) 67 89 </a>
                </div>
                <div className="bar2">
                    <div className="fa-bar">
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-behance"></i></a>
                    <a href="#"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                    <span>|</span>
                    <select name="" id="select">
                        <option value="english">English</option>
                        <option value="china">China</option>
                        <option value="bangla">Bangla</option>
                        <option value="hindi">Hindi</option>
                    </select>
                </div>
            </div>
            <div className="header-bottom ">
                <div className="about-logo">
                    <img src="http://upmedia.az/assets/img/home7/header_shape.svg" alt="" />
                </div>
                <div className="nav-link">
                <div className=" logo-src">
                    <img src="http://upmedia.az/assets/img/home7/logo.png" alt="" />
                </div>
                <div className=" nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>  
                <Link to="/service">Service</Link>  
                <Link to="/contact">Contact</Link>      
                </div>
                <div className="nav-button">
                <Button buttonValue="Consultancy" photo= <i class="fa-solid fa-arrow-right"></i> />
               <Link onClick={openIn}><i class="fas fa-bars"></i></Link>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Header