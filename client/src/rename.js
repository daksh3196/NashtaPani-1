import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Services from './components/services/services';
import Portfolio from './components/portfolio/portfolio';
import Team from  './components/team/team';
import Contact from './components/contactus/contactus';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import * as Cookies from "js-cookie";

import './App.css';


class App extends Component {
  state = {
    response: '',
    email: 'mzaid@g.com',
    password:'sdsfdfdsjg',
    message:'',
  };
  
  
  callApi = async () => {
    const token = Cookies.get("to");
    console.log(token)
    const response = await fetch('/api/signout',{headers:{'auth':token}});
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    else this.setState({
    response: '',
    email: 'mzaid@g.com',
    password:'sdsfdfdsjg',
    message:'Signed Out',
    })
    return body;
  };

  callHello = async () => {
    const token = Cookies.get("to");
    console.log(token)
    const response = await fetch('/api/hello',{headers:{Authorization:'Bearer '+token}});
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    this.setState({
      message:body.message,
      })
    return body;
  };
  
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
    this.setState({
      message:body.message,
      })
    console.log(body.token)
    /*if (!(body.token==undefined)){
      var date = new Date();
      date.setTime(date.getTime() + (120 * 1000));
      Cookies.set("t", body.token, { expires : date });
    }*/
  };
  
render() {
    return (
      <div className="App">
        <Navbar resumeData={{name:this.state.email,}}/>
        <Header resumeData={{name:this.state.email,}}/>
        <Services resumeData={{name:this.state.email,}}/>
        <About resumeData={{name:this.state.email,}}/>
        <Portfolio resumeData={{name:this.state.email,}}/>
        <Team resumeData={{name:this.state.email,}}/>
        <Contact resumeData={{name:this.state.email,}}/>
        <Footer resumeData={{name:this.state.email,}}/>
      
      <div className="Appi">
        
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.email}
            onChange={e => this.setState({ post: e.target.value })}
          /><br/>
          <input
            type="text"
            value={this.state.password}
            onChange={e => this.setState({ post: e.target.value })}
          /><br/>
          <button type="submit">SignIn</button>
        </form>
        <button onClick={this.callApi}>SignOut</button>
        <button onClick={this.callHello}>hello</button>
        <p>{this.state.message}</p>
      </div>
      </div>
    );
  }
}

export default App;