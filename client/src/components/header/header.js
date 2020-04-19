import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <header class="masthead" id="page-top">
        <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">Your favourite home-cooked breakfast, delivered to your door</div>
          <div className="intro-heading">ARE YOU READY TO <br /><span className="brand">Nashta Pani</span>?</div>
          <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Show Me More</a>
        </div>
      </div>
      </header>
    );
  }
}


