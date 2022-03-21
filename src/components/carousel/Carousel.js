import React from "react";
import { Carousel } from "react-bootstrap";
import car5 from '../../images/car5.raw'
import car9 from "../../images/carousel8.raw";
import SearchHome from "../forms/SearchHome";


const Carousels = () => {
  return (
    <div>
      <Carousel fade>
    
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 main position"
            src={car9}
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="main-search">
              <div className="main-search-contents">
                <h1>Find the Car You Want, Your Way!!</h1>
                <h3>Then, build your deal to fit your needs.</h3>
              </div>
              <div className="main-search-form flex">
                <SearchHome />
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item> 
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100 main"
            src={car5}
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="main-search">
              <div className="main-search-contents">
                <h1>Find The Car that's Right for You!!</h1>
                <h3>Authentic Cars. Best Quality .</h3>
              </div>
              <div className="main-search-form flex">
                <SearchHome />
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;
