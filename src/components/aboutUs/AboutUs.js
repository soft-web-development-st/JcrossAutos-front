import React from "react";
import { IoLogoModelS } from "react-icons/io";
import { FcSupport } from "react-icons/fc";
import { AiOutlineTransaction } from "react-icons/ai";
import { SiKeepassxc } from "react-icons/si";
import about from "../../images/about.raw";

const AboutUs = () => {
  return (
    <div>
      <section className="about-us">
        <div className="about-us-info">
          <div className="about-us-info-left">
            <h2 className=" about_title bg-light p-2">About Us</h2>
            <p className="theme-p about-us-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              fugiat!
            </p>
            <p className="theme-p">
              JCrossAuto deals in Import&Export,Automobiles,Agency
              Services in japan.
              Delivery and Disposal.Anything transport ,point A to Z, be it
              moving or sending stuff.please kindly reach out to us,we can help
              you to pickup and drop to any location, move things up within
              japan.
            </p>
          </div>
          <div className="about-us-info-right">
            <img src={about} alt="" />
          </div>
        </div>
        <div className="about-us-why-us">
          <div className="about-us-why-us-item about-us-why-us-item-1">
            <IoLogoModelS className="aboutus-icon" />
            {/* <img src="../images/all-brands-car.svg" alt="" /> */}
            <h4>All Brands</h4>
            <p>
              JcrossAutos deals with lots of car brand and is specialized mostly
              in the sales of Toyota Audi lexuz and many more. We make life easy
              for all of our customers by providing them with what the need
            </p>
          </div>
          <div className="about-us-why-us-item about-us-why-us-item-2">
            <FcSupport className="aboutus-icon" />
            {/* <img src="../images/free-support.svg" alt="" /> */}
            <h4>Free Support</h4>
            <p>
              At JcrossAutos we provided free support for cars that have been
              bought from our company. Our servicing is free at time of purchase
              and we give depending on the car you buy more than 2yrs of
              warranty and more..
            </p>
          </div>

          <div className="about-us-why-us-item about-us-why-us-item-2">
            <AiOutlineTransaction className="aboutus-icon" />
            {/* <img src="../images/credit-card.svg" alt="" /> */}
            <h4>Affordable</h4>
            <p>
              JcrossAutos we make our cars Affordable for the market and the
              public. We support online payments for those who want to do online
              transaction and also we support cash on delivery. At JcrossAutos
              we make the give out discounts for our products to make it easy
              for our customers to feel confortable ..
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
