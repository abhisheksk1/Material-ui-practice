import React from 'react';
import './App.css';
import {Button, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"

const useStyles=makeStyles(theme=>({
  root:{
    height: "100vh",
    background: "linear-gradient(45deg, #fff 30%, #FF8E53 90%)"
  },
  button:{
    backgroundColor: "lightBlue",
    [theme.breakpoints.up("sm")]:{
      backgroundColor: "crimson"
    }
  }
}));

function App() {
  const classes=useStyles();
  return (
    <div className={classes.root}>
      <Button className={classes.button} color="primary" variant='contained'>
        This is a Button
      </Button>
      <Button color="secondary" variant='contained'>
        This is a Button
      </Button>
      <Typography variant="h3">
        This is a typography
      </Typography>
    </div>
  );
}

export default App;
