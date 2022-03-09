import React from 'react';
import news1 from "../../images/news-1.raw";
import news3 from "../../images/news-3.raw";
import news2 from "../../images/news2.raw";

const LatesNews = () => {
    return (
      <div>
        <section className="news-articles">
          <div className="container">
            <h2 className="text-center theme-h2 testimonial-title bg-light p-2">
              Latest News
            </h2>
            <div className="news-articles-cards">
              <div className="news-articles-card-item ">
                <div className="img-container">
                  <img src={news1} alt="" />
                </div>
                <div className="news-articles-content">
                  <h5 className="news-article-tag">Maintenance</h5>
                  <h4 className="news-article-title">
                    Neglecting Regular Maintenance
                  </h4>
                </div>
                <div className="news-articles-author-details flex">
                  <div className="news-articles-author flex">
                    <i className="fas fa-user-alt"></i>
                    <p>Johnny Ugale</p>
                  </div>
                  <div className="news-articles-created flex">
                    <i className="fas fa-calendar-week"></i>
                    <p>Dec 10, 2021</p>
                  </div>
                  <div className="news-articles-read-more">
                    <a href="#">
                      <i className="fas fa-chevron-right"></i>{" "}
                      <i className="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="news-articles-card-item news-articles-card-item-1">
                <div className="img-container">
                  <img src={news2} alt="" />
                </div>
                <div className="news-articles-content">
                  <h5 className="news-article-tag">Tires</h5>
                  <h4 className="news-article-title">
                    When To Replace Those Tires
                  </h4>
                </div>
                <div className="news-articles-author-details flex">
                  <div className="news-articles-author flex">
                    <i className="fas fa-user-alt"></i>
                    <p>Logan Rarka</p>
                  </div>
                  <div className="news-articles-created flex">
                    <i className="fas fa-calendar-week"></i>
                    <p>Nov 29, 2021</p>
                  </div>
                  <div className="news-articles-read-more">
                    <a href="#">
                      <i className="fas fa-chevron-right"></i>{" "}
                      <i className="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="news-articles-card-item news-articles-card-item-2">
                <div className="img-container">
                  <img src={news3} alt="" />
                </div>
                <div className="news-articles-content">
                  <h5 className="news-article-tag">Adventure</h5>
                  <h4 className="news-article-title">
                    10 of the Best Off-Roading Areas{" "}
                  </h4>
                </div>
                <div className="news-articles-author-details flex">
                  <div className="news-articles-author flex">
                    <i className="fas fa-user-alt"></i>
                    <p>Johnny Ugale</p>
                  </div>
                  <div className="news-articles-created flex">
                    <i className="fas fa-calendar-week"></i>
                    <p>Oct 15, 2021</p>
                  </div>
                  <div className="news-articles-read-more">
                    <a href="#">
                      <i className="fas fa-chevron-right"></i>{" "}
                      <i className="fas fa-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default LatesNews;
