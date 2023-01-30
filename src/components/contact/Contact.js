import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zpo23cm', 'template_qnar62j', form.current, '3CsMTraLmr2MQUGsc')
    e.target.reset();
  }
  return (
   <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className='contact__option'>
          <MdOutlineMailOutline className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>mrraghav9412@gmail.com</h5>
          <a href="mailto:mrraghav9412@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
        </article>
        <article className='contact__option'> 
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>rajnikantraghav</h5>
          <a href="https://m.me/mrraghav9412" target='_blank' rel="noreferrer">Send a message</a>
        </article>
        <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          <h4>What'sApp</h4>
          <h5>7500296870</h5>
          <a href="https://api.whatsapp.com/send?phone=917500296870" target='_blank'rel="noreferrer">Send a message</a>
        </article>
      </div>
      {/* END OF CONTACT OPTION */}
      <form ref={form} onClick={sendEmail}>
        <input type="text" name='text' placeholder='Enter Full Name' required/>
        <input type="email" name='email' placeholder='email' required />
        <textarea name="message"  rows="7" placeholder='Your message' required></textarea>
        <button type='message' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
   </section>
  )
}

export default Contact;
