import React, { useEffect, useState } from "react";

import { getCategories } from "../../helpers/category";
import CategoryList from "../category/CategoryList";
import SubList from "../sub/SubList";
import { Link } from "react-router-dom";

const Stock = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () => {
    getCategories().then((res) => setCategories(res.data));
  };

  const showCategories = () => {};
  return ( 
    <div>
      <section className="search-stock">
        <div className="container">
          <h2 className="text-center theme-h2 search_heading">
            Find Your Perfect Car
          </h2>
          <h5 className="text-center theme-h5 search_heading">
            Our New, Used & Demo vehicles for sale. Based on Make and model
          </h5>

          <div className="search-stock-content">
            <div className="search-stock-item-checkbox">
              <div className="search-stock-checkbox">
                <div className="search-stock-checkbox-item">
                  <label className="checkbox" htmlFor="myCheckboxId">
                    <input
                      className="checkbox-input"
                      type="checkbox"
                      name="myCheckboxName"
                      id="myCheckboxId"
                    />
                    <div className="checkbox-box"></div>
                    New
                  </label>
                </div>
                <div className="search-stock-checkbox-item">
                  <label className="checkbox1" htmlFor="myCheckboxId1">
                    <input
                      className="checkbox-input1"
                      type="checkbox"
                      name="myCheckboxName"
                      id="myCheckboxId1"
                    />
                    <div className="checkbox-box1"></div>
                    Used
                  </label>
                </div>
                <div className="search-stock-checkbox-item">
                  <label className="checkbox2" htmlFor="myCheckboxId2">
                    <input
                      className="checkbox-input2"
                      type="checkbox"
                      name="myCheckboxName"
                      id="myCheckboxId2"
                    />
                    <div className="checkbox-box2"></div>
                    Demo
                  </label>
                </div>
              </div>
            </div>
            <div className="search-stock-form-item search-stock-form-item-1">
              <h1 className="make">Search By Maker</h1>
              <div className="category_list">
                <CategoryList />
              </div>
            </div>
            <p className="text-center theme-p search-p">
              Do hard work in silence and let your new car make some noise. shop
              now with Jcross Motors and enjoy your new car for a life time
            </p>
            <button className="search-stock-btn">
              <Link className="search-stock-link" to="/shop">
                {" "}
                Shop Now
              </Link>{" "}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stock;
