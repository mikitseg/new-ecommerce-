
import React, { Component } from 'react';
import './App.css';
import { Cardlist} from './Components/Card_list/Cardlist';
import './Components/nav/nav.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      miki:[]
    };
  }
  componentDidMount(){
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(users=>this.setState({miki: users}))
    }
  render(){
    return(
      <div className="App">                             
        <div>
        <ul>
          <li className='brand'><a href="#">Miki Shop</a></li>
          <div className='lo'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
          <input type='search' placeholder='SEARCH'></input>
          </div>
        </ul>
        </div>
        <Cardlist miki={this.state.miki}>
         
        </Cardlist>
         
      </div>
    );
  }
} 
export default App;
