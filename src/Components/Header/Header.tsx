import React, { useState } from 'react'
import './Header.css'
const Header=()=>{
    const [toggle,setToggle]=useState<boolean>(false)
    return(
      <div  className= {toggle?"header-wrapper full-height":"header-wrapper "}>
       <div className='header'>
           <div className="header-text">
             <span className="text-char">C</span>ode<span className="text-char">A</span>nd<span className="text-char">C</span>reate
           </div>
           <div className="header-menu" onClick={()=>setToggle((toggle)=>!toggle)}>
             <div className="line first-line"></div>
             <div className="line second-line"></div>
             <div className="line third-line"></div>
           </div>          
       </div>
       <nav className= {toggle?"menu-list-wrapper menu-list-show":"hidden"}>
           <ul className="menu-list">
           <li>  <a href="#">Home</a></li>
           <li>  <a href="#">About</a></li>
           <li>  <a href="#">Pricing</a></li>
           <li>  <a href="#">Blog</a></li>
           <li>  <a href="#">Contact</a></li>
           </ul>

           </nav>
       </div>
    )

}
export default Header