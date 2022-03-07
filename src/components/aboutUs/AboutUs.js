import React from 'react';
import { IoLogoModelS } from "react-icons/io";
import { FcSupport } from "react-icons/fc";
import { AiOutlineTransaction } from "react-icons/ai";
import { SiKeepassxc } from "react-icons/si";


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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Earum id inventore voluptates debitis eius quo rerum ad.
                  Distinctio esse at ducimus eveniet voluptatem rerum a vitae
                  atque nam expedita sequi eligendi officiis saepe, ut sit quos
                  animi adipisci. Possimus sapiente, molestias quo animi ipsam
                  doloribus? Optio animi expedita dolorem ad.
                </p>
              </div>
              <div className="about-us-info-right">
                <img src="../images/carousel6.jpg" alt="" />
              </div>
            </div>
            <div className="about-us-why-us">
              <div className="about-us-why-us-item about-us-why-us-item-1">
                <IoLogoModelS className="aboutus-icon" />
                {/* <img src="../images/all-brands-car.svg" alt="" /> */}
                <h4>All Brands</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  quae maxime quis eligendi? Porro nostrum eaque, assumenda
                  eligendi illum esse harum eius, dolorum natus velit enim
                  dolorem ut doloribus commodi.
                </p>
              </div>
              <div className="about-us-why-us-item about-us-why-us-item-2">
                <FcSupport className="aboutus-icon" />
                {/* <img src="../images/free-support.svg" alt="" /> */}
                <h4>Free Support</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  quae maxime quis eligendi? Porro nostrum eaque, assumenda
                  eligendi illum esse harum eius, dolorum natus velit enim
                  dolorem ut doloribus commodi.
                </p>
              </div>
              <div className="about-us-why-us-item about-us-why-us-item-2">
                <SiKeepassxc className="aboutus-icon" />
                {/* <img src="../images/dealership.svg" alt="" /> */}
                <h4>Dealership</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  quae maxime quis eligendi? Porro nostrum eaque, assumenda
                  eligendi illum esse harum eius, dolorum natus velit enim
                  dolorem ut doloribus commodi.
                </p>
              </div>
              <div className="about-us-why-us-item about-us-why-us-item-2">
                <AiOutlineTransaction className="aboutus-icon" />
                {/* <img src="../images/credit-card.svg" alt="" /> */}
                <h4>Affordable</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                  quae maxime quis eligendi? Porro nostrum eaque, assumenda
                  eligendi illum esse harum eius, dolorum natus velit enim
                  dolorem ut doloribus commodi.
                </p>
              </div>
            </div>
    
        </section>
      </div>
    );
};

export default AboutUs;
