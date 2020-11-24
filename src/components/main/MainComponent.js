import React from 'react';

import Footer from './FooterComponent';
import NavigationBar from './NavigationBar';
import Error from './Error404';

import About from '../AboutComponent';
import Contact from '../ContactComponent';
import Home from '../HomeComponent';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function Main(){
    return(
       <React.Fragment>
           <NavigationBar/>
           <Router>
               <Switch>
                   <Route exact path="/" component={Home}/>
                   <Route path = "/about" component={About}/>
                   <Route path="/contact" component={Contact}/>
                    <Route component = {Error}/>
               </Switch>
           </Router>
           <Footer/>
       </React.Fragment> 
    )
}

export default Main;