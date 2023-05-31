import React, { useState } from 'react'

const Accardion = ({questions,answer}) =>{
    const [text, setText] = useState(false)
    const display = () =>{
setText(!text)
    }
return(
    <>
     <div className="accordionHeading">
<div className="container">
    <h6>"{questions}"</h6>
    <div className="plus">
    <p onClick={display}>{text?<i class="fa-solid fa-minus"></i> :<i class="fa-solid fa-plus"></i>}</p>
        </div>
</div>
</div>
 <div className='accordionPanel'>
<div className="panel">
{text &&  <span>{answer}</span> }
</div>
 </div>
    </>
)
}

export default Accardion