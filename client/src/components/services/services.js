import React, { Component } from 'react';
export default class Services extends Component {
  render() {
    return (
      <section class="page-section" id="services">
        <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="section-heading text-uppercase">What we do!</h1>
            <h2 className="section-subheading text-muted">Why <span className="brand">Nashta Pani </span> with us?</h2>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-3">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary" />
              <i className="fas fa-home fa-stack-1x fa-inverse" />
            </span>
            <h4 className="service-heading">Home Cooked</h4>
            <p className="text-muted">Cooked from the heart exactly like your "Ghar ka khana"!</p>
          </div>
          <div className="col-md-3">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary" />
              <i className="fas fa-motorcycle fa-stack-1x fa-inverse" />
            </span>
            <h4 className="service-heading">Doorstep Delivery</h4>
            <p className="text-muted">Delivered by trusted colleagues who love your food as much as you do!</p>
          </div>
          <div className="col-md-3">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary" /> 
              <i className="fas fa-money fa-stack-3x fa-inverse" />
            </span>
            <h4 className="service-heading">Budget Friendly</h4>
            <p className="text-muted">Kyunki budget mein rehna hai!</p>
          </div>
          <div className="col-md-3">
            <span className="fa-stack fa-4x">
              <i className="fas fa-circle fa-stack-2x text-primary" />
              <i className="fas fa-thumbs-up fa-stack-1x fa-inverse" />
            </span>
            <h4 className="service-heading">Hygienic</h4>
            <p className="text-muted">Cooked in a clean environment with the best of ingredients!</p>
          </div>
        </div>
      </div>
      </section>
    );
  }
}