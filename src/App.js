import React, { Component } from "react";
import './App.css';
import { HashRouter as Router, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import Home from './Home'
import Reactjs from './courses/Reactjs'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class App extends React.Component{

  render(){
    return (
      <div className="App">
      <Router >
      <Switch>
         <Route path="/Home" component={Home} />
         <Route path="/Reactjs" component={Reactjs} />
           <Redirect to="/Home" />
       </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
