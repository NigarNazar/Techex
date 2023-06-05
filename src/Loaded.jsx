import React from 'react'
import "../src/Loaded.css"
import { PuffLoader} from "react-spinners"
const Loaded = () => {
  return (
    <div className='ringloaded'>
<PuffLoader
color={'#086ad7'}
size={100}
aria-label="Loading Spinner"
data-testid="loader" 
 />
<h1></h1>
    </div>
  )
}

export default Loaded