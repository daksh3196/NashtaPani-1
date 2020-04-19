import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <section class="bg-light page-section" id="portfolio">
        <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Khaane mei kya hai?</h2>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6 portfolio-item">
            <div className="portfolio-link">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <p>A mildly spiced sautéed dish, fried till they are crispy and then tossed in curry leaves and South Indian spices.</p>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/idli-1.jpg" alt="" />
            </div>
            <div className="portfolio-caption">
              <h4>Fried Idli</h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 portfolio-item">
            <div className="portfolio-link" data-toggle="modal">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <p>A delectable traditional South Indian breakfast dish, made by continuously stirring roasted Sooji with veggies, green chillies and curry leaves.</p>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/upma-1.jpg" alt="" />
            </div>
            <div className="portfolio-caption">
              <h4>Upma</h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 portfolio-item">
            <div className="portfolio-link" data-toggle="modal">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <p>A flatbread stuffed with cottage cheese/onion/gobhi, served with makkhan and aachar.</p>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/parantha-1.jpg" alt="" />
            </div>
            <div className="portfolio-caption">
              <h4>Stuffed Parantha</h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 portfolio-item">
            <a className="portfolio-link">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <p>Beaten eggs cooked without stirring until set and served folded in half.</p>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/omelette-1.jpg" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Omelette</h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 portfolio-item">
            <a className="portfolio-link">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <p>Slices of paneer, cheese, egg, chicken salami, or other food placed between two slices of bread.</p>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/sandwich-1.jpg" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Sandwiches</h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 portfolio-item">
            <a className="portfolio-link">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <p>Processed flattened rice cooked with roasted with chilies, onions, mustard and cumin seeds and curry leaves and served with chutney and namkeen. </p>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/poha-1.jpg" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Poha</h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 portfolio-item">
            <a className="portfolio-link">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <p> An egg cooked in the shell in boiling water. </p>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/eggs-1.jpg" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Boiled Eggs</h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 portfolio-item">
            <a className="portfolio-link">
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <p>  Soft food made by boiling meal of grains or legumes in milk or water until thick.</p>
                </div>
              </div>
              <img className="img-fluid" src="img/portfolio/porridge-1.jpg" alt="" />
            </a>
            <div className="portfolio-caption">
              <h4>Porridge</h4>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  }
}