import React, { useState, useEffect } from "react";
import { getCategory } from "../../helpers/category";
import ProductCard from "../../components/cards/ProductCard";
import { LoadingOutlined, } from "@ant-design/icons"
import {FaStore} from 'react-icons/fa'
import './Category.css'
import { Link } from "react-router-dom";
const CategoryHome = ({ match }) => {
  const [category, setCategory] = useState({});
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const { slug } = match.params;

  useEffect(() => {
    setLoading(true);
    getCategory(slug).then((res) => {
      console.log(res.data);
      setCategory(res.data.category);
      setProduct(res.data.product);
      setLoading(false);
    });
  }, []);

  return (
    <div className="category_container">
      <div className="category_row">
        <div className="category_col">
          {loading ? (
            <LoadingOutlined />
          ) : (
            <>
              <h2 className="category_title">
                {product.length} Products in "{category.name}" Category
              </h2>
              {product.length === 0 ? (
                <>
                  <h1 className="category_titleh1">
                    More Products will soon be availble!!{" "}
                  </h1>

                  <h1 className="text-center text-success ">
                    {" "}
                    Continue Shopping{" "}
                    <Link className="text-danger btn btn-link btn-lg " to="/shop">
                     <FaStore/> STORE
                    </Link>
                  </h1>
                </>
              ) : (
                ""
              )}
            </>
          )}
        </div>
      </div>
      <div className="category_row_p">
        {product.map((p) => (
          <div className="category-col" key={p._id}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryHome;
