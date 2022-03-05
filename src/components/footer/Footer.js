import React from "react";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer-contents">
            <div className="footer-contents-item contact">
              <h4 className="footer-title">Contact Us</h4>
              <p className="contact-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                distinctio voluptatum mollitia. Delectus, possimus optio cumque
                nisi debitis quidem hic!
              </p>
              <div className="footer-contact footer-phone flex">
                <div className="footer-icon phone-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="footer-contact-number">
                  <p>Phone Number</p>
                  <p className="contact-detail">+8170-1782-1131</p>
                </div>
              </div>
              <div className="footer-contact footer-email flex">
                <div className="footer-icon envelope-icon">
                  <i className="far fa-envelope"></i>
                </div>
                <div className="footer-contact-email">
                  <p>Email Address</p>
                  <p className="contact-detail">jcrossmd14@gamil.com</p>
                </div>
              </div>
              <div className="footer-contact footer-address flex">
                <div className="footer-icon map-icon">
                  <i className="fas fa-map-marker"></i>
                </div>
                <div className="footer-contact-address">
                  <p>Address Japan</p>
                  <p className="contact-detail">
                    Chiba-Ken Nodashi Kimagase 2720-1
                  </p>
                </div>
                
    
              </div>
            </div>
            <div className="seperator">
              <div className="seperator1">
                <div className="footer-contents-item info">
                  <h4 className="footer-title ourInfo">Our Info</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <Link to="/shop">Shop</Link>{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-contents-item link">
                  <h4 className="footer-title">Quick Link</h4>
                  <ul>
                    <li>
                      <a>Top Picks</a>
                    </li>
                    <li>
                      <a>Featured</a>
                    </li>
                    <li>
                      <a>Recommended</a>
                    </li>
                    <li>
                      <a>Best Deals</a>
                    </li>
                  </ul>
                </div>

                <div className="footer-contents-item subscribe">
                  <h4 className="footer-title">Social Media </h4>
                  <div className="footer-social-media-icons">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer-contents-item credit">
                <div className="credit-card-info flex">
                  <div className="footer-credit-info">
                    <p>
                      We will help you find the perfect car that fits your
                      budget!
                    </p>
                  </div>

                  <div className="credit-card-pics">
                    {/* <img src="../images/footer-amex.jpeg" alt="" /> */}
                    <img src="../images/footer-visa.jpeg" alt="" />
                    <img src="../images/footer-mastercard.jpeg" alt="" />
                    <img src="../images/footer-discover.jpeg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-copyright">
            <p>
              <span>J Cross Ltd.</span> &copy; 2021. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
