import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';

import Home from './components/pages/Home';

function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/notification' exact component={Products} />
                <Route path='/contact-us' exact component={ContactUs} />
                <Route path='/sign-up' exact component={SignUp} />
              

            </Switch>
        </Router>
        
    );
}

export default App;