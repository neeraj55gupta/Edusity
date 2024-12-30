import React from 'react'
import "./Home.css"
import arrow from "../../../assets/dark-arrow.png"
export default function Home() {
  return (
    <div className='home container'>
    <div className='home-text'>
    <h1>We Ensure better Education for a better world</h1>
    <p>Our cutting edge curriculam is designed to enpower students with knowledge,Skills and experiences needed to excel in the dynaic field of education</p>
    <button className='btn'>Explore more <img src={arrow} alt="" />
    </button>


    </div>

    </div>
    
  )
}