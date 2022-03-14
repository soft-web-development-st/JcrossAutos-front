import React from "react";
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const ProductListItem = ({ product }) => {
  const {
    price,
    subs,
    shipping,
    quantity,
    sold,
      brand,
    color,
    description,
      category,

  } = product;
  return (
    <div>
      <ul className="pli_group">
        <li className="pli">
          Price <span className="pli_price_span">${price}</span>
        </li>

        <li className="pli">
          Shipping <span className="">{shipping}</span>
        </li>
        <li className="pli">
          Color <span className="">{color}</span>
        </li>
        <li className="pli">
          Brand <span className="">{brand}</span>
        </li>
        <li className="pli">
          Available Qty <span className="">{quantity}</span>
        </li>
        <li className="pli">
          Sold <span className="">{sold}</span>
              </li >
              <li className="pli">

           <span className="pli_category" to={`category/${category}`}> Category </span>
           <span><span className="pli_category"  to={`subs/${subs}`}>Sub Category</span></span>
              </li>
      </ul>
    </div>
  );
};

export default ProductListItem;
