import React from 'react'
import "../Service/Percent.css"
const Percent = () => {
    return (
        <div className='percent row'>
            <div className="percent-set-time col-12">
                <h6>POPULAR IT SERVICES</h6>
                <h2>Our Professional Solutions <br /> For IT Business</h2>
                <span>Sed ut perspiciatis omnis natus error sit voluptatem accusan <br />
                     doloremque laudantium totam rem aperiam</span>
            </div>
            <div className="percent-set-item col-12">
                <div className="percent-product">
                    <div className="product">
                    <h4>Product Engineering</h4>
                    <span>95%</span>
                    </div>
                    <div className="progress-product" style={{width: "100" , backgroundColor:"#ccc" , height: "5px" , borderRadius: "7px"}}></div>
                </div>
                <div className="percent-digital">
                    <div className="product">
                    <h4>Digital Solutions</h4>
                    <span>85%</span>
                    </div>
                    <div className="progress-digital"style={{width: "100" , backgroundColor:"#ccc" , height: "5px" , borderRadius: "7px" }}></div>
                </div>
                <div className="percent-it">
                    <div className="product">
                    <h4>IT Consultancy</h4>
                    <span>90%</span>
                    </div>
                    <div className="progress-it"style={{width: "100" , backgroundColor:"#ccc" , height: "5px" , borderRadius: "7px"}}></div>
                </div>
                <div className="percent-stratagy">
                    <div className="product">
                    <h4>UX/UI Strategy</h4>
                    <span>70%</span>
                    </div>
                    <div className="progress-stratagy"style={{width: "100" , backgroundColor:"#ccc" ,  height: "5px" , borderRadius: "7px"}}></div>
                </div>

            </div>

        </div>
    )
}

export default Percent