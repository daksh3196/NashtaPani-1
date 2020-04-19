import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import * as Cookies from "js-cookie";

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: '',
      email: '',
      password:'',
      message:'',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
//sdsfdfdsjg

handleInputChange(event) {
  const target = event.target;
  const value = target.value;
  const name = target.name;

  this.setState({
    [name]: value
  });
}

  handleSubmit = async e => {
    const token = Cookies.get("to")
    console.log(token)
    e.preventDefault();
    const response = await fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth': token,
      },
      body: JSON.stringify({ email: this.state.email, password:this.state.password }),
    });
    const body = await response.json();
    if (response.status !== 200) {
      this.setState({
        message:response.status,
        })
    }
    else {
    this.setState({
      message:body.message,
      })
    this.props.history.push('/account')}
  };
     
  goSign = async () => {
    this.props.history.push('/signup')
  }
  render() {
    return (
      
        <div className="LogIn">
        <Navbar/>
        <div id="space"><br/><br/><br/><br/><br/></div>
        <div className="row">
        <div className="col-lg-12">
            <form id="contactForm" name="sentMessage" noValidate="novalidate" onSubmit={this.handleSubmit}>
              LOGIN
              <div className="row">
                <div className="col-md-6">
                  
                  <div className="form-group">
                    <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required"  data-validation-required-message="Please enter your email address."
                    name="email" onChange={this.handleInputChange} />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="phone" type="tel" placeholder="Your Password *" required="required" name="password"
                    onChange={this.handleInputChange} data-validation-required-message="Please enter your password." />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                
                <div className="clearfix" />
                <div className="col-lg-12 text-center">
                  <div id="success" />
                  <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Login</button>
                </div>
              </div>
            </form>
            <button onClick = {this.goSign}>Sign Up</button>
            <p>{this.state.message}</p>
          </div>
        </div>
        </div>
        );
    }
  }