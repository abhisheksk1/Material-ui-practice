import { Grid, makeStyles, Typography , Icon} from '@material-ui/core';
import React from 'react';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import MoreIcon from '@material-ui/icons/More';
import "./CardComp.css"

const CardComp = () => {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div>
                    <h4 className="interest">Based on your Profile and Career Interest</h4>
                    <p className="filter">
                        Any Work <span className="dot1"></span>
                        Any Loaction <span className="dot"></span>
                        Any Industries
                    </p>
                    </div>
                    <span className="icon">
                        <FormatAlignLeftIcon />
                        <MoreIcon style={{marginLeft: "1rem"}}/>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default CardComp;