import React, {useState} from 'react';
import {Button, Paper, Typography, Grid, Switch} from "@material-ui/core";
import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles";


const Dark=()=>{
    const [darkMode, setDarkMode]=useState(true);
    const theme=createMuiTheme({
        palette:{
            type: darkMode ? "dark" : "light",
        }
    });
    return(
        <ThemeProvider theme={theme}>
            <Paper style={{height: "100vh"}}>
                <Grid container direction="column">
                    <Typography variant="h1">This is my application</Typography>
                    <Button variant="contained" color="primary">
                        This is a Button
                    </Button>
                    <Button variant="contained" color="secondary">
                        This is a another Button
                    </Button>
                    <Switch checked={darkMode} onChange={()=>setDarkMode(!darkMode)} />
                </Grid>
            </Paper>
        </ThemeProvider>
    )
    
}


export default Dark;