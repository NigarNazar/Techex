import React from 'react'
import "../About/Sec.css"
import Hacker from "../About/photo/hacker.png"
import Arrow_circle from "../About/photo/target.png"
const Sec_sec =  () => {
  return (
    <div className='sec-sec'>
<div className="sec-about row">
<div className='col-lg-6 col-md-12 col-sm-12 sec-top'>
<div className="sec-left">
    <h6>ABOUT COMPANY</h6>
    <h2>Get’s IT Solutions For <br />
Expert Consultants</h2>
    <span>Sed ut perspiciatis unde omnis natus error  sit voluptatem accusa ntium doloremque laudantium totam.</span>
</div>
<div className="sec-right">
    <div className="right-top">
    <div className="hacker">
        <img src={Hacker} alt="" />
       </div>
<div className="human">
<h4>Professinoal Consultants</h4>
<span>Sed ut perspiciatis unde omnis iste natus error <br />
      voluptatem accusantium doloremque</span>
</div>
    </div>
    <div className="right-top">
        <div className="arrow-circle">
            <img src={Arrow_circle} alt="" />
        </div>
<div className="human">
<h4>Managed IT Solutions</h4>
<span>Sed ut perspiciatis unde omnis iste natus error <br /> voluptatem accusantium doloremque</span>
</div>
    </div>
    
</div>
</div>
<div className='col-lg-6 col-md-12 col-sm-12 sec-bottom'>
    <div className="bot-img"></div>
    <div className="border-text">
        <img src="http://upmedia.az/assets/img/home1/about-us.jpg" alt=""  />
    </div>
    <div className="border-right"></div>

</div>
</div>
    </div>
  )
}

export default Sec_sec