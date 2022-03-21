import React from 'react';
import car5 from '../../images/car5.raw'
import ford from '../../images/ford.raw'
import jeep from "../../images/testimonal-3.raw";
import person3 from "../../images/restimonal-person-3.raw";
import person2 from "../../images/testimonal-person-2.raw";
import testimonal_person_4 from '../../images/testimonal-person-4.raw'

const Testimonials = () => {
    return (
      <div>
        <section className="testimonials">
          <div className="container">
            <h2 className="text-center theme-h2 testimonial-title bg-light p-2">
              Testimonials
            </h2>
            <div className="testimonial-cards">
              <div className="testimonial-card-item testimonial-card-item-1">
                <img className="testimonial-car" src={car5} alt="" />
                <img
                  className="testimonial-person"
                  src={testimonal_person_4}
                  alt="" 
                />
                <div className="testimonial-card-item-content flex">
                  <h5>Jacie Sarca</h5>
                  <p className="testimonial-position">Teacher</p>
                  <p className="testimonial-brief">
                    Very easy to deal with no hard sell like most car salesman.
                    Transaction completed and car collection done quick no
                    waiting a week to collect your car. 5 star review on
                    JcrossAutos February 2022
                  </p>
                  <i className="fas fa-quote-right"></i>
                </div>
              </div>
              <div className="testimonial-card-item">
                <img className="testimonial-car" src={ford} alt="" />
                <img className="testimonial-person" src={person2} alt="" />
                <div className="testimonial-card-item-content flex">
                  <h5>Mameki Su</h5>
                  <p className="testimonial-position">Business Owner</p>
                  <p className="testimonial-brief">
                    JcrossAutos was very helpful, not pushy in anyway. I would
                    certainly use and recommend his services again. Everything
                    was at our convenience nothing seemed too much trouble.
                    Autotrader 5 star review January 2022
                  </p>
                  <i className="fas fa-quote-right"></i>
                </div>
              </div>
              <div className="testimonial-card-item">
                <img className="testimonial-car" src={jeep} alt="" />
                <img className="testimonial-person" src={person3} alt="" />
                <div className="testimonial-card-item-content flex">
                  <h5>Matthew Kaliea</h5>
                  <p className="testimonial-position">Engineer</p>
                  <p className="testimonial-brief">
                    The service from Jcross Autos hasn't changed from
                    the first car I bought from him a few years ago to the most
                    recent one two weeks ago great place to buy from very
                    professional and friendly. 5 star review Autotrader/Feefoo
                    November 2021
                  </p>
                  <i className="fas fa-quote-right"></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Testimonials;
