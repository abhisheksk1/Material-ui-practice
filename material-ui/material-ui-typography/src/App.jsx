import React from 'react';
import {ThemeProvider, createMuiTheme} from "@material-ui/core";
import purple from "@material-ui/core/colors/purple"
import green from "@material-ui/core/colors/green";
import TypographyDemo from "./TypographyDemo";

const theme=createMuiTheme({
    palette:{
        primary: purple,
        secondary: green
    },
    typography:{
        h1:{
            fontSize: "3em"
        }
    }
})

export default function App(){
    return (
        <ThemeProvider theme={theme}>
            <TypographyDemo/>
        </ThemeProvider>
    )
}
