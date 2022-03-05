import React from 'react';

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
                <img
                  className="testimonial-car"
                  src="../images/testimonal-1.jpg"
                  alt=""
                />
                <img
                  className="testimonial-person"
                  src="../images/testimonal-person-1.jpg"
                  alt=""
                />
                <div className="testimonial-card-item-content flex">
                  <h5>Jacie Sarca</h5>
                  <p className="testimonial-position">Teacher</p>
                  <p className="testimonial-brief">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorum ducimus ratione rem debitis nisi, quos nemo enim
                    ipsa recusandae! Modi!
                  </p>
                  <i className="fas fa-quote-right"></i>
                </div>
              </div>
              <div className="testimonial-card-item">
                <img
                  className="testimonial-car"
                  src="../images/bmw.jpg"
                  alt=""
                />
                <img
                  className="testimonial-person"
                  src="../images/testimonal-person-2.jpg"
                  alt=""
                />
                <div className="testimonial-card-item-content flex">
                  <h5>Mameki Su</h5>
                  <p className="testimonial-position">Business Owner</p>
                  <p className="testimonial-brief">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorum ducimus ratione rem debitis nisi, quos nemo enim
                    ipsa recusandae! Modi!
                  </p>
                  <i className="fas fa-quote-right"></i>
                </div>
              </div>
              <div className="testimonial-card-item">
                <img
                  className="testimonial-car"
                  src="../images/testimonal-3.jpg"
                  alt=""
                />
                <img
                  className="testimonial-person"
                  src="../images/testimonal-person-3.jpg"
                  alt=""
                />
                <div className="testimonial-card-item-content flex">
                  <h5>Matthew Kaliea</h5>
                  <p className="testimonial-position">Engineer</p>
                  <p className="testimonial-brief">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolorum ducimus ratione rem debitis nisi, quos nemo enim
                    ipsa recusandae! Modi!
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
