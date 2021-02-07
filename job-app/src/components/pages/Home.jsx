import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Badge from '../../Badge';
import CardJob from "../../CardJob";
import Footer from '../../Footer';
import Search from "../../Search";

const useStyles = makeStyles((theme) => ({
    search:{
        marginTop: "2rem",
        marginLeft: "30rem"
    },
    root:{
        marginLeft: "0rem"
    },
    dot: {
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        backgroundColor: "crimson",
        display: "inline-block"
    },
    dot1: {
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        backgroundColor: "orange",
        display: "inline-block"
    },
    row: {
        marginLeft: "6rem",
        marginTop: "1rem",
        fontWeight: "700",
        [theme.breakpoints.down("xs")]:{
            marginLeft: "1rem"
        },
        [theme.breakpoints.down("sm")]:{
            marginLeft: "1.5rem"
        },
    },
    para1:{
        [theme.breakpoints.down("xs")]:{
            fontSize: "25px"
        },
        [theme.breakpoints.down("sm")]:{
            fontSize: "30px"
        }
    }
}))

export default function Home() {
    const classes = useStyles();
    return (
        <Container>
            <Grid direction="row" className={classes.search}>
                <Search />
            </Grid>
            <Badge />
            <br />
            <div className={classes.row}>
                <Typography className={classes.para1} variant="h4">Based on Your Profile and Career Interest</Typography>    
                <Typography className={classes.para2} variant="subtitle1">
                    Any Work <span className={classes.dot}></span>
                    Any Location <span className={classes.dot1}></span>
                    Any Industries
                </Typography>
            </div>   
            <Grid className={classes.root} xs={12} style={{marginTop: "2rem"}} spacing={2} container>
                <Grid item xs={1} md={1} />
                <Grid className={classes.root} xs={10} md={10} container spacing={2}>
                    <Grid style={{marginTop: "1rem"}} xs={10} sm={10} md={4}>
                        <CardJob 
                            job="UX Designer"
                            company="Globex Pvt. Ltd"
                            location="california, USA"
                            day="11 hrs ago"
                        />
                    </Grid>
                    <Grid style={{marginTop: "1rem"}}  xs={10} sm={10} md={4}>
                        <CardJob 
                            job="UX Researcher"
                            company="Umbrla coorporation Pvt. Ltd"
                            location="Los Angles, California, USA"
                            day="5 days ago"
                        />
                    </Grid>
                    <Grid style={{marginTop: "1rem"}}  xs={10} sm={10} md={4}>
                        <CardJob 
                            job="Fraud Analyst"
                            company="Wipro"
                            location="Banglore, karnataka, India"
                            day="7 days ago"
                        />
                    </Grid>
                    <Grid style={{marginTop: "1rem"}}  xs={10} sm={10} md={4}>
                        <CardJob 
                            job="Sr. UX Designer"
                            company="Globex Pvt. Ltd"
                            location="california USA"
                            day="9 days ago"
                        />
                    </Grid>
                    <Grid style={{marginTop: "1rem"}}  xs={10} sm={10} md={4}>
                        <CardJob 
                            job="Advisory analyst"
                            company="Forcepoint"
                            location="Coimboitre, TamilNadu, India"
                            day="1 week ago"
                        />
                    </Grid>
                    <Grid style={{marginTop: "1rem"}} xs={10} sm={10} md={4}>
                        <CardJob 
                            job="Full Stack Dev."
                            company="Congnizant"
                            location="Pune, India"
                            day="1 week ago"
                        />
                    </Grid>
                </Grid>
                <Grid item xs={1} sm={1} md={1} />
            </Grid>
            <Footer />
        </Container>        
    )
};