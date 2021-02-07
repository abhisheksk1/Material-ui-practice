import { AppBar,
    Grid, makeStyles, Toolbar, createMuiTheme, ThemeProvider, Container, Typography} from '@material-ui/core'
import { grey, red } from '@material-ui/core/colors';
import React from 'react';
import "./App.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

const Theme=createMuiTheme({
    palette:{
        primary: grey,
        secondary: red
    }
})

const useStyles = makeStyles((theme) => ({
    footer: {
        top: "auto",
        bottom: 0,
        marginTop: "2rem",
        marginBottom: "0.5rem",
        height: "200px"
    },
    footer_container: {
        marginTop: "4rem",
        marginLeft: "8rem",
        [theme.breakpoints.down("xs")]:{
            marginLeft: "3rem"
        },
        [theme.breakpoints.down("sm")]:{
            marginLeft: "5rem"
        },
    },
    icon: {
        width: "50px",
        height: "50px"
    },
    address: {
       marginLeft: "23rem", 
       marginTop: "1.5rem",
       [theme.breakpoints.down("xs")]:{
           marginLeft: "1rem"
       },
       [theme.breakpoints.down("sm")]:{
        marginLeft: "4rem"
       },
    },
    address_title: {
        fontWeight: "600"
    },
    address_body: {
        fontWeight: "400",
        marginLeft: ".5rem"
    }
    
}))

const Footer = () => {
    const classes = useStyles();
    return (
        <Grid xs={12} container>
            <Grid md={12} container>
                <ThemeProvider theme={Theme}>
                    <AppBar color="primary" position="static" className={classes.footer}>
                        <Toolbar>
                            <Container>
                                <Grid className={classes.footer_container} xs={12} container direction="row">
                                    <Grid item md={3} sm={3}>
                                        <span> <TwitterIcon color="secondary" className={classes.icon}/> </span>
                                    </Grid>
                                    <Grid item md={3} sm={3}>
                                        <span> <InstagramIcon color="inherit" className={classes.icon}/> </span>
                                    </Grid>
                                    <Grid item md={3} sm={3}>
                                        <span> <LinkedInIcon color="error" className={classes.icon}/> </span>
                                    </Grid>
                                    <Grid item md={3} sm={3}>
                                        <span> <FacebookIcon color="action" className={classes.icon}/> </span>
                                    </Grid>
                                </Grid>
                                <Grid md={12} container direction="row" className={classes.address}>
                                    <Typography className={classes.address_title} variant="h5" component="address">
                                        Address:-
                                    </Typography>
                                    <Typography className={classes.address_body} variant="subtitle1" component="address">
                                        854756, Main Street, XYZ Town,<br/>
                                        New Delhi
                                    </Typography>
                                </Grid>
                            </Container>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
            </Grid>
        </Grid>
    )
}

export default Footer;
