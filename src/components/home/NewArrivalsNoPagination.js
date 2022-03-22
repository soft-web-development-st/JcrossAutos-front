import React, { useEffect, useState } from "react";
import { getProducts } from "../../helpers/product";
import ProductCard from "../cards/ProductCard";
import LoadingCard from "../cards/LoadingCard";
import { Carousel } from "react-bootstrap";


const NewArrivalsNOPagination = () => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    loadAllProducts();
  }, []);


  const loadAllProducts = () => {
    setLoading(true);
    getProducts("createdAt", "desc", 3).then((res) => {
      setProduct(res.data);
      setLoading(false);
    });
  };
  return (
    <>
      <div className="container fluid">
        <div className="row">
          <div className="col">
            {loading ? (
              <div>
                <LoadingCard count={3} />
              </div>
            ) : (
                <Carousel>
                  <Carousel.Item>
                {products.map((product) => (
                  <ProductCard product={product} key={product._id} />
                  ))}
                  </Carousel.Item>
              </Carousel>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivalsNOPagination;
