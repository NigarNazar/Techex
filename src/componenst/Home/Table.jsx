import React from 'react'
import "../Home/Table.css"
import Badge from "../About/photo/approved-signal (1).png"
import RedBadge from "../About/photo/approved-signal (2).png"
import Basic from "../About/Basic.json"
const Table = () => {
  return (
    <div className='table'>
      <div className="pricing row">
        <div className="pricing-plan1 col-12">
          <div className="media"><img src="http://upmedia.az/assets/img/home7/bg_02.png" alt="" /></div>
          <div className="pre-top" data-aos="fade-up"
            data-aos-duration="2000">
            <h6><img src="http://upmedia.az/assets/img/home7/title.svg" alt="" /> Pricing Table</h6>
            <h1>Our <span>pricing</span> plans for everyday</h1>
          </div>
          <div className="pre-bottom">
            <a href="#">Bill Pament Yearly <br /> <span>save 15% Total</span></a>
            <a href="#">Bill Pament Monthly</a>
          </div>
        </div>
        {
            Basic && Basic.map(value => {
              return (
                <>
                  <div className="pricing-testing col-sm-12 col-lg-4 col-md-6"data-aos="fade-up"
            data-aos-duration="2000">
          
          <div className="testing1" key={value.id}>
            <div className="img-test">
              <img src={value.img} alt="" />
            </div>
            <div className="text-test">
              <h2>BASIC PLAN</h2>
              <p>
                <sup>$</sup>
                <span>{value.title}</span>
                /monthly
              </p>

            </div>
          </div>
          <div className="testing2">
            <div className="tester">
              <a href="#"><img src={Badge} alt="" /> Powerful Admin Panel</a>
              <a href="#"><img src={Badge} alt="" /> Support Via E-Mail</a>
              <a href="#"><img src={RedBadge} alt="" /> Advanced Custom Fileds</a>
              <a href="#"><img src={RedBadge} alt="" />Planning Solution</a>
              <a href="#"><img src={RedBadge} alt="" />Enhanced Support</a>
            </div>
          </div>
        </div>

                </>
              )
            })
          }
      

      </div>
    </div>
  )
}

export default Table