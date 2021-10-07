import React from 'react'
import './Footer.css'
const Footer=()=>{
    return(
        <div className="footer-wrapper">
           <ul className="footer-links">
               <li><a href="#">Home</a></li>
               <li><a href="#">About Us</a></li>
               <li><a href="#">Pricing</a></li>
               <li><a href="#">Contact</a></li>
           </ul>
           <p className="copyright">Copyright © 2021 All Rights Reserved</p>

        </div>
    )

}
export default Footer