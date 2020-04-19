import React, { Component } from 'react';
import * as Cookies from "js-cookie";
export default class Footer extends Component {
  constructor(props) {
    super(props);
    const token = Cookies.get("to")
    const value = (typeof token==="undefined")?false:true;
    this.state = {
      loggedIn:value,
    }
  }
  render() {
    return (
<nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="/#page-top">Nashta Pani</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/#services"> What we do!</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/#about">What we serve!</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/#portfolio">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/#team">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/#contact">Contact</a>
              </li>
              <li className="nav-item">
              {this.state.loggedIn
                ?<a className="nav-link js-scroll-trigger" href="/account">Account</a>
                :<a className="nav-link js-scroll-trigger" href="/login">LogIn</a>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      );
    }
  }