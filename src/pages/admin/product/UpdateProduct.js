import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/adminNav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { updateProduct } from "../../../helpers/product";
import "../category/cc.css";
import "./pp.css";


import { getProduct } from "../../../helpers/product";

import ImageUpload from "../../../components/forms/ImageUpload";

import { getCategories ,getCategorySubs} from "../../../helpers/category";

import { LoadingOutlined } from "@ant-design/icons";

import { useParams } from "react-router-dom";

import UpdateProductForm from "../../../components/forms/UpdateProductForm";

const initialState = {
  title: "",
  description: "",
  price: "",
  category: "",
  subs: [],
  shipping: "",
  quantity: "",
  images: [],
  colors: ["Black", "Brown", "Gray", "White", "Blue", "Red"],
  brands: ["Tesla", "BMW", "Ferrari ", "Toyota", "Honda", "Ford"],
  color: "",
  brand: "",
};


const UpdateProduct = ({ match, history }) => {
  const [values, setValues] = useState(initialState);
  const [subOptions, setSubOptions] = useState([]);
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false);
  
  const { user } = useSelector((state) => ({ ...state }));
  
  const { slug } = match.params


  useEffect(() => {
    loadProduct()
    loadCategories()
  }, [])

  const loadProduct = () => {
    getProduct(slug).then((p) => {
      console.log('SINGLE PRODUCT ', p);
      setValues({ ...values, ...p.data });
    });
  };
const loadCategories = () =>
  getCategories().then((c) => {
    console.log('GET CATEGORIES IN UPDATE PRODUCT',c.data);
    setCategories(c.data)
  });

  const handleSumbit = (e) => {
    e.preventDefault()
    setLoading(true)

   updateProduct(slug, values, user.token)
     .then((res) => {
       setLoading(false)
       console.log(res);
       toast.success(`${res.data.title} has been updated`);
      history.push('/admin/products')
     })
     .catch((err) => {
       setLoading(false)
       console.log(err);
       if (err) toast.error(err.response.data.err);
     });
  }

  const handleChange = (e) => {
     setValues({ ...values, [e.target.name]: e.target.value });
  }
 
   const handleCategoryChange = async (e) => {
     e.preventDefault();
     console.log("CLICKED CATEGORY", e.target.value);
     setValues({ ...values, subs: [], category: e.target.value });
     getCategorySubs(e.target.value).then((res) => {
       console.log("SUB OPTION ON CATERGORY", res);
       setSubOptions(res.data);
     });
   };

 
 

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 pt-5">
          <AdminNav />
        </div>
        <div className="procuct_form">
          {loading ? (
            <LoadingOutlined className="pp_loading" />
          ) : (
            <h4 className="text-center update_title">Update Product</h4>
          )}

          <ImageUpload
            values={values}
            setValues={setValues}
            setLoading={setLoading}
          />
          <UpdateProductForm
            handleSumbit={handleSumbit}
            handleChange={handleChange}
            handleCategoryChange={handleCategoryChange}
            values={values}
            setValues={setValues}
            categories={categories}
            subOptions={subOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
