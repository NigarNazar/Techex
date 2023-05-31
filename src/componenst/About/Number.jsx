import React from 'react'
import "../About/Number.css"
import { useSpring,animated } from 'react-spring'

const Number = () => {
    function Number({ n }) {
        const {number}  = useSpring({
          from :{number: 0},
          number:n,
          delay:1000,
          config:{mass:1,tension:20, friction:10},
        })
        return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div> 
      }
  return (
    <div className='count row '>
<div className="count-set-item col-lg-12 col-md-12 col-sm-12">
    <div className="count-1">
<a href="#"><i class="fa-regular fa-gem"></i></a>
<h1>
    <Number n={368} />
</h1>
<span>Project Completed</span>
    </div>
    <div className="count-2">
<a href="#"><i class="fa-solid fa-compass-drafting"></i></a>
<h1>
<Number n={785} />
</h1>
<span>Expert Consultants</span>
    </div>
    <div className="count-3">
<a href="#"><i class="fa-regular fa-star"></i></a>
<h1>
<Number n={896} />
</h1>
<span>5 Stars Rating</span>
    </div>
    <div className="count-4">
<a href="#"><i class="fa-solid fa-trophy"></i></a>
<h1>
<Number n={125} />
</h1>
<span>Awards Winning</span>
    </div>
</div>
    </div>
  )
}

export default Number