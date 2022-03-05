import React, { useEffect, useState } from "react";
import AdminNav from "../../../components/adminNav/AdminNav";
// import { getProductsByCount } from "../../helpers/product";
import { getProductsByCount } from "../../../helpers/product";
import AdminProductCard from "../../../components/cards/AdminProductCard";


import { removeProduct } from "../../../helpers/product";
import { useSelector } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import Footer from "../../../components/footer/Footer";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const {user} = useSelector((state) => ({...state}))

  useEffect(() => {
    loadAllProducts();
  }, []);
 
  const loadAllProducts = async () => {
    setLoading(true);
    await getProductsByCount(100)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
    
    const handleRemove = async (slug) => {
        if (window.confirm(`Do you want to delete ${slug}?`)) {
            removeProduct(slug, user.token).then(res => {
            loadAllProducts()
            toast.error(`${res.data.title} is deleted!`)

            }).then(res => {
            setLoading(false)
                console.log(res);
            }).catch(error => {
                setLoading(false)
                if (error.response.status === 400)
                  toast.error(error.response.data);
            }
            
            )
        }
     
    }
  
  return (
    <>
      <div className="container-fluid  pt-5">
        <div className="row">
          <div className="col-md-3">
            <AdminNav />
          </div>
        
            <div className=" col-9 pt-5 allproduct">
              {loading ? (
                <h4 className="admin_loading">
                  <LoadingOutlined />
                </h4>
              ) : (
                <h4 className="text-center alert alert-danger pt-5">
                  All Products
                </h4>
              )}
              <div className="admin_display">
                {products.map((product) => (
                  <AdminProductCard
                    product={product}
                    key={product._id}
                    handleRemove={handleRemove}
                  />
                ))}
              </div>
           
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
