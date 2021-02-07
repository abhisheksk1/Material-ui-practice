import React from 'react'
import {
    Drawer as MUIDrawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MailIcon from '@material-ui/icons/Mail';
import MoveToInboxRoundedIcon from '@material-ui/icons/MoveToInboxRounded';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import { withRouter } from 'react-router-dom';

const useStyles=makeStyles({
    drawer:{
        width: "260px"
    }
})


const Drawer = props => {
    const {history} = props
    const classes=useStyles();
    const itemLists=[
        {
            text: 'Home',
            icon: <MoveToInboxRoundedIcon />,
            onClick: () => history.push('/')
        },
        {
            text: 'About',
            icon: <StarOutlineIcon/>,
            onClick: () => history.push('/about')
        },{
            text: 'Contact',
            icon: <MailIcon/>,
            onClick: () => history.push('/contact')
        }
    ]
    return(
        <MUIDrawer variant="permanent" className={classes.drawer}>
            <List>
                {itemLists.map((item, index)=>{
                    const {text, icon, onClick}=item;
                    return(
                        <ListItem button key={text} onClick={onClick}>
                            {icon && <ListItemIcon>{icon}</ListItemIcon>}
                            <ListItemText primary={text}/>
                        </ListItem>
                    );
                })}
            </List>
        </MUIDrawer>
    )
}

export default Drawer;