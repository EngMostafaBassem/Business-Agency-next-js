import React from 'react'
import './Card.css'
interface CardProps{
    cardClass:string;
    header:string;
    pricing:string;
    planOptions:{status:boolean,option:string}[]
    
}
const Card:React.FC<CardProps>=({cardClass,header,pricing,planOptions})=>{
    return(
        <div className="card">
              <div className={`card-inner ${cardClass}`}>
                <div className="front-card">
                  <div className="card-header">
                    <p>{header}</p>
                  </div>
                  <div className="card-body">
                    <p className="card-pricing">{pricing}</p>
                    <ul className="card-options">
                        {
                            planOptions.map((item:any,idx:number)=>
                             <li key={idx}>{item.status?<i className="status-ic fa fa-check"></i>:<i className=" status-ic fa fa-times"></i>} {item.option}</li>)
                        }
                    </ul>
                    <button className="card-btn">CHOOSE PLAN</button>
                  </div>
                </div>
                <div className="back-card">
                    <a href="#">Order Now </a>
                </div>
             </div>
        </div>
    )

}
export default Card