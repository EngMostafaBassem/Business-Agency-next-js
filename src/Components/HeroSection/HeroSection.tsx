import React from 'react'
import './HeroSection.css'
const HeroSection=()=>{
    return(
        <div className="hero-sec-wrapper">
          <div className="hero-sec">        
                  <h1 className="headings">
                      <span className="headings-1">Business Ideas</span>
                      <span className="headings-2">Strategy</span>
                      <span className="headings-3">Digital Marketing</span>
                      <span className="headings-4">Consulting</span>
                  </h1>
              <p className="hero-sec-content">LOREM IPSUM DOLOR SIT.</p>
              <button className="hero-sec-btn">Discover Now</button>

          </div>
        </div>
    )

}
export default HeroSection