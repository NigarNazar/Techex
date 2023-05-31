import React from 'react'
import "../Home/SectionFour.css"
const SectionFour = () => {
    return (
        <div className='sectionfour' data-aos="fade-up"
        data-aos-duration="2000">
            <div className='benefit row'>
                <div className="left-fit col-12 col-md-12 col-lg-6">
                    <img src="http://upmedia.az/assets/img/home7/630x500.png" alt="" />
                </div>
                <div className="right-fit col-12 col-md-12 col-lg-6">
                    <h6><img src="http://upmedia.az/assets/img/home7/title.svg" alt="" />  Story of Techex.</h6>
                    <h1>Workflow that works for your <span>benefit.</span></h1>
                    <p>Sed Ut Perspiciatis Unde Omnis Natus Error Sity Voluptatem Accusa Ntium <br /> Doloremque Laudantie Totam Rem Aperiamea Queipsa Quae Abillonven Tore <br />
                        Veritatis.</p>
                    <div className="arrow-x">
                        <span><img src="http://upmedia.az/assets/img/home7/arrow_trun.svg" alt="" />  See a user’s full customer journey across devices.</span>
                        <span><img src="http://upmedia.az/assets/img/home7/arrow_trun.svg" alt="" />  Discover the drop-off points for every flow on your site.</span>
                        <span><img src="http://upmedia.az/assets/img/home7/arrow_trun.svg" alt="" />  Lorem ipsum dolor sit amet, consectetur.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFour