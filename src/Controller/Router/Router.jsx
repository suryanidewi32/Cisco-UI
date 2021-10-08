import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from '../../View/Page/Home/Home'

const Routing = (props) =>{
    return(
        <Switch>
            <Route path="/" component={Home}/>
        </Switch>
            )
        }
            
function Routes() {
    return (
        <Router>
            <Routing />
        </Router>
        );
 }
 export default Routes;
