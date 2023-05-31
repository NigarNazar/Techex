import React from 'react'
import "../About/Cyber.css"
import Unlock from "../About/photo/unlock.png"
import Phone from "../About/photo/usability.png"
import Bubble from "../About/photo/chat (1).png"
const Cyber = () => {
  return (
    <div className='cyber'>
        <div className="cyber-secruty row">
            <div className="cyber-all col-lg-4 col-md-3 col-sm-12">
                <img src={Bubble} alt="" />
                <div className="cyber-text">
                    <h3>IT Consultancy</h3>
                    <span>Faster & Smarter Solutions</span>
                </div>
            </div>
            <div className="cyber-all col-lg-4 col-md-3 col-sm-12">
                <img src={Unlock} alt="" />
                <div className="cyber-text">
                    <h3>Cyber Security</h3>
                    <span>Faster & Smarter Solutions</span>
                </div>
            </div>
            <div className="cyber-all col-lg-4 col-md-3 col-sm-12">
                <img src={Phone} alt="" />
                <div className="cyber-text">
                    <h3>Development</h3>
                    <span>Faster & Smarter Solutions</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Cyber