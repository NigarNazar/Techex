import React from 'react'
import "../Home/Section.css"

const Section = () => {
  return (
    <div className='section'>
        <div className="img-class2"><img src="http://upmedia.az/assets/img/home7/group.svg" alt="" /></div>
<div className='saas row'>
  <div className="left-side col-12 col-md-12 col-lg-6">
    <h6>Creative SAAS Website</h6>
    <h1>Best website for  <span>SAAS</span> business</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste nesciunt dolore <br />  placeat!</p>
  </div>
  <div className="right-side col-12 col-md-12 col-lg-6">
  <img src="http://upmedia.az/assets/img/home7/630x500.png" alt="" />
  
  </div>
</div>
<div className="scroll">
  <img src="http://upmedia.az/assets/img/home7/shape_02.svg" alt="" />
</div>
<div className="end">
  <img src="http://upmedia.az/assets/img/home7/shape_03.svg" alt="" />
</div>
    </div>
  )
}

export default Section