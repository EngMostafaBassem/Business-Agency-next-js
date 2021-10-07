import React from 'react'
import AboutUs from '../Components/AboutUs/AboutUs'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import HeroSection from '../Components/HeroSection/HeroSection'
import Pricing from '../Components/Pricing/Pricing'
const MainPage=()=>{
    
    return(
        <div>
            <Header/>
            <HeroSection/>
            <AboutUs/>    
            <Pricing/> 
            <Contact/> 
            <Footer/> 
        </div>
    )
}
export default MainPage