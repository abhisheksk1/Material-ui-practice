import React from 'react';
import {Tabs, Tab, AppBar} from "@material-ui/core";
import About from './About';
import Contact from './Contact';

const Home = () => {
    const [selectedTab, setSelectedTab]=React.useState(0);
    const handleChange=(event, newValue)=>{
        setSelectedTab(newValue);
    }
    return (
        <>
            <AppBar position="static">
                <Tabs value={selectedTab} onChange={handleChange}>
                    <Tab label="About"/>
                    <Tab label="Contact Us"/>
                </Tabs>
            </AppBar>
            {selectedTab===0 && <About />}
            {selectedTab===1 && <Contact />}
        </>
    )
}

export default Home
