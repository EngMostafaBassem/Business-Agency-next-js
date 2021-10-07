import React from 'react'
import './Contact.css'
const Contact=()=>{
 return(
     <div className='contacts-wrapper'>
          <div className="contact-info">
            <div className="info">
               <i className=" info-ic fa fa-phone"></i>
               <p className="info-title">Phone</p>
               <p className="info-sub1">+123 456 789</p>
               <p className="info-sub2">+123 456 789</p>
            </div>
            <div className="info">
               <i className=" info-ic fa fa-map-marker"></i>
               <p className="info-title">Address</p>
               <p className="info-sub1">Main street #123</p>
               <p className="info-sub2">Wall street #123</p>
            </div>
            <div className="info">
               <i className=" info-ic fa fa-envelope"></i>
               <p className="info-title">Email</p>
               <p className="info-sub1">support@gmail.com</p>
               <p className="info-sub2">sales@gmail.com</p>
            </div>
        </div>
        <div className="contact-sec">
        <div className='contacts-content'>
            <h2>Contact</h2>
             <div className="contact-line"></div>
        </div>
        <div className="form-container">
          <p className="form-heading">GET IN TOUCH</p>
          <form className="form">
              <input className="input-control" type="text" placeholder="Your Name" />
              <input className="input-control" type="email" placeholder="Your Email"/>
              <textarea className="input-control" placeholder="Your Message" /> 
              <button className="btn-submit" type="submit">SEND MESSAGE</button>
          </form>
        </div>
        </div>
      
       
     </div>
 )
}
export default Contact