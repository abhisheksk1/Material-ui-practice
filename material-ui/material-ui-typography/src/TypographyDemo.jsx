import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import logo from "./asserts/logo.png";
import First from "./asserts/First.png";
import Second from "./asserts/Second.png";
import Third from "./asserts/Third.png";
import { Toolbar, AppBar } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import LanguageIcon from '@material-ui/icons/Language';
import {ThemeProvider, createMuiTheme} from "@material-ui/core";
import red from "@material-ui/core/colors/red";
import { purple } from '@material-ui/core/colors';

const Theme=createMuiTheme({
    palette:{
        primary: red,
        secondary: purple
    }
})

const useStyles=makeStyles(theme => ({
    image:{
        height: "150px",
        marginLeft: "1rem"
    },
    FirstImage:{
        height: "500px",
        marginLeft: "-3rem",
        [theme.breakpoints.down("sm")]:{
            width: "250px"
        },
        [theme.breakpoints.down("xs")]:{
            width: "150px",
            height: "700px"
        }
    },
    secondImage:{
        width: "700px",
        height: "300px",
        marginLeft: "4rem",
        [theme.breakpoints.down("sm")]:{
            width: "500px",
            height: "200px"
        },
        [theme.breakpoints.down("xs")]:{
            width: "300px",
            marginLeft: "1.5rem"
        }
    },
    thirdImage:{
        height: "300px",
        width: "870px",
        marginLeft: "-5rem",
        [theme.breakpoints.down("sm")]:{
            width: "600px",
            marginLeft: "0.5rem"
        },
        [theme.breakpoints.down("xs")]:{
            width: "400px",
            marginLeft: "1rem"
        }
    },
    vertical: { 
        borderLeft: "1px solid red", 
        height: "13px",
        position: "absolute",
        color: "red",
        padding: "2px 2px",
        marginTop: "0.1rem"
    },
    appBar:{
        top: 'auto',
        bottom: 0,
        color: "red",
        marginBottom: "1rem",
        marginTop: " 1rem",
        [theme.breakpoints.down("sm")]:{
            marginLeft: "0.5rem",
            width: "98%"
        }
    }, 
    footerTypo:{
        color: "white"
    },
    upperPortion:{
        [theme.breakpoints.down("xs")]:{
            width: "320px",
            marginLeft: "6rem",
            marginTop: "-43rem"
        }
    }
}))

export default function TypographyDemo(){
    const classes=useStyles();
    return(
        <>
            <Grid container xs={12}>
                <Grid xs={0} sm={0} md={3} item />
                <Grid xs={12} sm={12} md={6} align="center" item>
                    <img className={classes.image} src={logo} alt=""/>
                </Grid>
                <Grid xs={0} sm={0} md={3} item />
            </Grid>
            <Grid xs={12} container spacing={4}>
                <Grid xs={0} sm={0} md={1} item />
                <Grid xs={2} sm={2} md={2} item>
                    <img className={classes.FirstImage} src={First} alt=""/>
                </Grid>
                <Grid xs={10} sm={9} md={8} item className={classes.upperPortion} >
                    <Typography style={{fontWeight: "600"}}>
                        C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 201
                        8 for the 4th time.
                    </Typography>
                    <ul>
                        <li>
                            <Typography>
                            C.R.I.'s energy efficient products are well recognized by various Government Institutions,
                            as trustworthy products for various projects across the globe to save energy.    
                            </Typography>    
                        </li> 
                        <li>
                            <Typography>
                            C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace 
                            the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.     
                            </Typography>    
                        </li> 
                    </ul>
                    <img src={Second} className={classes.secondImage} alt=""/>
                    <Typography style={{marginLeft: "2.5rem"}}>
                    Government of India has awarded the "National Energy Conservation Award 2018". 
                    Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award
                     from Smt. Sumitra
                     Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                    </Typography>
                </Grid>
                <Grid xs={0} sm={0} md={1} />
            </Grid>
            <Grid xs={12} container>
                <Typography style={{marginTop: "2rem", marginLeft: "2rem"}}>
                INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
                 IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
                </Typography>
            </Grid>
            <Grid xs={12} md={12} sm={12} container>
                <Grid xs={0} sm={0} md={2} item />
                <Grid xs={12} sm={12} align="center" md={8} item>
                    <img className={classes.thirdImage} src={Third} alt=""/>
                    <Typography align="center">
                    Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors 
                    </Typography>
                </Grid>
                <Grid xs={0} sm={0} md={2} item />
            </Grid>
            <Grid container xs={12} sm={12} md={12}>
                <Grid xs={1} sm={1} md={1} />
                <Grid xs={10} sm={10} md={10}>
                    <hr style={{color: "red"}}/>
                    <Typography align='center' style={{fontWeight: "700"}}>
                    C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
                    </Typography>
                    <Typography align="center">
                    CHEMICALS & PROCESS <span className={classes.vertical}></span> 
                     POWER <span className={classes.vertical}></span> 
                     WATER & WASTE WATER <span className={classes.vertical}></span> 
                    OILS & GAS <span className={classes.vertical}></span> 
                    PHARMA <span className={classes.vertical}></span> 
                    SUGARS & DISTILLERIES <span className={classes.vertical}></span> 
                    PAPER & PULP <span className={classes.vertical}></span> 
                    MARINE & DEFENCE <span className={classes.vertical}></span> 
                    METAL & MINING <span className={classes.vertical}></span> 
                    FOOD & BEVERAGE <span className={classes.vertical}></span>
                    PETROCHEMICAL & REFINERIES <span className={classes.vertical}></span> 
                    SOLAR <span className={classes.vertical}></span> 
                    BUILDING <span className={classes.vertical}></span> 
                    HVAC <span className={classes.vertical}></span> 
                    FIRE <span className={classes.vertical}></span> 
                    FIGHTING <span className={classes.vertical}></span> 
                    AGRICULTURE & RESIDENTIAL
                    </Typography>
                </Grid>
                <Grid xs={1} sm={1} md={1} />
            </Grid>
            <Grid container xs={12} sm={12}  md={12}>
                <Grid xs={0} sm={0} md={1} item/>
                <Grid xs={12} sm={12} md={10} container>
                    <ThemeProvider theme={Theme}>
                    <AppBar color="primary" position="static" className={classes.appBar}>
                        <Toolbar>
                            <Grid xs={12} align="center" container>
                                <Grid xs={4} sm={4} md={4}>
                                    <Typography  className={classes.footerTypo}><PhoneIcon/>
                                        Toll free 1800 200 1234                                  
                                    </Typography>
                                </Grid>
                                <Grid xs={4} sm={4} md={4}>
                                    <Typography  className={classes.footerTypo}><FacebookIcon/>
                                        www.facebook.com/cripumps                                  
                                    </Typography>
                                </Grid>
                                <Grid xs={4} sm={4} md={4}>
                                    <Typography className={classes.footerTypo}><LanguageIcon/>
                                        www.crigroups.com                                 
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                    </ThemeProvider>
                </Grid>
                <Grid xs={0} sm={0} md={1} item/>
            </Grid>
        </>
    )
}