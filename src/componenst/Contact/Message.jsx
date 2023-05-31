import React, { useRef } from 'react'
import "../Contact/Message.css"
import emailjs from '@emailjs/browser'
const Message = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_l9oop7n', 'template_300k7km', form.current, '9Pk5CoIg9B5FDBWKo')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div className='message'>
            <div className="message-all">
                <div className="message-set-time ">
                    <h6>SEND US MESSAGE</h6>
                    <h1>Don’t Hesited To Contact Us <br />
                        Say Hello Or Message</h1>
                </div>
                <div className="message-set-item">
                    <form action="form" className='from-input' ref={form} onSubmit={sendEmail}>
                        <div className="name-email">
                            <div className="name-number">
                                <div className="fullname">
                                    <h6>Full Name</h6>
                                <input type="text"  placeholder='Enter Name' name='fullName'/>
                                </div>
                                <div className="full-number">
                                    <h6>Phone Number</h6>
                                <input type="text" placeholder='Enter Number'  name='Number'/>
                                </div>
                            </div>
                            <div className="email-subject">
                                <div className="full-email">
                                    <h6>Email Address</h6>
                                <input type="text" placeholder='Enter Email Address' name='email'/>
                                </div>
                                <div className="full-subject">
                                    <h6>Subject</h6>
                                <input type="text" placeholder='Enter Subject' name='subject' />
                                </div>
                            </div>
                        </div>
                        <div className="enter-message">
                            <h6>Enter Message</h6>
                            <textarea  id='entMessage' placeholder='Enter message' name='message'></textarea>
                        </div>
                        <div className="butts">
                        <button type='submit'><a href="#">Send Message</a> <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Message