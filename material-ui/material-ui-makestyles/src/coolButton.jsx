import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import classNames from "classnames";

const useStyles = makeStyles(theme => ({
    buttonStyles: props=>{
        return {
            color: props.cool ? "blue" : "red",
            [theme.breakpoints.up("sm")]:{
                color: "green"
            },
            backgroundColor: props.cool ? "orange" : "yellow",
            [theme.breakpoints.down("sm")]:{
                backgroundColor: "crimson"
            }
        }
    },
    buttonSize: {
        fontSize: "4rem"
    }
    //buttonStyles: {
    //    color: "red",
    //    [theme.breakpoints.up("sm")]:{
    //        color: "green"
    //    }
    //}
}));

export default function Hook(props){
    const classes=useStyles();
    return <Button fullWidth 
        className={classNames(classes.buttonStyles, classes.buttonSize)}>BUTTON
        </Button>
};

