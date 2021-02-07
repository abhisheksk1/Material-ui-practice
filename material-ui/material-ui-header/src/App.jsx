import React from 'react'
import './App.css';
import ButtonAppBar from './ButtonAppBar';
import {Route, Switch, BrowserRouter as Router} from "react-router-dom"
import {makeStyles} from "@material-ui/core/styles";
import Home from "./Home";
import Contact from "./Contact"
import About from "./About"
import Header from './Header';
import Navbar from "./Navbar";                      

const useStyles=makeStyles({})

function App() {
  const classes=useStyles();
  return (
    <Router>
    <Switch>
      <Route exact path="/" render={props => <Navbar {...props}/>} />
    </Switch>
    </Router>
  );
}

export default App;
