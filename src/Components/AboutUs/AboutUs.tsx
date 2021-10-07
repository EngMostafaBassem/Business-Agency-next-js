import React from 'react'
import ReactPlayer from 'react-player'
import './AboutUs.css'
const AboutUs=()=>{
    return(
        <div className="about-us-wrapper">
          <div className="title-sec">
              <h1>About Us</h1>
              <div className="about-line"></div>
          </div>
           <div className="video-sec">
            <div className="video-wrapper">
             <video width="100%" height="100%" controls  src='./about.mp4'>           
             </video>   
            </div>
            <div className="video-line"></div>
             <p className="video-content">
               <i className="icon-left fa fa-quote-left"></i>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatibus ipsum expedita perspiciatis unde repellat eligendi quisquam optio neque sint consequuntur, dolore delectus nisi eveniet nostrum explicabo. Quiarepellat, ut. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
               <i className="icon-right fa fa-quote-right"></i>
             </p>
            <div className="video-line"></div>
          </div>
        </div>
    )

}
export default AboutUs