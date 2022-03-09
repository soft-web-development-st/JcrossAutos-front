import React, { useState } from 'react'
import './ProductCard.css'
import car from "../../images/car6.raw";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { MdOutlineDangerous } from "react-icons/md";
import { Link } from 'react-router-dom';
import RatingAverage from '../../helpers/rating';
import _ from 'lodash'
import { Tooltip,Card } from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import MediaQuery from "react-responsive";

import "antd/dist/antd.css"; 
import Meta from 'antd/lib/card/Meta';

const ProductCard = ({ product }) => {
  const { title, description, images, price, slug } = product;

  // redux
  const {user, cart} = useSelector((state) => ({...state}))
  const dispatch = useDispatch()

  const [tooltip, setTooltip] = useState('Click to Add')
  const [tooltipview, setTooltipView] = useState('Click to View')
  const [outofstock, setOutOfStock] = useState('Out of Stock')
  
  const handleAddToCart = () => {
    //showTooltip
 
    // create cart array
    let cart = []
    if (typeof window !== 'undefined') {
      // if cart is in localstorage GET it
      if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));

      }
      // push new product  to cart
      cart.push({
        ...product,
        count:1,
      })
      // remove duplicates
        let unique = _.uniqWith(cart,_.isEqual)
      // save to localStorage
      localStorage.setItem('cart', JSON.stringify(unique))
      setTooltip('Added');

      // add to redux state
      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });
      // show cart item in side drawer
       dispatch({
         type: "SET_VISIBLE",
         payload: true,
       });
    }  
  }  
    return (
      <>
        <div className="home_card">
          <div className="home_card_info">
            {product && product.ratings && product.ratings.length > 0 ? (
              RatingAverage(product)
            ) : (
              <div className="no_rating">No rating yet</div>
            )}
            <img
              className="home_card_img"
              src={images && images.length ? images[0].url : car}
              alt={title}
            />
            <div className="control_price_desc">
              <div className="control_price_title">
                <h3 className="home_card_title">{`${
                  title && title.substring(0, 19)
                }`}</h3>
                <h4 className="home_card_price">${price}</h4>
              </div>
              <h4 className="home_card_description">{`${
                description && description.substring(0, 50)
              }.....`}</h4>
               <MediaQuery minWidth={1600}>
                <h4 className="home_card_description">{`${
                  description && description.substring(0, 75)
                }.....`}</h4>
              </MediaQuery>
            </div>
            <div className="card_actions">
              <div className="card_underline"></div>
              <Tooltip title={tooltipview}>
                <Link to={`/product/${slug}`}>
                  <button className="card_view ">
                    <EyeOutlined />
                    <br />
                    View Car
                  </button>
                </Link>
              </Tooltip>
              <Tooltip title={tooltip}>
                <a
                  onClick={handleAddToCart}
                  className=""
                  disabled={product.quantity < 1}
                >
                  {product.quantity < 1 ? (
                    <Tooltip title={outofstock}>
                      <button className="out_of_stock">
                        <MdOutlineDangerous /> <br /> Out of Stock
                      </button>
                    </Tooltip>
                  ) : (
                    <button className="add_to_cart">
                      <ShoppingCartOutlined /> <br />
                      Buy Now
                    </button>
                  )}
                </a>
              </Tooltip>
            </div>
          </div>
        </div>
      </>
    );
}

export default ProductCard
