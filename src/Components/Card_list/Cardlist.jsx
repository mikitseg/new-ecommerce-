import React from "react";
import { Card } from "../Card/Card";
import './Cardlist.css';

export const Cardlist = props => (

     <div className='cardlist'> 
         {props.miki.map(miki => (
            <Card key={miki.id} miki={miki}/>
          ))}
     </div>
);
