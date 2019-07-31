import React, { Component } from "react";

import ProductCarousel from './ProductCarousel';
import News from './News';
import Home from './Home';
import OurMission from './OurMission';
import Footer from './Footer';
import Articles from './Articles';




class Main extends Component {
  render() {
    return (
      <div className="container">
        <div id="home" className="home-section">
          <Home/>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="ourMision">
         <OurMission/>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
        </div>
        <br />
        <br />
        <div className="clearfix mb-4">
          <h2 id="products" className="mb-4">Recommended Products</h2>
          <ProductCarousel />
          <br/>
        </div>
        <br/>
        <br/>
        <br/>
        <div>
          <h2>Articles</h2>
          <Articles />
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="clearfix">
          <h2 id="news" className="mb-4">News</h2>
          <News/>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 id="reviews">Reviews</h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div >
        </div>
        <br />
        <div>
          <Footer/>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Main;