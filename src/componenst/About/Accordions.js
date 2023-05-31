import React, { useState } from 'react'

const Accordions = ({title,panel}) => {
    const[panell,setPanel] = useState(false)
    const diss = () =>{
        setPanel(!panell)
    }
  return (
   <>
    <div className="innovating-item">
    <div className="innovating-container">
                        <a href="#">{title}</a>
                        <span onClick = {diss}>{panell? <i class="fa-solid fa-minus"></i>:<i class="fa-solid fa-plus"></i>}</span>
                    </div> 
                    <div className="innovating-panel">
                       {panell &&  <span>{panel}</span>}
                    </div>
    </div>
   </>
  )
}

export default Accordions