import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Homepage from './components/homepage/homepage';
import LogIn from './components/login/login';
import SignUp from './components/signup/signup';
import Account from './components/account/account';


class App extends Component {
  
    render() {
      return (      
         <BrowserRouter>
         
              <Switch>
               <Route path="/" component={Homepage} exact/>
               <Route path="/login" component={LogIn}/>
               <Route path="/signup" component={SignUp}/>
               <Route path="/account" component={Account}/>
             </Switch>
        </BrowserRouter>
      );
    }
  }
   
  export default App;