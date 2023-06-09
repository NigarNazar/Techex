import React, { useRef } from 'react'
import "../Home/Header.css"
import { Link } from 'react-router-dom'


const Header = () => {
    const overlayMenuRef = useRef()
    function openMenu(e) {
        const target = e.target
        if (target.classList.contains("fa-bars")) {
            overlayMenuRef.current.classList.add("aktive")
        }
    }
    
    function closeMenu(e) {
        const target = e.target
        if (target.classList.contains("fa-regular")){
            overlayMenuRef.current.classList.remove("aktive")
        }
   
    }
    return (
        <div className='Home'>
            <div className='overlaymenu' ref={overlayMenuRef}>
                <div className='close' type ="button" ><i class="fa-regular fa-circle-xmark "onClick={closeMenu}></i></div>
                <div className='menu'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/service">Service</Link>
                    <Link to="/contact">Contact</Link>

                </div>

            </div>

            <header className='header'>
                <img className='logo' src="http://upmedia.az/assets/img/home7/header_shape.svg" alt="" />
                <div className='navbar'>
                    <div className='left'>
                        <img src="http://upmedia.az/assets/img/home7/logo.png" alt="" />
                    </div>
                    <Link className='fabars' onClick={openMenu}><i class="fas fa-bars"></i></Link>
                    <div className='top'>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/service">Service</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                   
                
                </div>
            </header>

        </div>
    )
}

export default Header