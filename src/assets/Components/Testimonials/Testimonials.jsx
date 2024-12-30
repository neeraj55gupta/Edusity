import React, {useRef} from 'react'
import "./Testimonials.css"

import next_icon from "../../../assets/next-icon.png"
import back_icon from "../../../assets/back-icon.png"
import user_1 from "../../../assets/user-1.png"
import user_2 from "../../../assets/user-2.png"
import user_3 from "../../../assets/user-3.png"
import user_4 from "../../../assets/user-4.png"
// import Title from '../Title/Title'
export default function Testimonials() {

    const slider = useRef();
    let tx = 0; 

    const slideForward = () =>{
if(tx >- 50){
    tx -= 25;
}
slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
<img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
<img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
<div className='slider'>
<ul ref={slider}>
    <li>
        <div className='slide'>
            <div className='user-info'>
                <img src={user_1} alt='' />
                <div>
                    <h3>Will Jack</h3>
                    <span>Edusity, US</span>
                </div>
            </div>
            <p>Edusity offers range of resources including tutoring services, study guides and discussion forums, to help students overcome challenges and explore what they want. The technical support team was always available to address any technical issues or concerns that may arise.</p>
        </div>
    </li>
    <li>
        <div className='slide'>
            <div className='user-info'>
                <img src={user_2} alt='' />
                <div>
                    <h3>charle wack</h3>
                    <span>Edusity, US</span>
                </div>
            </div>
            <p>I was searching for language based courses on Google and came across Edusity. I found the best courses at an afordable price. The course I bought was very interactive, and at the end of the course, the examination section was the best part which helped me to solve my doubts.</p>
        </div>
    </li>
    <li>
        <div className='slide'>
            <div className='user-info'>
                <img src={user_3} alt='' />
                <div>
                    <h3>Harry jam</h3>
                    <span>Edusity, UK</span>
                </div>
            </div>
            <p>Edusity offers range of resources including tutoring services, study guides and discussion forums, to help students overcome challenges and explore what they want. The technical support team was always available to address any technical issues or concerns that may arise.</p>
        </div>
    </li>
    <li>
        <div className='slide'>
            <div className='user-info'>
                <img src={user_4} alt='' />
                <div>
                    <h3>Adem</h3>
                    <span>Edusity, USA</span>
                </div>
            </div>
            <p>I was searching for language based courses on Google and came across Edusity. I found the best courses at an afordable price. The course I bought was very interactive, and at the end of the course, the examination section was the best part which helped me to solve my doubts.</p>
        </div>
        
    </li>
</ul>
</div>
    </div>
  )
}
