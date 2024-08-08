import '../Styles/contact.css'
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
function Contact(){
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [message, setMessage] = useState()
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8080/contact', { name, email, phone, message})
      .then(result => {
        console.log(result)
        navigate('/')
      })
      .catch(err => console.log(err))
  }
    return<div className="contact-form-container">
    <div className="contact-info">
      <div className="contact-item">
        <h3><IoCallOutline size={40} className='icon'/>Call To Us</h3>
        <p>We are available 24/7.</p>
        <p>Phone: +91 9999999999</p>
      </div>
      <hr></hr>
      <div className="contact-item">
        <h3><CiMail size={40} className='icon'/>Write To Us</h3>
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <p>Email: techbazaar2025@gmail.com</p>
      </div>
    </div>
    <form className="contact-form">
      <input
        type="text"
        name="name"
        placeholder="Your Name *"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email *"
        onChange={(e) => setEmail(e.target.value)}
         />
      <input
        type="tel"
        name="phone"
        placeholder="Your Phone *"
        onChange={(e) => setPhone(e.target.value)}
         />
      <textarea
        name="message"
        placeholder="Your Message"
        onChange={(e) => setMessage(e.target.value)}/>
      <button type="submit" onClick={handleSubmit}>Send Message</button>
    </form>
  </div>
    }
export default Contact;