import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
 
const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-img'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nuturing Tommorow's Leaders Today</h2>
            <p>Embark on a transformative educational journey with our univeristies comprehensive educational 
                programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, 
                and experiences needed to excel in the dynamic field of education.
            </p>
            <p>Embark on a transformative educational journey with our univeristies comprehensive educational 
                programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, 
                and experiences needed to excel in the dynamic field of education.
            </p>
            <p>Embark on a transformative educational journey with our univeristies comprehensive educational 
                programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, 
                and experiences needed to excel in the dynamic field of education.
            </p>
        </div>
    </div>
  )
}

export default About