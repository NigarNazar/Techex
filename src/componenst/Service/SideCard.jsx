import React from 'react'
import "../Service/SideCard.css"
import DataBase from "../About/DataBase.json"
const SideCard = () => {
  return (
    <div className='sidecard'>
            <div className="sidecard-set row">
                <div className="side-joker col-12">
                    <h6>POPULAR IT SERVICES</h6>
                    <h2>Our Professional Solutions <br />
                     For IT Business</h2>
                </div>
                {
                    DataBase && DataBase.map(value => {
                        return (
                            <>
                                <div className="side-unknow col-lg-3 col-md-6 col-sm-12" key={value.id}>
                                    <img src={value.img} alt="" />
                                    <h5>{value.title}</h5>
                                    <span>{value.body}</span>
                                </div>

                            </>
                        )
                    })
                }


            </div>
    </div>
  )
}

export default SideCard