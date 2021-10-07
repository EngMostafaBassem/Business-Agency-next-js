import React from 'react'
import Card from '../Card/Card'
import './Pricing.css'
const Pricing=()=>{
    return(
        <div className="pricing-wrapper">
            <div className="pricing-content">
                <h2>Pricing</h2>
                <div className="pricing-line"></div>
            </div>
           <div className="pricing-cards">
             <Card
              cardClass="free-plan"
              header="FREE"
              pricing="$0"
              planOptions={
                  [
                      {option:'Pricing Card Items',status:true},
                      {option:'Pricing Card Items',status:true},
                      {option:'Pricing Card Items',status:false},
                      {option:'Pricing Card Items',status:false},
                      {option:'Pricing Card Items',status:false},
                  ]}
             />
                <Card
              cardClass="basic-plan"
              header="BASIC"
              pricing="$299"
              planOptions={
                  [
                      {option:'Pricing Card Items',status:true},
                      {option:'Pricing Card Items',status:true},
                      {option:'Pricing Card Items',status:true},
                      {option:'Pricing Card Items',status:false},
                      {option:'Pricing Card Items',status:false},
                  ]}
             />
                <Card
              cardClass="standard-plan"
              header="STANDARD"
              pricing="$699"
              planOptions={
                  [
                      {option:'Pricing Card Items',status:true},
                      {option:'Pricing Card Items',status:true},
                      {option:'Pricing Card Items',status:true},
                      {option:'Pricing Card Items',status:true},
                      {option:'Pricing Card Items',status:false},
                  ]}
             />
                <Card
              cardClass="premium-plan"
              header="PREMIUM"
              pricing="$999"
              planOptions={
                  [
                      {option:'Pricing Card Items',status:true},
                      {option:'Pricing Card Items',status:true},
                      {option:'Pricing Card Items',status:true},
                      {option:'Pricing Card Items',status:true},
                      {option:'Pricing Card Items',status:true},
                  ]}
             />

      

           </div>
        </div>
    )

}
export default Pricing