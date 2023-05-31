import React from 'react'
import "../componenst/Button.css"
const Button = ({buttonValue , photo}) => {
  return (
    <div className="button"><a href="">{buttonValue} {photo}</a></div>
  )
}

export default Button