import React, { Component } from 'react';
import Header from '../header/header';
import About from '../about/about';
import Services from '../services/services';
import Portfolio from '../portfolio/portfolio';
import Team from  '../team/team';
import Contact from '../contactus/contactus';
import Footer from '../footer/footer';
import Navbar from '../navbar/navbar';

export default class Homepage extends Component {
    state = {
        response: '',
        email: 'mzaid@g.com',
        password:'sdsfdfdsjg',
        message:'',
      };
      
  render() {
    let loggedIn = this.props.loggedIn;
    console.log(loggedIn)
    return (
        //console.log('fdg')
        <div className="App">
        <Navbar />
        <Header resumeData={{name:this.state.email,}}/>
        <Services resumeData={{name:this.state.email,}}/>
        <About resumeData={{name:this.state.email,}}/>
        <Portfolio resumeData={{name:this.state.email,}}/>
        <Footer resumeData={{name:this.state.email,}}/>
        </div>
        );
    }
  }