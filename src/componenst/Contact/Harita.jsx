import React, { useEffect } from 'react'
import "../Contact/Harita.css"
const Harita = () => {

  return (
    <div className='harita'>
      <iframe width="100%" height="450px" id="gmap_canvas" src="https://maps.google.com/maps?q=Melborune&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"  marginheight="0" marginwidth="0"></iframe>
    </div>
  )
}
export default Harita