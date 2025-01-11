import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e32838c8-311f-4b87-a8a2-20ea549f700a");

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
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out to us. Your feedback is important.</p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@bjankovic16.dev</li>
                <li><img src={phone_icon} alt="" />+381 123 43</li>
                <li><img src={location_icon} alt="" />Bulevar kralja Aleksandra 328</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label htmlFor="">Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label htmlFor="">Phone number</label>
                <input type="tel" name='phone' placeholder='Enter your phone number' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact