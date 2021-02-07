import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Tab, Tabs } from '@material-ui/core';
import Home from './Home';
import Contact from "./Contact"
import About from './About';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [selectedTab, setSelectedTab]=React.useState(0);
    const handleChange=(event, newValue)=>{
        setSelectedTab(newValue);
    }

  return (
    <div className={classes.root}>
      
      <AppBar position="static">
        <Toolbar>
          <Tabs value={selectedTab} onClick={handleChange}>
              <Tab label="Home"/>
              <Tab label="About"/>
              <Tab label="Contact"/>
          </Tabs>
        </Toolbar>
      </AppBar>
        {selectedTab===0 && <Home/>}
        {selectedTab===1 && <About/>}
        {selectedTab===2 && <Contact/>}
    </div>
  );
}