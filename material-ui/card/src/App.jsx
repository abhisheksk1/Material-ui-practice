import React from 'react';
import './App.css';
import SimpleCard from './Card';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const useStyles=makeStyles({
  gridContainer:{
    paddingRight: "40px",
    paddingLeft: "40px"
  }
})

function App() {
  const classes=useStyles();
  return (
    <Grid 
      container 
      justify="center" 
      direction="row" 
      className={classes.gridContainer}
    >
      <Grid item xs={2} />
      <Grid container spacing={4} xs={8}>
        <Grid item xs={12} sm={6} md={4}>
          <SimpleCard/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SimpleCard/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SimpleCard/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SimpleCard/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SimpleCard/>
        </Grid>
        
      </Grid>
      <Grid item xs={2} />

    </Grid>
  );
}

export default App;
