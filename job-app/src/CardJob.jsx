import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Avatar } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    boxShadow: "1px 1px 1px 1px",
    marginBottom: "1rem",
    padding: theme.spacing(2)
  },
  daysAgo: {
    marginLeft: "10px"
  },
  avatar: {
    width: "60px",
    height: "60px"
  }
}))

const SimpleCard = (props) => {

  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));        
}, []);

  const classes = useStyles();
  const handleClick = () => {
      alert("You have Successfully Applied")
  }
  return (
    <Card className={classes.root} spacing={2}>
      <CardContent>
        <Avatar 
            src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
            className={classes.avatar} 
            style={{marginBottom: "1rem"}} 
        />
        <Typography style={{marginBottom: "1rem"}}  variant="h4" component="h2">
          {props.job}
        </Typography>
        <Typography style={{marginBottom: "1rem"}}  variant="h6" component="p">
          {props.company}
        </Typography>
        <Typography style={{marginBottom: "1rem"}} variant="subtitle1">
            <LocationOnIcon />{props.location}
        </Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" onClick={handleClick} 
        variant="contained" size="medium">Apply Now</Button>
        <Typography className={classes.daysAgo}>{props.day}</Typography>
      </CardActions>
    </Card>
  );
}

export default SimpleCard;