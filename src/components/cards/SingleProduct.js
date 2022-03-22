import React, { useState } from "react";
import { Card, Tabs } from "antd";
import { Link } from "react-router-dom";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./SingleProduct.css";
import car from "../../images/car6.raw";
import ProductListItem from "./ProductListItem";
import StarRating from "react-star-ratings";
import RatingModal from "../modal/RatingModal";
import RatingAverage from "../../helpers/rating";

//carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// tooltip
import _ from "lodash";
import { Tooltip } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addToWishList } from "../../helpers/user";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import ContactSeller from "../forms/ContactSeller";


const { Meta } = Card;
const { TabPane } = Tabs;

const SingleProduct = ({ product, onStarClick, star }) => {
  const { title, description, images, _id } = product;
  const [tooltip, setTooltip] = useState("Click to Add");

  // redux
  const { user, cart } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  let history = useHistory()


    const handleAddToCart = () => {
      //showTooltip

      // create cart array
      let cart = [];
      if (typeof window !== "undefined") {
        // if cart is in localstorage GET it
        if (localStorage.getItem("cart")) {
          cart = JSON.parse(localStorage.getItem("cart"));
        }
        // push new product  to cart
        cart.push({
          ...product,
          count: 1,
        });
        // remove duplicates
        let unique = _.uniqWith(cart, _.isEqual);
        // save to localStorage
        localStorage.setItem("cart", JSON.stringify(unique));
        setTooltip("Added");

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
    }; 

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    addToWishList(product._id, user.token).then(res => {
      console.log('added to wishlist,',res.data);
      toast.success('Added to wishlist')
      history.push('/user/wishlist')
    })
    } 

  return (
    <>
      <div className="sp_container">
        <div className="sp_image">
          {images && images.length ? (
            <Carousel showArrows={true} autoPlay>
              {images &&
                images.map((i) => (
                  <img src={i.url} alt={i.title} key={i.public_id} />
                ))}
            </Carousel>
          ) : (
            <Card cover={<img src={car} />}></Card>
          )}
          <Tabs type="card">
            <TabPane tab="Description" key="1">
              {description && <div className="sp_desc">{description}</div>}
            </TabPane>
            <TabPane tab="More Info" key="2">
              Call us on <b>+8170-1782-1131</b> to learn more about this Car{" "}
              <br />
              Email us at <b>jcrossmd14@gamil.com</b> for inquiry
            </TabPane>
          </Tabs>
        </div>

        <div className="sp_prouct_in">
          <h1 className="sp_title">{title}</h1>
          {product && product.ratings && product.ratings.length > 0 ? (
            RatingAverage(product)
          ) : (
            <div className="no_rating">No rating yet</div>
          )}
          <Card
            actions={[
              <>
                <Tooltip title={tooltip}>
                  <a onClick={handleAddToCart} className="sp_cart">
                    <ShoppingCartOutlined />
                    <br />
                    Buy Now
                  </a>
                </Tooltip>
              </>,

              <div>
                <a onClick={handleAddToWishlist}>
                  <HeartOutlined />
                  <br />
                  Add to Favourites
                </a>
              </div>,
              <div className="rating">
                <RatingModal>
                  <StarRating
                    name={_id}
                    numberOfStars={5}
                    rating={star}
                    changeRating={onStarClick}
                    isSelectable={true}
                    starRatedColor="red"
                  />
                </RatingModal>
              </div>,
            ]}
          >
            <h5 className="sp_info">{title} Info!</h5>
            <ProductListItem product={product} />
          </Card>
        </div>
      </div>
        <ContactSeller />
    </>
  );
};

export default SingleProduct;
