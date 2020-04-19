import React, { Component } from 'react';
export default class Contact extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section class="page-section" id="contact">
        <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form id="contactForm" name="sentMessage" noValidate="novalidate">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="form-group">
                    <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                    <p className="help-block text-danger" />
                  </div>
                </div>
                <div className="clearfix" />
                <div className="col-lg-12 text-center">
                  <div id="success" />
                  <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </section>
    );
  }
}