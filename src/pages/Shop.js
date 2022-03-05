import React, { useState, useEffect } from "react";
import { getProductsByCount, fetchProductByFilter } from "../helpers/product";
import { getCategories } from "../helpers/category";
import { getSubs } from "../helpers/sub";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/cards/ProductCard";
import { Menu, Slider, Checkbox, Radio } from "antd";
import {
  DollarOutlined,
  DownSquareOutlined,
  StarOutlined,
} from "@ant-design/icons";
import Star from "../components/forms/Star";
import Footer from "../components/footer/Footer";
import './shop.css'
import ScrollToTop from '../components/scrollToTop/ScrollToTop'

const { SubMenu, ItemGroup } = Menu;

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState([0, 0]);
  const [ok, setOk] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoryIds, setCategoryIds] = useState([]);
  const [star, setStar] = useState([]);
  const [subs, setSubs] = useState([]);
  const [sub, setSub] = useState("");
  const [brands, setBrands] = useState([
    "Tesla",
    "BMW",
    "Toyota", 
    "Honda",
    "Ford",
  ]);
  const [brand, setBrand] = useState([]);
  const [colors, setColors] = useState([
    "Black",
    "Brown",
    "Gray",
    "White",
    "Blue",
    "Red",
  ]);
  const [color, setColor] = useState([]);

  const [shipping, setShipping] = useState("");

  const { search } = useSelector((state) => ({ ...state }));
  const { text } = search;
  let dispatch = useDispatch();

  useEffect(() => {
    loadAllProducts();
    //fetch categories
    getCategories().then((res) => setCategories(res.data));
    //fetch subCategories
    getSubs().then((res) => setSubs(res.data));
  }, []);

  const fetchProducts = (arg) => {
    fetchProductByFilter(arg).then((res) => {
      setProducts(res.data);
    });
  };

  //1, load products by default on page load
  const loadAllProducts = () => {
    getProductsByCount(12).then((p) => {
      setProducts(p.data);
      setLoading(false);
    });
  };

  // 2. load products on user search input

  useEffect(() => {
    const delayed = setTimeout(() => {
      fetchProducts({ query: text });
      if (!text) {
        loadAllProducts();
      }
    }, 300);
    return () => clearTimeout(delayed);
  }, [text]);

  // 3. load products based on price range
  useEffect(() => {
    fetchProducts({ price });
  }, [ok]);

  const handleSlider = (value) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setSub("");
    setBrand("");
    setColor("");
    setCategoryIds([]);
    setPrice(value);
    setTimeout(() => {
      setOk(!ok);
    }, 300);
  };
  // 4. load  products based on category
  // show categorues in a list of checkbox

  const showCategories = () =>
    categories.map((c) => (
      <div key={c._id}>
        <Checkbox
          onChange={handlecheck}
          className="pb-2 pl-4 pr-4"
          value={c._id}
          name="category"
          checked={categoryIds.includes(c._id)}
        >
          {c.name}
        </Checkbox>
        <br />
      </div>
    ));

  //handle check for categories
  const handlecheck = (e) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setSub("");
    setBrand("");
    setColor("");
    setPrice([0, 0]);
    // console.log(e.target.value);
    let inTheState = [...categoryIds];
    let justChecked = e.target.value;
    let foundInTheState = inTheState.indexOf(justChecked);

    // if not found returns -1 else returns index
    if (foundInTheState === -1) {
      inTheState.push(justChecked);
    } else {
      // if found pull out one item from index
      inTheState.splice(foundInTheState, 1);
    }

    setCategoryIds(inTheState);
    // console.log(inTheState);
    fetchProducts({ category: inTheState });
  };

  // 5. show products by star rating
  const handleStarClick = (num) => {
    // console.log(num);
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice([0, 0]);
    setSub("");
    setBrand("");
    setColor("");
    setCategoryIds([]);
    setStar(num);
    fetchProducts({ stars: num });
  };

  const showStars = () => (
    <>
      <div className="pr-4 pl-4 pb-2">
        <Star starClick={handleStarClick} numberOfStars={5} />
      </div>
      <div className="pr-4 pl-4 pb-2">
        <Star starClick={handleStarClick} numberOfStars={4} />
      </div>
      <div className="pr-4 pl-4 pb-2">
        <Star starClick={handleStarClick} numberOfStars={3} />
      </div>
      <div className="pr-4 pl-4 pb-2">
        <Star starClick={handleStarClick} numberOfStars={2} />
      </div>
      <div className="pr-4 pl-4 pb-2">
        <Star starClick={handleStarClick} numberOfStars={1} />
      </div>
    </>
  );
  // 6. show products by sub category

  const showSubs = () =>
    subs.map((s) => (
      <div
        onClick={() => handleSub(s)}
        className="p-1 m-1 badge text-success badge-secondary"
        style={{ cursor: "pointer" }}
        key={s._id}
      >
        {s.name}
      </div>
    ));

  const handleSub = (sub) => {
    setSub(sub);
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setPrice([0, 0]);
    setCategoryIds([]);
    setStar("");
    fetchProducts({ sub });
    setBrand("");
    setColor("");
  };
  // 7. show products based on brands

  const handleBrand = (e) => {
    setPrice([0, 0]);
    setCategoryIds([]);
    setStar("");
    setSub("");
    setColor("");
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setBrand(e.target.value);
    fetchProducts({ brand: e.target.value });
  };
  const showBrands = () =>
    brands.map((b) => (
      <Radio
        key={b}
        value={b}
        name={b}
        checked={b === brand}
        onChange={handleBrand}
        className="pb-1 pl-4 pr-4"
      >
        {b}
      </Radio>
    ));

  // 7. show products based on colors

  const handleColor = (e) => {
    setPrice([0, 0]);
    setCategoryIds([]);
    setStar("");
    setSub("");
    dispatch({
      type: "SEARCH_QUERY",
      payload: { text: "" },
    });
    setBrand("");
    setColor(e.target.value);
    fetchProducts({ color: e.target.value });
  };

  const showColors = () =>
    colors.map((c) => (
      <Radio
        key={c}
        value={c}
        name={c}
        checked={c === color}
        onChange={handleColor}
        className="pb-1 pl-4 pr-4"
      >
        {c}
      </Radio>
    ));

  // 9. show product based on shipping

    const handleShippingChange = (e) => {
         setPrice([0, 0]);
         setCategoryIds([]);
         setStar("");
         setSub("");
         dispatch({
           type: "SEARCH_QUERY",
           payload: { text: "" },
         });
         setBrand("");
        setColor('');
        setShipping(e.target.value)
         fetchProducts({ shipping: e.target.value });
    }
    

  const showshipping = () => (
    <>
      <Checkbox
        className="pb-2 pl-4 pr-4 "
        onChange={handleShippingChange}
        value="Yes"
        checked={shipping === "Yes"}
      >
        Yes
      </Checkbox>
      <Checkbox
        className="pb-2 pl-4 pr-4 "
        onChange={handleShippingChange}
        value="No"
        checked={shipping === "No"}
      >
        No
      </Checkbox>
    </>
  ); 

  return (
    <>
      <div className="container-fluid pt-5 pb-5 shop_container ">
        <div className="row pb-5 ">
          <div className="col-md-3 pt-2">
            <h4 className="alert  alert-danger shop_filter">Search/Filter</h4>
            <hr />
            <Menu mode="inline" defaultOpenKeys={["1", "2", "3", "5", "6"]}>
              {/* Price */}
              <SubMenu
                key="1"
                title={
                  <span className="h6 text-success">
                    <DollarOutlined /> Price
                  </span>
                }
              >
                 <div>
                  <Slider
                    className="ml-4 mr-4"
                    tipFormatter={(v) => `$${v}`}
                    range
                    value={price}
                    onChange={handleSlider}
                    max="90000"
                  />
                </div>
              </SubMenu>

              {/* Category */}
              <SubMenu
                key="2"
                title={
                  <span className="h6 text-success">
                    <DownSquareOutlined /> Make
                    <br />
                  </span>
                }
              >
                <div style={{ marginTop: "10px" }}>{showCategories()}</div>
              </SubMenu>
              {/* Stars */}
              <SubMenu
                key="3"
                title={
                  <span className="h6 text-success">
                    <StarOutlined /> Rating
                    <br />
                  </span>
                }
              >
                <div style={{ marginTop: "10px" }}>{showStars()}</div>
              </SubMenu>

              {/* sub Category */}
              <SubMenu
                key="4"
                title={
                  <span className="h6 text-success">
                    <DownSquareOutlined /> Model
                    <br />
                  </span>
                }
              >
                <div style={{ marginTop: "10px" }} className="pl-4 pr-4">
                  {showSubs()}
                </div>
              </SubMenu>

              {/* Brands */}
              <SubMenu
                key="5"
                title={
                  <span className="h6 text-success">
                    <DownSquareOutlined /> Brands
                    <br />
                  </span>
                }
              >
                <div style={{ marginTop: "10px" }} className="pr-5">
                  {showBrands()}
                </div>
              </SubMenu>

              {/* Colors */}
              <SubMenu
                key="6"
                title={
                  <span className="h6 text-success">
                    <DownSquareOutlined /> Colors
                    <br />
                  </span>
                }
              >
                <div style={{ marginTop: "10px" }} className="pr-5">
                  {showColors()}
                </div>
              </SubMenu>

              {/* Shipping */}
              <SubMenu
                key="7"
                title={
                  <span className="h6 text-success">
                    <DownSquareOutlined /> Shipping
                    <br />
                  </span>
                }
              >
                <div style={{ marginTop: "10px" }} className="pr-5">
                  {showshipping()}
                </div>
              </SubMenu>
            </Menu>
          </div>
          <div className="col-md-9 pt-2">
            {loading ? (
              <h4>Loading..</h4>
            ) : (
              <h4 className="text-center alert alert-danger">Products</h4>
            )}
            {products.length < 1 && (
              <p className="text-center alert alert-success pt-5">
                <h1 className="text-success">No Products Found </h1> <br />{" "}
                Filter to see more Products!
              </p>
            )}
            <div className="row ">
              {products.map((p) => (
                <div key={p._id} className="col-md-6 ">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Shop;
