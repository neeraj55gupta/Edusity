import React from 'react'
import "./App.css";
import Navbar from './assets/Components/Navbar/Navbar';
import Home from './assets/Components/Home/Home';
import Programs from './assets/Components/Programs/Programs';
import Title from './assets/Components/Title/Title';
import About from './assets/Components/About/About';
import Campus from './assets/Components/Campus/Campus';
import Testimonials from './assets/Components/Testimonials/Testimonials';
import Contact from './assets/Components/Contact/Contact';
import Footer from './assets/Components/Footer/Footer';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <div className='container'>
      <Title subTitle='Our PROGRAM' title='What We Offer'/>
      <Programs/>
      <About/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' title='What Student Says'/>
      <Testimonials/>
      <Title subTitle='Contact' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
      
    



    </div>
  )
}
