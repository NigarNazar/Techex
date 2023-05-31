import React from 'react'
import NavbarHeader from '../componenst/Contact/NavbarHeader'
import SectionContact from '../componenst/Contact/SectionContact'
import CardAll from '../componenst/Contact/CardAll'
import Harita from '../componenst/Contact/Harita'
import Message from "../componenst/Contact/Message"
import Ready from '../componenst/Service/Ready'
import Footter from '../componenst/About/Footter'
const Contact = () => {
  return (
    <div>
<NavbarHeader />
<SectionContact />
<CardAll />
<Harita />
<Message />
<Ready />
<Footter />
    </div>
  )
}

export default Contact