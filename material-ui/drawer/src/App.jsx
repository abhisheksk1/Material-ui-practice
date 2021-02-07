
import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Drawer from "./Drawer";
import Home from "./Home"
import About from './About';
import Contact from "./Contact"
import {makeStyles} from "@material-ui/core/styles"

const useStyles=makeStyles({
  container:{
    display: "flex"
  }
})

function App() {
  const classes=useStyles();
  return (
    <div className={classes.container}>
      <Drawer />
      <Router>
      <Switch>
        <Route exact from="/" render={props => <Home{...props}/>}/>
        <Route exact path="/contact" render={props => <Contact{...props}/>}/>
        <Route exact path="/about" render={props => <About{...props}/>}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
