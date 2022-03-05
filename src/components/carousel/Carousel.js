import React from "react";
import Search from '../../components/forms/Search'
import { Carousel } from "react-bootstrap";
import main from '../../images/main.jpg'

const Carousels = () => {
  return (
    <div>
      <Carousel fade>
        {/* <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 main"
            src="./images/carousel9.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="main-search fill">
              <div className="main-search-contents">
                <h1>Find your Perfect Car Today!</h1>
                <h3>Quality Cars. Best Prices.</h3>
              </div>
              <div className="main-search-form">
                <Search />
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item> */}
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 main position"
            src="./images/carousel8.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="main-search">
              <div className="main-search-contents">
                <h1>Find the Car You Want, Your Way!!</h1>
                <h3>Then, build your deal to fit your needs.</h3>
              </div>
              <div className="main-search-form flex">
                <Search />
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 main"
            src="./images/car5.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="main-search">
              <div className="main-search-contents">
                <h1>Find The Car that's Right for You!!</h1>
                <h3>Authentic Cars. Best Quality .</h3>
              </div>
              <div className="main-search-form flex">
                <Search />
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;
