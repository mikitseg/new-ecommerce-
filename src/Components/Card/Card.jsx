import React from "react";
import './card.css';
 export const Card = props => (
   <div className="card">
    <img alt="img" src={props.miki.image}></img>
    <p>{props.miki.title}</p> 
    <p>${props.miki.price}</p>
    <button className="button"> BUY</button>
   </div>
 );