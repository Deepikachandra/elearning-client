import logo from './logo.svg';
import React from "react";
import { NavLink } from 'react-router-dom';
import { Card } from 'primereact/card';
import './Home.css';

class Home extends React.Component{

  render(){
    return (
      <div> 
      <div style={{background:"CadetBlue",textAlign:"left"}}>Home</div>
      <br/>
       <NavLink to="/Reactjs" >
                   <div>
                   <Card className="card">
                   <img src={logo} className="App-logo" alt="logo" />
                   <p style={{fontSize:"30px",textAlign:"center"}}><b>React js: A complete guide </b></p>   
                  </Card>
                    </div>
        </NavLink>
      </div>
    );
  }
}

export default Home;
