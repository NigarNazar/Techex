import React from 'react'
import "../About/Card.css"
import DataBase from "./DataBase.json"
const Card = () => {
    return (
        <div className='card-item'>
            <div className="card-set row">
                <div className="cards-joker col-12">
                    <h6>POPULAR IT SERVICES</h6>
                    <h2>Solutions For IT Business</h2>
                </div>
                {
                    DataBase && DataBase.map(value => {
                        return (
                            <>
                                <div className="card-unknow col-lg-3 col-md-6 col-sm-12" key={value.id}>
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

export default Card