import React, { useState } from 'react'
import "../Home/Faq.css"
import Data from './Data'
import Accardion from './Accardion'


const Faq = () => {
    const [data, setData] = useState(Data)
    return (
        <div className='faq'>
            <div className="top-faq"></div>
            <div className="bottom-faq row">
                <div className="col-lg-6 col-md-12 accordions">
                    {Data.map((value) => {
                        return (
                       <Accardion {...value} />
                        )
                    })}

                </div>
                <div className="col-lg-6  col-md-6 photo-animation">
                    <img src="http://upmedia.az/assets/img/home7/faq.svg" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Faq