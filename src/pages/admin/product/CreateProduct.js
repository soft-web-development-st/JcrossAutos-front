import React, { useState, useEffect } from "react";
import AdminNav from "../../../components/adminNav/AdminNav";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { createProduct } from "../../../helpers/product";
import "../category/cc.css";
import "./pp.css";
import CreateProductForm from "../../../components/forms/CreateProductForm";

import { getCategorySubs } from "../../../helpers/category";
import ImageUpload from "../../../components/forms/ImageUpload";

import { getCategories } from "../../../helpers/category";

import {LoadingOutlined} from '@ant-design/icons'
 

const initialState = {
  title: "",
  description: "",
  price: "",
  categories: "",
  category: "",
  subs: [],
  shipping: "",
  quantity: "",
  images: [],
  colors: ["Black", "Brown", "Gray", "White", "Blue", "Red"],
  brands: ["Tesla", "BMW", "Ferrari ", "Toyota", "Honda", "Ford"],
  color: "Black",
  brand: "Toyota",
};


const CreateProduct = () => {
  const [values, setValues] = useState(initialState);
  const [subOptions, setSubOptions] = useState([]);
  const [showSub, setShowSub] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => ({ ...state }));

  //load categories
  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () =>
    getCategories().then((c) => setValues({ ...values, categories: c.data }));

  const handleSumbit = async (e) => {
    e.preventDefault();
    createProduct(values, user.token)
      .then((res) => {
        console.log(res);
        toast.success(`${res.data.title} is created`)
        window.alert("success");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        if (err) toast.error(err.response.data.err);
      });
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // console.log(e.target.name, "------>>", e.target.value);
  };

  const handleCategoryChange = async (e) => {
    e.preventDefault();
    console.log("CLICKED CATEGORY", e.target.value);
    setValues({ ...values, subs: [], category: e.target.value });
    getCategorySubs(e.target.value).then((res) => {
      console.log("SUB OPTION ON CATERGORY", res);
      setSubOptions(res.data);
    });
    setShowSub(true);
  };

  return (
    <div className="container-fluid pt-1">
      <div className="row ">
        <div className="col-md-3 ">
          <AdminNav />
        </div>
        <div className="col procuct_form pt-1">
          
            {loading ? (
              <LoadingOutlined className="pp_loading " />
            ) : (
              <h4 className="text-success product_title">Create Product</h4>
            )}

            {/* {JSON.stringify(values.images)} */}

            <div className="p-3">
              <ImageUpload
                values={values}
                setValues={setValues}
                setLoading={setLoading}
              />
            </div>

            <CreateProductForm
              handleSumbit={handleSumbit}
              handleChange={handleChange}
              values={values}
              handleCategoryChange={handleCategoryChange}
              subOptions={subOptions}
              showSub={showSub}
              setValues={setValues}
            />
          </div>
      
      </div>
    </div>
  );
};

export default CreateProduct;
