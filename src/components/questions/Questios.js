import React from 'react';

const Questios = () => {
    return (
      <div>
        <section className="questions">
          <div className="container">
            <div className="questions-content flex">
              <h4 className="questions-title">
                Have Questions? Feel Free to Ask...
              </h4>
              <div className="questions-contact flex">
                <div className="questions-phone flex">
                  <i className="fas fa-phone"></i>
                  <p>(248) 133-2343</p>
                </div>
                <div className="questions-message">
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
          </div>
        </section>
      </div>
    );
};

export default Questios;
