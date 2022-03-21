import React from "react";
// import { useMediaQuery } from "react-responsive";
import MediaQuery from "react-responsive";

// import "./Home.css";
import NewArrivals from "../components/home/NewArrivals";
import BestDeals from "../components/home/BestDeals";

// Jumbotron import
import Jumbotron from "../components/cards/Jumbotron";





import Stock from "../components/stock/Stock";
import AboutUs from "../components/aboutUs/AboutUs";
import Testimonials from "../components/testimonials/Testimonials";
import LatesNews from "../components/latestNews/LatesNews";
import Questios from "../components/questions/Questios";
import Footer from "../components/footer/Footer";
import Carousels from "../components/carousel/Carousel";
import NewArrivalsNOPagination from "../components/home/NewArrivalsNoPagination";

import { Tabs } from "antd";
import Accodion from "../components/accodion/Accodion";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

const { TabPane } = Tabs;

const Home = () => {
  return (
    <div className="Home">
      <div className="overlay"></div>
      {/* <img src={main} alt="main" className="main" /> */}
      <Carousels />

      <div className="home_jumbotron ">
        <Jumbotron text={["Latest Cars", "New Arrivals!!", "Best Deals"]} />
      </div>

      <Stock />

      <MediaQuery minWidth={600}>
        <div className="card-container">
          <Tabs type="card" centered size="large" className="style">
            <TabPane tab="NEW ARIVALS" key="1">
              <NewArrivals />
            </TabPane>
            <TabPane tab="BEST DEALS" key="2">
              <BestDeals />
              <br />
            </TabPane>
          </Tabs>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={500}>
        <h1 className="text-center mt-4 text-danger bg-light p-2">
          RECOMMENDED
        </h1>
        <NewArrivalsNOPagination />
      </MediaQuery>
      <br />
      <br />
      <AboutUs />
      <br />
      <Accodion />
      <br />

      <br />
      <Testimonials />

      <Questios />

      <LatesNews />

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
