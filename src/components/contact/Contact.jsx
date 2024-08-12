import React from 'react';
import './contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";
const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ba272aed-7d47-4313-9cf7-5afe92b14054");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully !");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
       <div className='contact-col'>
        <h3>Send us a message <TiMessages className='img' size='1.8rem'/></h3>
        <p>Feel free to reach out through contact form or find
         our contact information below. Your feedback, questions, 
         and suggestions are important to us as we strive to provide
          exceptional service to our university community.</p>
          <ul>
            <li><MdOutlineMailOutline className='icon' size='1.4rem' color='black'/>contact@howka.dev</li>
            <li><LuPhone className='icon' size='1.4rem' color='black'/>+1234567890</li>
            <li><IoLocationOutline className='icon' size='1.4rem' color='black'/>43 Massachusetts Ave, Cambridge <br/> MA 02139, United States</li>
          </ul>
       </div>
       <div className='contact-col'>
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name="name" placeholder="Your name:" required/>
            <label>Phone number</label>
            <input type="tel" name="phone" placeholder="Your phone number:" required/>
            <label>Write your message here</label>
            <textarea name='message' rows='6' placeholder='Your message:' required></textarea>
            <button className='btn dark-btn' type='submit'>Submit now <FaArrowRight className='img'/></button>
        </form>
        <span>{result}</span>
       </div>
    </div>
  )
}

export default Contact
