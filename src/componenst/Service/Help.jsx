import React from 'react'
import "../Service/Help.css"
import Monitor from "../Service/Picture/computer.png"
import User from "../Service/Picture/user (1).png"
import Pencil from "../Service/Picture/pencil.png"
import Video from "../Service/Picture/video-marketing.png"
const Help = () => {
  return (
    <div className='help-auditoriya'>
<div className="help-service ">
    <div className="help-set-time ">
<h6>HOW CAN HELP YOU</h6>
<h1>We Provide Best IT Solutions For Business 25 <br />
 Years We Provide Solutions</h1>
<span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium <br />
 totam rem aperiam eaque quae abillo inventore</span>
    </div>
    <div className="help-set-item ">
      <div className="col-set">
      <img src={Monitor} alt="" />
        <h4>Quality Service</h4>
        <span>Sed ut perspe unde omnis <br />
         natus sit voluptatem accusa <br />
          doloremue laudantium</span>
      </div>
      <div className="col-set">
      <img src={User} alt="" />
        <h4>Quality Service</h4>
        <span>Sed ut perspe unde omnis <br />
         natus sit voluptatem accusa <br />
          doloremue laudantium</span>
      </div>
      <div className="col-set">
      <img src={Pencil} alt="" />
        <h4>Exckusive Members</h4>
        <span>Sed ut perspe unde omnis <br />
         natus sit voluptatem accusa <br />
          doloremue laudantium</span>
      </div>
      <div className="col-set">
      <img src={Video} alt="" />
        <h4>Managment</h4>
        <span>Sed ut perspe unde omnis <br />
         natus sit voluptatem accusa <br />
          doloremue laudantium</span>
      </div>
    </div>
</div>
    </div>
  )
}

export default Help