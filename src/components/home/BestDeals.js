import React, { useEffect, useState } from "react";
import { getProducts, getProductsCount } from "../../helpers/product";
import ProductCard from "../cards/ProductCard";
import LoadingCard from "../cards/LoadingCard";
import { Pagination } from "antd";
const BestDeals = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [productsCount, setProductsCount] = useState(0);


  useEffect(() => {
    loadAllProducts();
  }, [page]);

   useEffect(() => {
     getProductsCount().then((res) => {
       setProductsCount(res.data);
     });
   }, []);

 
  const loadAllProducts = () => {
    setLoading(true);
    getProducts("sold", "desc", page).then((res) => {
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
          current={page}
          total={(productsCount / 3) * 9}
          onChange={(value) => setPage(value)}
        />
      </div>
    </>
  );
};

export default BestDeals;
