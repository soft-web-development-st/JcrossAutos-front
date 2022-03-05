import React, { useEffect, useState } from "react";
import { getProducts, getProductsCount } from "../../helpers/product";
import ProductCard from "../cards/ProductCard";
import LoadingCard from "../cards/LoadingCard";
import { Pagination } from "antd";
 
const NewArrivals = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [productsCount, setProductsCount] = useState(0);

  useEffect(() => {
    loadAllProducts();
  }, [page]);
 
  useEffect(() => {
    getProductsCount()
      .then((res) => {
        setProductsCount(res.data);
      })
  }, []);

  const loadAllProducts = () => {
    setLoading(true);
    getProducts("createdAt", "desc", page).then((res) => {
      setProduct(res.data);
      setLoading(false);
    });
  };
  return (
    <>
      <div className="">
        <div className="new_arrivals">
          {loading ? (
            <div>
              <LoadingCard count={3} />
            </div>
          ) : (
            <div className="new_arrivals_product">
              {products.map((product) => (
                <ProductCard product={product} key={product._id} />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="pagination">
        <Pagination
          size="large"
    
        current={page}
        total={(productsCount / 3) * 9}
        onChange={(value) => setPage(value)}
        />
        </div>
    </>
  );
};

export default NewArrivals;
