import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import * as Cookies from "js-cookie";

export default class Account extends Component {
    state={
        message:''
    }

    componentDidMount() {
        this.callHello()
          .then(res => this.setState({ response: res.express }))
          .catch(err => console.log(err));
      }

    callApi = async () => {
        const token = Cookies.get("to");
        console.log(token)
        const response = await fetch('/api/signout',{headers:{'auth':token}});
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        else this.setState({
        message:'Signed Out',
        })
        this.props.history.push('/login')
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
      render() {
        return (
          <div className="Account">
          <Navbar/>
          <div id="space"><br/><br/><br/><br/><br/></div>
          <p>
            {this.state.message}</p>
            <button onClick={this.callApi}>Sign Out</button>
            </div>
    );
  }
}