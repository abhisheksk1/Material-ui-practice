import { Button, Container, Grid, Typography } from '@material-ui/core'
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import StarsIcon from '@material-ui/icons/Stars';


const useStyles=makeStyles((theme) => ({
    badgeBackground:{
        marginTop: "6rem",
        marginLeft: "5rem",
        [theme.breakpoints.down("sm")]:{
            marginLeft: "0rem"
        }
    },
    badgeArea:{
        backgroundColor: "cornsilk",
        height: "100px"
    },
    star: {
        marginTop: "30px",
        marginLeft: "40px",
    },
    starInfo:{
        fontSize: "20px",
        marginLeft: "80px",
        marginTop: "-25px",
        fontWeight: "600"
    },
    free:{
        display: "flex",
        flex: "1",
        marginLeft: "650px",
        marginTop: "-20px",
        fontWeight: "600",
        [theme.breakpoints.down("md")]:{
            marginLeft: "70px",
            marginTop: "5px"
        },
        [theme.breakpoints.down("sm")]:{
            marginLeft: "70px",
            marginTop: "5px"
        }
    }
}))


const Badge = () => {
    const classes=useStyles();
    return (
        <div>
           <Grid className={classes.badgeBackground} alignItems="center" container xs={12}>
               <Container alignItems="center">
                   <Grid item xs={0} md={1}/>
                    <Grid  className={classes.badgeArea} item xs={12} md={10}>
                        <Typography alignItems="center">
                            <StarsIcon className={classes.star}/>
                            <Typography className={classes.starInfo}>
                                See Jobs where you'd be a top applicant
                            </Typography>
                            <Button className={classes.free}>
                                Try for Free
                            </Button>
                        </Typography>
                    </Grid>
                   <Grid item xs={0} md={1}/>
               </Container>
           </Grid>
        </div>
    );
};

export default Badge;