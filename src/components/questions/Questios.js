import React from 'react';
import {AiOutlineQuestionCircle} from 'react-icons/ai'

const Questios = () => {
    return (
      <div>
        <section className="questions">
          <div className="container">
            <div className="questions-content flex">
              <h4 className="questions-title">
                Have Questions? Feel Free to Ask{" "}
                <AiOutlineQuestionCircle className="question_icon" />
              </h4>
              <div className="questions-contact">
                <div className="questions-phone ">
                  <span>
                    <p>
                      {" "}
                      <i className="fas fa-phone"></i> +8170-1782-1131
                    </p>
                  </span>
                </div>
                <p>
                  Email Address:{" "}
                  <span className="questin_email">jcrossmd14@gamil.com</span>
                </p>

                <div className="questions-message">
                  Connet with us... { ' '}
                  <a href="https://www.facebook.com/jcross.jp">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
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
