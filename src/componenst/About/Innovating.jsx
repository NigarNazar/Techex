import React , {useState} from "react"
import "../About/Innovating.css"
import Objects from "./Objects"
import Accordions from './Accordions'
const Innovating = () => {
    const [innov, setInnov] = useState(Objects)
    return (
        <div className='innovating'>
            <div className="innovating-all row">
                <div className="innovatin-self-item col-lg-6 col-md-12 col-sm-12">
                 <img src="	http://upmedia.az/assets/img/faq_home_2.jpg" alt="" />
                </div>
                <div className="innovating-service-item col-lg-6 col-md-12 col-sm-12">
                    <h6>WHY CHOOSE US</h6>
                    <h2>Innovating Solutions <br /> Digital Mindset</h2>
                    {Objects.map((value) => {
                        return (
                            <Accordions {...value} />
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Innovating