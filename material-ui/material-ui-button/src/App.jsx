import React from 'react';
import './App.css';
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme=>({
  root:{
    border: "1px solid"
  }
}))

function App() {
  const classes=useStyles();
  return (
    <div className="App">
      <Button 
        className={classes.root}
        variant="outlined" 
        color="primary">
          Primary
      </Button>
    </div>
  );
}

export default App;
