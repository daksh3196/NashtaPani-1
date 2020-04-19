import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section class="page-section" id="about">
        <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">What we serve!</h2>
            <h3 className="section-subheading text-center">Check out the breakfast categories available!</h3>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="img/about/indian-1.jpg" alt="" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>Desi</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Poha, Stuffed Paranthas, Idlis, Upma.</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="img/about/eggs-1.jpg" alt="" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>For Egg Lovers</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Boiled Eggs, Omelettes, Half Fries, Deviled Eggs. </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="img/about/sandwich-1.jpg" alt="" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>Sandwiches</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Veg Sandwiches(Paneer, Aloo, Mixed Veg), Egg Sandwich, Non-Veg Sandwiches.</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="img/about/salad-1.jpg" alt="" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>For health freaks.</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Sprouts, Cereals, Salads(Fruits, Caesar, Macaroni).</p>
                  </div>
                </div>
              </li>
              <li className="timeline-panel">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src="img/about/juice-1.jpg" alt="" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>Beverages</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Fresh Juices, Milk Shakes, Coffee(Hot,Cold), Milk(Hot,Cold).</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>And many more...</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </section>
    );
  }
}