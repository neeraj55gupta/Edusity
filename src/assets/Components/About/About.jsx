import React from 'react'
import "./About.css"
import about_img from "../../../assets/about.png"
import play_icon from "../../../assets/play-icon.png"

export default function About() {
  
  return (
    <div className='about'>
<div className='about-left'>
<img src={about_img} alt="" className='about_img'/>
<img src={play_icon} alt="" className='play_icon'/>
</div>
<div className='about-right'>
    <h3>ABOUT UNIVERSITY</h3>
    <h2>Nurturing Tomorrow's Leaders Today</h2>
    <p>Unlock the future of education and workforce development to expand access to training, reach students wherever they are with our integrated learning platform.</p>
    <p> Edusity: Empower your employees and boost company performance in the modern world.</p>
<p>Revolutionize workforce training and compliance with Edusity: Empower your employees and boost company performance in the modern world.</p>

</div>

    </div>
  )
}
