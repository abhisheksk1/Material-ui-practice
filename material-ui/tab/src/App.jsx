import React from 'react';
import './App.css';
import Home from "./Home";
import {Route, Switch, Redirect} from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={props => <Home {...props}/>} />
    </Switch>
  );
}

export default App;
