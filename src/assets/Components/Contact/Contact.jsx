import React from 'react'
import "./Contact.css"
import msg_icon from "../../../assets/msg-icon.png"
import mail_icon from "../../../assets/mail-icon.png"
import phone_icon from "../../../assets/phone-icon.png"
import location_icon from "../../../assets/location-icon.png"
import white_arrow from "../../../assets/white-arrow.png"
export default function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "07a4766a-07d8-45cc-ba94-ccfec610e24d");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    
  


  return (
    <div className='contact ' >
    <div className='contact-col'>
        <h3>Send us a message<img src={msg_icon} /></h3>
        <p>Feel free to reach out through contact form or find out contact information below.your feedback,questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li> <img src={mail_icon} />contact@gmail.com</li>
            <li><img src={phone_icon} />+1 123-456-7890</li>
            <li><img src={location_icon} />9,Mahanta Ave, Cambola<br/>NA,United Kindom</li>
        </ul>
    </div>
    <div className='contact-col'>
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder='Enter your Mobile Number ' required />
            <label>Write your Message here</label>
            <textarea name="Message" rows="7" placeholder='Enter your Message' required></textarea>
            <button type='Submit' className='btn dark-btn'>Submit now<img src={white_arrow} /></button>
        </form>
        <span>{result}</span>
    </div>
    </div>
  )
}
