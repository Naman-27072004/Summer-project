import '../Styles/contact.css'
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
function Contact(){
    return<div className="contact-form-container">
    <div className="contact-info">
      <div className="contact-item">
        <h3><IoCallOutline size={40} className='icon'/>Call To Us</h3>
        <p>We are available 24/7, 7 days a week.</p>
        <p>Phone: +91 9999999999</p>
      </div>
      <hr></hr>
      <div className="contact-item">
        <h3><CiMail size={40} className='icon'/>Write To Us</h3>
        <p>Fill out our form and we will contact you within 24 hours.</p>
        <p>Emails: techbazaar2025@gmail.com</p>
      </div>
    </div>
    <form className="contact-form">
      <input
        type="text"
        name="name"
        placeholder="Your Name *"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email *"
         />
      <input
        type="tel"
        name="phone"
        placeholder="Your Phone *"
         />
      <textarea
        name="message"
        placeholder="Your Message">

        </textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
    }
export default Contact;