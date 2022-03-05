import React, { useEffect, useState } from "react";
import { getProduct, productStar } from "../helpers/product";
import SingleProduct from "../components/cards/SingleProduct";
import "./Home.css";
import { useSelector } from "react-redux";
import ProductCard from '../components/cards/ProductCard'
// import { getRelated } from "../helpers/product";

const Product = ({ match }) => {
  const [product, setProduct] = useState({});
  const [star, setStar] = useState(0);
  const [related, setRelated] = useState([])

  const { user } = useSelector((state) => ({ ...state }));
  const { slug } = match.params;

  useEffect(() => {
    loadSingleProduct(); 
  }, [slug]);

  useEffect(() => {
    if (product.ratings && user) {
       let existingRatingObject = product.ratings.find(
         (ele) => ele.postedBy.toString() === user._id.toString()
       );
      existingRatingObject && setStar(existingRatingObject.star);
    }
  }, [])
  const loadSingleProduct = () => {
    getProduct(slug).then((res) => {
      setProduct(res.data);
      //load realted
      // getRelated(res.data._id).then(res => setRelated(res.data))
    });
  };

  const onStarClick = (newRating, name) => {
    setStar(newRating);
      productStar(name, newRating, user.token).then((res) => {
        console.log("rating click", res.data);
        loadSingleProduct();
      });
  };
    
  return (
    <div className="product_container pt-5">

      <div className="product_row pt-5">
        <SingleProduct
          star={star}
          onStarClick={onStarClick}
          product={product}
        />
      </div>
<hr />
      {/* <div className="product_related">
        <hr />
        <div>
          {related.length ? related.map((r) => <div  key={r._id}><ProductCard product={r}/></div>): <div>No Related Product Found</div>}
        </div>
      </div> */}
    </div>
  );
};

export default Product;
